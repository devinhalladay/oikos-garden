import React from "react";
import Layout from "../components/layout";

// Components
import { Link, graphql } from "gatsby";
const TagsPage = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  console.log(data.allMdx.group);
  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {data.allMdx.nodes.map((node) => {
          const { title, slug } = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={`/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/essays/" }
        frontmatter: { tags: { in: [$tag] } }
      }
    ) {
      nodes {
        frontmatter {
          slug
          title
        }
      }
      totalCount
    }
  }
`;
