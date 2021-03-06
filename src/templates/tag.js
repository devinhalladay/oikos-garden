// Components
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import AssemblageCard from '../components/AssemblageCard';
import EssayCard from '../components/EssayCard';
import Layout from '../components/Layout';
import NoteCard from '../components/NoteCard';
import PageHeading from '../components/PageHeading';
import SectionHeading from '../components/SectionHeading';
import TagLink from '../components/TagLink';

const TagPage = ({
  pageContext,
  data: {
    assemblagesQuery,
    notesQuery,
    essaysQuery,
    relatedMdxTags,
    relatedBrainTags,
  },
}) => {
  const { tag } = pageContext;
  const assemblageCount = assemblagesQuery.nodes.length;
  const notesCount = notesQuery.nodes.length;
  const essaysCount = essaysQuery.nodes.length;
  const worksCount = 0;

  // const allTags = [
  //   ...relatedMdxTags.group,
  //   ...relatedBrainTags.group,
  // ].reduce(
  //   (acc, curr) => {
  //     let fromMap = acc.map[curr.tag];

  //     if (!fromMap) {
  //       acc.map[curr.tag] = fromMap = {
  //         totalCount: curr.totalCount,
  //         tag: curr.tag,
  //       };
  //       acc.result.push(fromMap);
  //     }

  //     fromMap.totalCount += curr.totalCount;

  //     return acc;
  //   },
  //   {
  //     map: {},
  //     result: [],
  //   }
  // ).result;

  const allTags = [...relatedMdxTags.group].filter(
    (t) => t.tag !== tag
  );

  return (
    <Layout wide>
      <Helmet title={`${tag} • Infinite Caesura`} />
      <PageHeading
        title={
          <>
            Entries filed under <span className="italic">{tag}</span>
          </>
        }
        subtitle={
          <>
            Entries in this wiki are tagged by{' '}
            <strong>concept</strong> for easy discovery. You may
            browse all entries under a given topic.
          </>
        }>
        <div>
          <p className="uppercase font-sans text-gray-500 tracking-wide text-sm">
            Related tags
          </p>
          <ul>
            {allTags.map((t, i) => (
              <li key={i} className="inline-block">
                <TagLink size="sm" key={i} tag={t.tag} />
              </li>
            ))}
          </ul>
        </div>
      </PageHeading>
      <div className="flex flex-col xl:flex-row">
        {assemblageCount > 0 && (
          <section className="xl:w-2/3 mr-8">
            <SectionHeading
              title={`Assemblages (${assemblageCount})`}
            />
            <div className="grid md:grid-cols-2 pl-0 list-none gap-4 gap">
              {assemblagesQuery.nodes.map((edge) => {
                const { node } = edge;
                return <AssemblageCard node={node} />;
              })}
            </div>
          </section>
        )}
        {notesCount > 0 && (
          <section
            className={assemblageCount > 0 ? 'xl:w-1/3' : 'w-full'}>
            <SectionHeading title={`Notes (${notesCount})`} />
            {notesQuery.nodes.map((note) => (
              <NoteCard note={note} />
            ))}
          </section>
        )}
      </div>
      <div>
        {essaysCount > 0 && (
          <section className="w-full">
            <SectionHeading title={`Essays (${essaysCount})`} />
            <div className="grid grid-cols-2 gap-4">
              {essaysQuery.nodes.map((node) => (
                <EssayCard post={node} mini />
              ))}
            </div>
          </section>
        )}
        {worksCount > 0 && (
          <section className="w-full">
            <SectionHeading
              title={`Creative Works (${worksCount})`}
            />
          </section>
        )}
      </div>
    </Layout>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query ($tag: String) {
    assemblagesQuery: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/pages/assemblages/" }
        frontmatter: { tags: { in: [$tag] } }
      }
    ) {
      nodes {
        id
        slug
        ...AssemblageFrontmatter
      }
    }

    notesQuery: allBrainNote(
      limit: 10
      filter: {
        absolutePath: { regex: "/content/notes/" }
        childMdx: { frontmatter: { tags: { in: [$tag] } } }
      }
    ) {
      nodes {
        id
        slug
        title
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
      filter: {
        fileAbsolutePath: { regex: "/content/essays/" }
        frontmatter: { tags: { in: [$tag] } }
      }
      sort: { fields: frontmatter___date }
      limit: 4
    ) {
      nodes {
        ...EssayPreview
      }
    }

    relatedMdxTags: allMdx(
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }

    relatedBrainTags: allBrainNote(
      filter: { childMdx: { frontmatter: { tags: { in: [$tag] } } } }
    ) {
      group(field: childMdx___frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;
