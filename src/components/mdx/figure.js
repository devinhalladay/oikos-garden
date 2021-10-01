import React from 'react';

function Figure({ src, caption, children, className, bordered }) {
  return (
    <figure className={`my-8 ${className}`}>
      <img
        src={src}
        alt={caption}
        className={`mb-2 w-full ${
          bordered && 'border border-gray-300'
        }`}
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
