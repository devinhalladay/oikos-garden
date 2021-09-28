import React from 'react';

function PageHeading({ title, subtitle, children }) {
  return (
    <header className="mb-10 pb-6 border-b border-gray-300">
      <h1>{title}</h1>
      {subtitle && (
        <p className="font-sans text-md leading-5 text-gray-500 mt-4">
          {subtitle}
        </p>
      )}
      {children && <div>{children}</div>}
    </header>
  );
}

export default PageHeading;
