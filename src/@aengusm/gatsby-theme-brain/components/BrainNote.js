import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import React from 'react';
import Layout from '../../../components/Layout';
import PageHeading from '../../../components/PageHeading';
import SectionHeading from '../../../components/SectionHeading';
import TagLink from '../../../components/TagLink';

const BrainNote = ({ note }) => {
  let references = [];
  let referenceBlock;
  console.log(note);
  if (note.inboundReferencePreviews != (null || undefined)) {
    references = note.inboundReferencePreviews.map((ref) => (
      <li>
        <a href={ref.source}>{ref.source}</a>
        <br />
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
      </li>
    ));

    if (references.length > 0) {
      referenceBlock = (
        <>
          <h2>Linked refs</h2>
          <ul>{references}</ul>
        </>
      );
    }
  }

  let externalRefBlock = [];
  if (note.externalInboundReferences !== (null || undefined)) {
    let refs = note.externalInboundReferences.map((ref) => (
      <li>
        <a href={ref.sourceUrl}>
          {ref.siteName}/{ref.sourcePage}
        </a>
        <br />
        <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
      </li>
    ));
    if (refs.length > 0) {
      externalRefBlock = (
        <>
          <h2>External refs</h2>
          <ul>{refs}</ul>
        </>
      );
    }
  }
  return (
    <Layout>
      <article id="brainNote">
        <p className="text-sm font-medium text-gray-500 font-sans mb-2">
          <span className="uppercase text-xs font-bold tracking-wider py-0.5 px-1 bg-gray-500 mr-1 text-white rounded-md">
            Note in progress
          </span>{' '}
          Last updated {note.childMdx.frontmatter.date}
        </p>
        <PageHeading title={note.title}>
          <div>
            {note.childMdx.frontmatter.tags &&
              note.childMdx.frontmatter.tags.map((tag, i) => (
                <TagLink tag={tag} size={'sm'} />
              ))}
          </div>
        </PageHeading>
        {note.absolutePath ? (
          <MDXRenderer>{note.childMdx.body}</MDXRenderer>
        ) : (
          <div>
            <p>
              There's no note here yet! That probably just means a
              link you clicked on hasn't been published. This will
              happen from time to time, as these notes are works in
              progress. If you really want to get to a given note, DM
              me on Twitter and I can publish it for you!
            </p>
          </div>
        )}
        {referenceBlock}
        {externalRefBlock}
      </article>
    </Layout>
  );
};

export default BrainNote;
