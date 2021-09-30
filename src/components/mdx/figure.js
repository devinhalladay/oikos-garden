import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

function Figure({ src, caption, children, className, bordered }) {
  console.log(src);
  return (
    <figure className={`my-8 ${className}`}>
      <img
        src={src}
        alt={caption}
        className={`mb-2 ${bordered && 'border border-gray-300'}`}
      />

      {caption ||
        (children && (
          <figcaption className="font-sans text-base text-gray-500">
            {caption}
            {children}
          </figcaption>
        ))}
    </figure>
  );
}

export default Figure;
