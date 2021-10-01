import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import EssayHeader from '../components/Essay/EssayHeader';
import Layout from '../components/layout';
import PageHeading from '../components/PageHeading';

const WorkTemplate = ({ data, location }) => {
  const work = data.allMdx.nodes[0];

  console.log(data);

  return (
    <Layout location={location}>
      <Helmet
        title={`${work.frontmatter.title} • Infinite Caesura`}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article">
        <PageHeading title={work.frontmatter.title} />
        <MDXRenderer>{work.body}</MDXRenderer>
        <footer
          style={{
            height: 200,
          }}></footer>
      </article>
    </Layout>
  );
};

export default WorkTemplate;

export const pageQuery = graphql`
  query WorksBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { id: { eq: $id } }) {
      nodes {
        ...Work
      }
    }
  }
`;
