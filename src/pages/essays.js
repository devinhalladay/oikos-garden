import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import NotesTable from "../components/NotesTable";

function EssaysPage({ data }) {
  console.log(data);
  return (
    <Layout>
      <NotesTable notes={data.allMdx.nodes} />
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
          title
        }
      }
    }
  }
`;

export default EssaysPage;
