import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import NotesTable from "../components/NotesTable";

// markup
const IndexPage = ({ data: { notesQuery, assemblagesQuery } }) => {
  console.log(assemblagesQuery);
  return (
    <Layout>
      <section>
        <h2>Assemblages</h2>
        <ul class="assemblage-list">
          {assemblagesQuery.edges.map((edge) => {
            const { node } = edge;
            const { title, slug, cover_image } = node.frontmatter;
            return (
              <li class="card--assemblage">
                <Link to={slug}>
                  <p class="title">{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section>
        <h2>Recent Notes</h2>
        <NotesTable notes={notesQuery.edges} />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    assemblagesQuery: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/assemblages/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            cover_image
          }
          slug
        }
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
