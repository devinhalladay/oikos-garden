import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import EssayHeader from '../components/Essay/EssayHeader';
import Layout from '../components/layout';
import PageHeading from '../components/PageHeading';

function EssaysIndex({ data }) {
  return (
    <Layout>
      <Helmet title="Essays • Infinite Caesura" />

      <PageHeading title="Essays" />
      <div className="mt-6">
        {data.allMdx.nodes.map((node) => {
          return <EssayHeader isLinked="true" post={node} />;
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/essays/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        ...EssayPreview
      }
    }
  }
`;

export default EssaysIndex;
