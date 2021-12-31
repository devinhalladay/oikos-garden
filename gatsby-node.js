const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const website = require('./config/website');
const _ = require('lodash');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const essayTemplate = path.resolve(`./src/templates/essay.js`);
  const tagTemplate = path.resolve('./src/templates/tag.js');
  const assemblageTemplate = path.resolve(
    './src/templates/assemblage.js'
  );
  const workTemplate = path.resolve('./src/templates/work.js');

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/content/essays/" } }
        ) {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `
  );

  const tagsResults = await graphql(
    `
      {
        allMdx {
          group(field: frontmatter___tags) {
            tag: fieldValue
          }
        }

        allBrainNote {
          group(field: childMdx___frontmatter___tags) {
            tag: fieldValue
          }
        }
      }
    `
  );

  const assemblageResults = await graphql(
    `
      {
        allMdx(
          limit: 1000
          filter: {
            fileAbsolutePath: { regex: "/content/assemblages/" }
          }
        ) {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `
  );

  const workResults = await graphql(
    `
      {
        allMdx(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/content/works/" } }
        ) {
          nodes {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your essays`,
      result.errors
    );
    return;
  }

  const essays = result.data.allMdx.nodes;
  const tags = [
    ...tagsResults.data.allMdx.group,
    ...tagsResults.data.allBrainNote.group,
  ];
  const assemblages = assemblageResults.data.allMdx.nodes;
  const works = workResults.data.allMdx.nodes;

  // Create blog essays pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (essays.length > 0) {
    essays.forEach((essay, index) => {
      const previousEssayId =
        index === 0 ? null : essays[index - 1].id;
      const nextEssayId =
        index === essays.length - 1 ? null : essays[index + 1].id;

      createPage({
        path: essay.frontmatter.slug,
        component: essayTemplate,
        context: {
          id: essay.id,
          previousEssayId,
          nextEssayId,
        },
      });
    });
  }

  if (works.length > 0) {
    works.forEach((work, index) => {
      createPage({
        path: work.frontmatter.slug,
        component: workTemplate,
        context: {
          id: work.id,
        },
      });
    });
  }

  if (tags.length > 0) {
    // Make tag pages
    tags.forEach((tag) => {
      createPage({
        path: `/tags/${_.kebabCase(tag.tag)}/`,
        component: tagTemplate,
        context: {
          tag: tag.tag,
        },
      });
    });
  }

  if (assemblages.length > 0) {
    // Make tag pages
    assemblages.forEach((a) => {
      createPage({
        path: `/assemblages/${_.kebabCase(a.frontmatter.slug)}/`,
        component: assemblageTemplate,
        context: {
          id: a.id,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx' && node.fileAbsolutePath) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      twitter: String
    }
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      cover_image: File @fileByRelativePath
      slug: String
      tags: [String]
      subtitle: String
      featured: Boolean
      public: Boolean
    }
  `);
};
