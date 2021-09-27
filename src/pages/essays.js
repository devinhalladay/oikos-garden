import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import NotesTable from '../components/NotesTable';
import EssayHeader from '../components/Essay/EssayHeader';

function EssaysPage({ data }) {
  console.log(data);
  return (
    <Layout>
      <h1 className="font-sans text-2xl tracking-normal border-b border-gray-300 pb-1 mb-6">
        Essays
      </h1>
      {data.allMdx.nodes.map((node) => {
        console.log(node);
        return <EssayHeader isLinked="true" post={node} />;
      })}
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
        id
        slug
        frontmatter {
          slug
          title
          tags
          subtitle
          date(formatString: "MMMM YYYY")
          cover_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                src
              }
            }
          }
        }

        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
`;

export default EssaysPage;
