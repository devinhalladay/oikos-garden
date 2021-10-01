import { graphql } from 'gatsby';
import * as React from 'react';
import AssemblageCard from '../components/Assemblages/AssemblageCard';
import EssayHeader from '../components/Essay/EssayHeader';
import Layout from '../components/layout';
import NoteCard from '../components/Notes/NoteCard';
import SectionHeading from '../components/SectionHeading';

const IndexPage = ({
  data: { notesQuery, assemblagesQuery, essaysQuery },
}) => {
  return (
    <Layout width="wide">
      <div className="flex flex-col xl:flex-row">
        <section className="xl:w-2/3 mr-8">
          <SectionHeading
            title="Assemblages: Exercises in worldbuilding"
            subhead={
              <>
                Thematic compositions of notes, essays, and works.
                Similar to{' '}
                <a
                  href="https://tomcritchlow.com/2019/07/17/blogchains/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium">
                  blogchains
                </a>
                .
              </>
            }
          />
          <div class="grid md:grid-cols-2 pl-0 list-none gap-4 gap">
            {assemblagesQuery.edges.map((edge) => {
              const { node } = edge;
              return <AssemblageCard node={node} />;
            })}
          </div>
        </section>
        <section className="xl:w-1/3">
          <SectionHeading
            title="Recent Notes"
            subhead="Rolling, work-in-progress notes, images, clippings, and
            threads."
          />
          {notesQuery.nodes.map((note) => (
            <NoteCard note={note} />
          ))}
        </section>
      </div>
      <div>
        <section className="w-full">
          <SectionHeading
            title="Featured Essays"
            subhead="Long-form writing on topics ranging from design and technology, to political theory, to art history, and beyond."
          />
          <div className="grid grid-cols-2 gap-4">
            {essaysQuery.nodes.map((node) => (
              <EssayHeader post={node} isLinked mini />
            ))}
          </div>
        </section>
        <section className="w-full">
          <SectionHeading
            title="Creative Works"
            subhead="Design, art, and other media I've created regarding the
            concepts on this site."
          />
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
          slug
          ...AssemblageFrontmatter
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

    essaysQuery: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/essays/" } }
      sort: { fields: frontmatter___date }
      limit: 4
    ) {
      nodes {
        ...EssayPreview
      }
    }
  }
`;
