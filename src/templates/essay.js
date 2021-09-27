import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { kebabCase } from 'lodash';
import EssayHeader from '../components/Essay/EssayHeader';

const EssayTemplate = ({ data, location }) => {
  const post = data.allMdx.nodes[0];
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article">
        <EssayHeader post={post} />
        <MDXRenderer>{post.body}</MDXRenderer>
        <footer
          style={{
            height: 200,
          }}></footer>
      </article>
    </Layout>
  );
};

export default EssayTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { id: { eq: $id } }) {
      nodes {
        id
        excerpt(pruneLength: 160)
        body
        frontmatter {
          subtitle
          date(formatString: "MMMM YYYY")
          title
          tags
        }

        fields {
          readingTime {
            text
          }
        }

        slug
      }
    }
  }
`;
