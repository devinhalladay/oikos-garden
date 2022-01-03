import React, { FC } from "react";

interface PageHeading {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const PageHeading: FC<PageHeading> = ({ title, subtitle, children, icon }) => {
  return (
    <header className="mb-10 pb-6 border-b border-gray-300 border-dashed">
      <div className="flex items-center w-full text-center justify-center gap-[8px]">
        {icon && icon}
        <h1 className="p-0 text-5xl text-center">{title}</h1>
      </div>
      {subtitle && (
        <p className="font-sans text-xl text-gray-500 mt-4 text-center leading-normal">
          {subtitle}
        </p>
      )}
      {children && <div>{children}</div>}
    </header>
  );
};

export default PageHeading;
