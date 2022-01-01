const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for each post type
  const templates = {
    essay: path.resolve(`./src/templates/essay.js`),
    tag: path.resolve("./src/templates/tag.js"),
    work: path.resolve("./src/templates/work.js"),
  };

  // Query all the posts
  const allContent = await graphql(
    `
      {
        essays: allMdx(
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

        tags: allMdx {
          group(field: frontmatter___tags) {
            tag: fieldValue
          }
        }

        allBrainNote {
          group(field: childMdx___frontmatter___tags) {
            tag: fieldValue
          }
        }

        works: allMdx(
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

  if (allContent.errors) {
    reporter.panicOnBuild(
      `There was an error loading your content.`,
      allContent.errors
    );
    return;
  }

  const { data } = allContent;

  const allEssays = data.essays.nodes;

  const allTags = [...data.tags.group, ...data.allBrainNote.group];

  const allWorks = data.works.nodes;

  if (allEssays.length > 0) {
    allEssays.forEach((essay, index) => {
      const previousEssayId = index === 0 ? null : allEssays[index - 1].id;
      const nextEssayId =
        index === allEssays.length - 1 ? null : allEssays[index + 1].id;

      createPage({
        path: essay.frontmatter.slug,
        component: templates.essay,
        context: {
          id: essay.id,
          previousEssayId,
          nextEssayId,
        },
      });
    });
  }

  if (allWorks.length > 0) {
    allWorks.forEach((work) => {
      createPage({
        path: work.frontmatter.slug,
        component: templates.work,
        context: {
          id: work.id,
        },
      });
    });
  }

  if (allTags.length > 0) {
    // Make tag pages
    allTags.forEach((tag) => {
      createPage({
        path: `/tags/${_.kebabCase(tag.tag)}/`,
        component: templates.tag,
        context: {
          tag: tag.tag,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx" && node.fileAbsolutePath) {
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
      frontmatter: Frontmatter!
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
