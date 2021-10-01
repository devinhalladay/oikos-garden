import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import EssayHeader from '../components/Essay/EssayHeader';
import Layout from '../components/layout';
import PageHeading from '../components/PageHeading';

function EssaysPage({ data }) {
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

{
  /* <article>
            <Link to={`/${node.frontmatter.slug}`}>
              <h2 class="title">
                {node.frontmatter
                  ? node.frontmatter.title
                  : node.title}
              </h2>
              <p>{node.frontmatter.subtitle}</p>
              <footer>
                <small>{node.frontmatter.date}</small>
                {node.frontmatter.tags ? (
                  <ul>
                    {node.frontmatter.tags.map((tag) => {
                      return <li>{tag}</li>;
                    })}
                  </ul>
                ) : null}
              </footer>
            </Link>
          </article> */
}

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/essays/" } }
      sort: { fields: frontmatter___date }
    ) {
      nodes {
        ...EssayPreview
      }
    }
  }
`;

export default EssaysPage;
