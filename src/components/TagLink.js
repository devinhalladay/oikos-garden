import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import React from 'react';

function TagLink({ tag, size, count }) {
  const tagLink = `/tags/${kebabCase(tag)}`;

  if (size === 'sm') {
    return (
      <Link
        to={tagLink}
        className="text-gray-500 inline-flex items-center mr-3 text-sm font-medium font-sans">
        <span className="w-2 h-2 mr-1 bg-gray-400 inline-block rounded-full"></span>
        <span>
          {tag} {count && `(${count})`}
        </span>
      </Link>
    );
  } else if (size === 'lg') {
    return (
      <Link
        to={tagLink}
        className="text-gray-500 inline-flex items-start mr-3 font-sans">
        <span className="w-3 h-3 mt-1 mr-1 bg-gray-400 inline-block rounded-full flex-shrink-0"></span>
        <span className="leading-tight">
          {tag} {count && `(${count})`}
        </span>
      </Link>
    );
  }
}

export default TagLink;
