import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

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
            const {
              categories,
              cover_image,
              description,
              featured,
              scope,
              title,
              topics,
            } = work.node.frontmatter;

            return (
              <li class="card--assemblage" key={i}>
                <a href="/">
                  <p class="title">{title}</p>
                  {/* <img src={cover_image} alt="" /> */}
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
