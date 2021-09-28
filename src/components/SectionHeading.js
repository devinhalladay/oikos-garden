import React from 'react';

function SectionHeading({ title, subhead }) {
  return (
    <div className="mb-6">
      <h2 className="indent-0 mb-2 font-semibold border-b border-gray-300 pb-1">
        {title}
      </h2>
      {subhead && (
        <p className="font-sans text-md leading-5 text-gray-500">
          {subhead}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
