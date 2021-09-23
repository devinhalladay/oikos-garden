import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import NotesTable from "../components/NotesTable";

function EssaysPage({ data }) {
  console.log(data);
  return (
    <Layout>
      {data.allMdx.nodes.map((node) => {
        console.log(node);
        return (
          <article>
            <Link to={`/${node.frontmatter.slug}`}>
              <h2 class="title">
                {node.frontmatter
                  ? node.frontmatter.title
                  : node.title}
              </h2>
              <p>{node.frontmatter.subtitle}</p>
              <footer>
                <small>{node.frontmatter.date}</small>
                {node.frontmatter.tags ? (
                  <ul>
                    {node.frontmatter.tags.map((tag) => {
                      return <li>{tag}</li>;
                    })}
                  </ul>
                ) : null}
              </footer>
            </Link>
          </article>
        );
      })}
    </Layout>
  );
}

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/essays/" } }
    ) {
      nodes {
        id
        slug
        frontmatter {
          slug
          title
          tags
          subtitle
          date(formatString: "MMMM YYYY")
          cover_image
        }
      }
    }
  }
`;

export default EssaysPage;
