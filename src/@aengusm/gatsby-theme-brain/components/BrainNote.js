import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import React from 'react';
import Layout from '../../../components/layout';
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
      <div id="brainNote">
        <article>
          <SectionHeading
            title={note.title}
            subhead={
              note.childMdx.frontmatter &&
              note.childMdx.frontmatter.tags && (
                <div className="font-sans">
                  {note.childMdx.frontmatter.tags.map((tag, i) => (
                    <TagLink tag={tag} size={'sm'} />
                  ))}
                </div>
              )
            }
          />
          {note.absolutePath ? (
            <MDXRenderer>{note.childMdx.body}</MDXRenderer>
          ) : (
            <div>
              <p>
                There's no note here yet! That probably just means a
                link you clicked on hasn't been published. This will
                happen from time to time, as these notes are works in
                progress. If you really want to get to a given note,
                DM me on Twitter and I can publish it for you!
              </p>
            </div>
          )}
          {referenceBlock}
          {externalRefBlock}
        </article>
      </div>
    </Layout>
  );
};

export default BrainNote;
