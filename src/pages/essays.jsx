import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { GiScrollQuill } from 'react-icons/gi';
import EssayCard from '../components/EssayCard';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';

function EssaysIndex({ data }) {
  return (
    <Layout>
      <Helmet title="Essays • Infinite Caesura" />

      <PageHeading title="Essays" subtitle='Long-form writing on topics ranging from design and technology, to political theory, to art history, and beyond.' icon={<GiScrollQuill size="2rem" />} />
      <div className="mt-6 flex flex-col gap-8">
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
