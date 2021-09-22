import { Link } from "gatsby";
import React from "react";

function NotesTable({ notes }) {
  return (
    <ul className="notes-table">
      {notes.map((node) => (
        <li>
          <Link to={`${node.slug}`}>
            <p class="title">
              {node.frontmatter ? node.frontmatter.title : node.title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NotesTable;
