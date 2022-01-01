import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import EssayCard from '../components/EssayCard';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';

function EssaysIndex({ data }) {
  return (
    <Layout>
      <Helmet title="Essays • Infinite Caesura" />

      <PageHeading title="Essays" />
      <div className="mt-6">
        {data.allMdx.nodes.map((node) => {
          return <EssayCard post={node} />;
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
