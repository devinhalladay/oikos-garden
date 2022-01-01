import { Link } from "gatsby";
import React, { FC } from "react";
import Card from "./Card";
import TagLink from "./TagLink";

interface NoteCard {
  note: GatsbyTypes.BrainNote & {
    childMdx: GatsbyTypes.Mdx;
  };
}

const NoteCard: FC<NoteCard> = ({ note }) => {
  return (
    <Link to={`/notes/${note.slug}`} className="mb-4 block">
      <div className="indent-0 h-full font-sans pb-0 w-full border-b border-gray-300 font-sans h-full pb-2 mb-2 w-full flex-col overflow-hidden">
        <small className="text-gray-500 font-medium leading-none block mb-2">
          {note.childMdx.frontmatter.date}
        </small>
        <p className="leading-5 font-bold text-xl mb-2">{note.title}</p>
        <div className="mb-0 leading-none">
          {note.childMdx.frontmatter.tags?.map((tag) => (
            <TagLink tag={tag as string} size="sm" />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
