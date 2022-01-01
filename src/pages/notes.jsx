import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import NoteCard from '../components/NoteCard';
import PageHeading from '../components/PageHeading';
import TagLink from '../components/TagLink';

// markup
const NotesIndex = ({ data: { brainNotes } }) => {
  const { edges } = brainNotes;

  return (
    <Layout width="wide">
      <Helmet title="Notes • Infinite Caesura" />
      <PageHeading title="Working Notes" />
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-2">
          {edges.map(({ node }) => {
            return <NoteCard note={node} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default NotesIndex;

export const pageQuery = graphql`
  query allNotes {
    brainNotes: allBrainNote(
      sort: { fields: childMdx___frontmatter___date }
      filter: { absolutePath: { regex: "/content/notes/" } }
    ) {
      edges {
        node {
          title
          slug
          childMdx {
            frontmatter {
              date(formatString: "MM.DD.YYYY")
              subtitle
              published
              tags
            }
          }
        }
      }
    }

    # logseqNotes: allMdx(filter: {fields: {source: {eq: "logseqRepo"}}, frontmatter: {title: {}, public: {}}}) {
    #   edges {
    #     node {
    #       frontmatter {
    #       title
    #       public
    #       }
    #     slug
    #     }
    #   }
    # }
  }
`;
