import { Link } from "gatsby";
import { kebabCase } from "lodash";
import React, { FC } from "react";

interface TagLink {
  tag: string;
  size?: "sm" | "lg";
  count?: number;
}

const TagLink: FC<TagLink> = ({ tag, size, count }) => {
  const tagLink = `/tags/${kebabCase(tag)}`;

  return (
    <Link
      to={tagLink}
      className={`font-sans text-gray-500 inline-flex mr-3 ${
        size === "sm" ? "items-center text-sm font-medium" : "items-start"
      }`}
    >
      <span
        className={`bg-gray-400 inline-block rounded-full mr-1 ${
          size === "sm" ? "w-2 h-2" : "w-3 h-3 mt-1 flex-shrink-0"
        }`}
      ></span>
      <span className={size === "lg" ? "leading-tight" : undefined}>
        {tag} {count && `(${count})`}
      </span>
    </Link>
  );
};

export default TagLink;
