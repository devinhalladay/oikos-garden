import React, { FC } from "react";

interface SectionHeading {
  title: string;
  subhead?: string;
  link?: string;
}

const SectionHeading: FC<SectionHeading> = ({ title, subhead, link }) => {
  return (
    <div className="mb-6 font-sans">
      <div className="border-b border-dashed border-gray-300 pb-1 mb-2 flex items-center justify-between">
        <h2 className="font-sans indent-0 font-semibold text-3xl">{title}</h2>
        {link && (
          <a
            href={link}
            className="text-red text-sm uppercase font-semibold tracking-wide flex items-center gap-2"
          >
            <span>View all</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="1" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        )}
      </div>
      {subhead && (
        <p className="font-sans text-lg leading-snug text-gray-500">
          {subhead}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
