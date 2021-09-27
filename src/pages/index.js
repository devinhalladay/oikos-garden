import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import NotesTable from '../components/NotesTable';
import AssemblageCard from '../components/Assemblages/AssemblageCard';

// markup
const IndexPage = ({ data: { notesQuery, assemblagesQuery } }) => {
  console.log(assemblagesQuery);
  return (
    <Layout width="wide">
      <div className="flex flex-col xl:flex-row">
        <section className="xl:w-2/3 mr-8">
          <h2 className="indent-0 mb-2 font-semibold border-b border-gray-300 pb-1">
            Assemblages: Exercises in worldbuilding
          </h2>
          <p className="font-sans text-md mb-6 leading-5">
            Thematic compositions of notes, essays, and works. Similar
            to{' '}
            <a
              href="https://tomcritchlow.com/2019/07/17/blogchains/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium">
              blogchains
            </a>
            .
          </p>
          <div class="grid md:grid-cols-2 pl-0 list-none gap-4 gap">
            {assemblagesQuery.edges.map((edge) => {
              const { node } = edge;
              return <AssemblageCard node={node} />;
            })}
          </div>
        </section>
        <section className="xl:w-1/3">
          <h2 className="indent-0 mb-2 font-semibold border-b border-gray-300 pb-1">
            Recent Notes
          </h2>
          <p className="leading-5 font-sans text-md mb-6">
            Rolling, work-in-progress notes, images, clippings, and
            threads.
          </p>
          <NotesTable notes={notesQuery.nodes} />
        </section>
      </div>
      <div>
        <section className="w-full">
          <h2 className="indent-0 mb-2 font-semibold border-b border-gray-300 pb-1">
            Creative Works
          </h2>
          <p className="leading-5 font-sans text-md mb-6">
            Design, art, and other media I've created regarding the
            concepts on this site.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    assemblagesQuery: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/assemblages/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            cover_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          slug
        }
      }
    }

    notesQuery: allBrainNote(
      limit: 10
      filter: { absolutePath: { regex: "/content/notes/" } }
    ) {
      nodes {
        id
        slug
        childMdx {
          frontmatter {
            date(formatString: "MM/DD/YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
