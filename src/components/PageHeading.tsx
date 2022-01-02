import React, { FC } from "react";

interface PageHeading {
  title: string;
  subtitle?: string;
}

const PageHeading: FC<PageHeading> = ({ title, subtitle, children }) => {
  return (
    <header className="mb-10 pb-6 border-b border-gray-300">
      <h1 className="p-0 text-5xl text-center">{title}</h1>
      {subtitle && (
        <p className="font-sans text-md leading-5 text-gray-500 mt-4">
          {subtitle}
        </p>
      )}
      {children && <div>{children}</div>}
    </header>
  );
};

export default PageHeading;
