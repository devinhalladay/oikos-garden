import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

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
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
        <footer
          style={{
            height: 200,
          }}></footer>
      </article>
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}>
          <li>
            {previous && (
              <Link to={previous.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  );
};

export default EssayTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
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
          title
          description
        }

        slug
      }
    }
    previous: allMdx(filter: { id: { eq: $previousPostId } }) {
      nodes {
        id
        excerpt(pruneLength: 160)
        body
        frontmatter {
          title
          description
        }

        slug
      }
    }
    next: allMdx(filter: { id: { eq: $nextPostId } }) {
      nodes {
        id
        excerpt(pruneLength: 160)
        body
        frontmatter {
          title
          description
        }

        slug
      }
    }
  }
`;
