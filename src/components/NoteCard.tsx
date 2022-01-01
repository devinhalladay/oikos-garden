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
      <Card animate={true}>
        <div className="font-sans h-full px-2 pb-2 w-full flex-col overflow-hidden">
          <small className="text-gray-500 font-medium mb-1 leading-none">
            {note.childMdx.frontmatter.date}
          </small>
          <p className="leading-5 font-medium mb-1">{note.title}</p>
          <div className="mb-0 leading-3 no-scrollbar overflow-y-hidden overflow-x-scroll max-h-5">
            <p className="whitespace-nowrap">
              {note.childMdx.frontmatter.tags?.map((tag) => (
                <TagLink tag={tag as string} size="sm" />
              ))}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default NoteCard;
