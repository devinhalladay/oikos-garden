import { Link } from 'gatsby';
import React from 'react';
import Card from '../Card';
import TagLink from '../TagLink';

function NoteCard({ note }) {
  return (
    <Link to={`${note.slug}`} className="mb-2 block">
      <Card>
        <div className="font-sans p-2 w-full">
          <small className="text-gray-400">
            {note.childMdx.frontmatter.date}
          </small>
          <p className="leading-5 font-medium">
            {note.childMdx.frontmatter.title}
          </p>
          <div className="mt-2 mb-0 leading-3 overflow-scroll max-h-5">
            <p className="whitespace-nowrap no-scrollbar">
              {note.childMdx.frontmatter.tags &&
                note.childMdx.frontmatter.tags.map((tag, i) => (
                  <TagLink tag={tag} size="sm" />
                ))}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default NoteCard;
