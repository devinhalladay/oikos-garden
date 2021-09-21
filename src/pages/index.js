import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = ({ data: { notesQuery, assemblagesQuery } }) => {
  return (
    <Layout>
      <section>
        <h2>You're on the Front Page</h2>
        <ul class="assemblage-list">
          {/* {notesQuery.edges.map(({ node: note }) => (
            <li class="card--assemblage">
              <a href={`${note.slug}`}>
                <p class="title">{note.title}</p>
              </a>
            </li>
          ))} */}
          {assemblagesQuery.group.map((group) => (
            <li class="card--assemblage">
              <a href="/">
                <p class="title">{group.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    assemblagesQuery: allMdx {
      group(field: frontmatter___topics) {
        totalCount
        title: fieldValue
      }
    }
    notesQuery: allBrainNote {
      edges {
        node {
          title
          slug
          id
        }
      }
    }
  }
`;
