import React, { FC } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../../../components/Layout";
import PageHeading from "../../../components/PageHeading";
import TagLink from "../../../components/TagLink";

interface BrainNote {
  note: GatsbyTypes.BrainNote;
}

const BrainNote: FC<BrainNote> = ({ note }) => {
  let references = [];
  let referenceBlock;

  if (!!note.inboundReferencePreviews) {
    references = note.inboundReferencePreviews.map((ref) => {
      ref && (
        <li>
          <a href={ref.source}>{ref.source}</a>
          <br />
          {ref.previewHtml && (
            <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
          )}
        </li>
      );
    });

    if (references.length > 0) {
      referenceBlock = (
        <>
          <h2>Linked refs</h2>
          <ul>{references}</ul>
        </>
      );
    }
  }

  let externalRefBlock;

  if (!!note.externalInboundReferences) {
    let refs = note.externalInboundReferences.map((ref) => {
      ref && (
        <li>
          <a href={ref.sourceUrl}>
            {ref.siteName}/{ref.sourcePage}
          </a>
          <br />
          <div dangerouslySetInnerHTML={{ __html: ref.previewHtml }} />
        </li>
      );
    });

    if (refs.length > 0) {
      externalRefBlock = (
        <>
          <h2>External refs</h2>
          <ul>{refs}</ul>
        </>
      );
    }
  }

  if (!note.childMdx) return null;

  return (
    <Layout>
      <article id="brainNote">
        <p className="text-sm font-medium text-gray-500 font-sans mb-2">
          <span className="uppercase text-xs font-bold tracking-wider py-0.5 px-1 bg-gray-500 mr-1 text-white rounded-md">
            Note in progress
          </span>{" "}
          Last updated {note.childMdx.frontmatter.date}
        </p>
        <PageHeading title={note.title}>
          <div>
            {note.childMdx.frontmatter.tags &&
              note.childMdx.frontmatter.tags.map((tag, i) => (
                <TagLink tag={tag as string} size={"sm"} />
              ))}
          </div>
        </PageHeading>
        {note.absolutePath ? (
          <MDXRenderer>{note.childMdx.body}</MDXRenderer>
        ) : (
          <div>
            <p>
              There's no note here yet! That probably just means a link you
              clicked on hasn't been published. This will happen from time to
              time, as these notes are works in progress. If you really want to
              get to a given note, DM me on Twitter and I can publish it for
              you!
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
