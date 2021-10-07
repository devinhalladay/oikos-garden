import React from 'react';

function SectionHeading({ title, subhead }) {
  return (
    <div className="mb-6 font-sans">
      <div className="border-b border-gray-300 pb-1 mb-2 flex items-center justify-between">
        <h2 className="font-sans indent-0 font-semibold text-2xl">
          {title}
        </h2>
        <a
          href=""
          className="text-domain-red text-sm uppercase font-semibold tracking-wide">
          View all
        </a>
      </div>
      {subhead && (
        <p className="font-sans text-md leading-5 text-gray-500">
          {subhead}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
