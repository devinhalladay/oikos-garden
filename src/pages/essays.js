import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import NotesTable from '../components/NotesTable';
import EssayHeader from '../components/Essay/EssayHeader';
import SectionHeading from '../components/SectionHeading';

function EssaysPage({ data }) {
  console.log(data);
  return (
    <Layout>
      <SectionHeading title="Essays" />
      <div className="mt-6">
        {data.allMdx.nodes.map((node) => {
          console.log(node);
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
