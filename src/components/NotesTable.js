import { Link } from 'gatsby';
import React from 'react';

function NotesTable({ notes }) {
  console.log(notes);

  return (
    <div>
      {notes.map((note) => (
        <Link to={`${note.slug}`}>
          <div className="font-sans shadow-sm mb-2 p-2 w-full rounded border border-gray-300">
            <small className="text-gray-400">
              {note.childMdx.frontmatter.date}
            </small>
            <p class="leading-5 font-medium">
              {note.childMdx.frontmatter.title}
            </p>
            <div className="text-gray-400 font-semibold indent-0 mt-2 mb-0 leading-3">
              {note.childMdx.frontmatter.tags &&
                note.childMdx.frontmatter.tags.map((tag, i) => (
                  <div className="inline-flex items-center">
                    <span className="w-2 h-2 bg-gray-400 inline-block rounded-full mr-1"></span>
                    <span className="text-sm mr-3">{tag}</span>
                  </div>
                ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NotesTable;
