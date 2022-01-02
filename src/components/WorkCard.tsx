import { Link } from "gatsby";
import React, { FC } from "react";
import TagLink from "./TagLink";

interface WorkCard {
  work: GatsbyTypes.Mdx;
}

const WorkCard: FC<WorkCard> = ({ work }) => {
  return (
    <div className="font-sans">
      {work.frontmatter.cover_image && (
        <Link to={`/${work.frontmatter.slug}`}>
          <div className="h-52 w-full overflow-hidden rounded-lg">
            <img
              src={work.frontmatter.cover_image.childImageSharp.fluid.src}
              className="h-full w-full object-cover"
            />
          </div>
        </Link>
      )}
      <div className="pt-2">
        <Link
          to={`/${work.frontmatter.slug}`}
          className="font-semibold indent-0 leading-5 text-xl"
        >
          {work.frontmatter.title}
        </Link>
        <div className="mb-2 leading-3">
          {work.frontmatter.tags &&
            work.frontmatter.tags.map((tag, i) => (
              <TagLink tag={tag} size="sm" />
            ))}
        </div>
        <p className="mt-2">
          <Link
            to={`/${work.frontmatter.slug}`}
            className="p-2 leading-none inline-block transition-colors rounded-md text-gray-500 border border-gray-200 bg-gray-50 hover:bg-black hover:text-white"
          >
            See Project
          </Link>
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
