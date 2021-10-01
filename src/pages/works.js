import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

// markup
const IndexPage = ({ data: { worksQuery } }) => {
  const { node } = worksQuery;

  return (
    <Layout>
      <Helmet title="Works • Infinite Caesura" />
      <section>
        <h2>Works</h2>
        <ul class="assemblage-list">
          {worksQuery.edges.map((work, i) => {
            const { title } = work.node.frontmatter;

            return (
              <li class="card--assemblage" key={i}>
                <a href="/">
                  <p class="title">{title}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    worksQuery: allMdx(
      filter: { frontmatter: { type: { eq: "Works" } } }
    ) {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            scope
            tags
            featured
            description
            categories
          }
        }
      }
    }
  }
`;
