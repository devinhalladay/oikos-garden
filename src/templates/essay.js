import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { kebabCase } from 'lodash';
import EssayHeader from '../components/Essay/EssayHeader';
import { Helmet } from 'react-helmet';

const EssayTemplate = ({ data, location }) => {
  const post = data.allMdx.nodes[0];
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet
        title={`${post.frontmatter.title} • Infinite Caesura`}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article">
        <EssayHeader post={post} />
        <MDXRenderer>{post.body}</MDXRenderer>
        <footer
          style={{
            height: 200,
          }}></footer>
      </article>
    </Layout>
  );
};

export default EssayTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { id: { eq: $id } }) {
      nodes {
        ...Essay
      }
    }
  }
`;
