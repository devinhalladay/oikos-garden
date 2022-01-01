import { Link } from "gatsby";
import React, { FC } from "react";
import Card from "./Card";

interface AssemblageCard {
  node: GatsbyTypes.Mdx;
}

const AssemblageCard: FC<AssemblageCard> = ({ node }) => {
  const { slug } = node;
  const { title, cover_image, subtitle } = node.frontmatter;

  return (
    <Link to={`/assemblages/${slug}`} className="w-full">
      <Card animate={true} className="min-h-64 w-full">
        {cover_image && (
          <img
            src={cover_image.childImageSharp?.fluid?.src}
            className="h-full w-full object-cover min-h-80"
          />
        )}
        <div className="px-3 pb-4 pt-12 absolute bottom-0 w-full bg-gradient-to-t from-black text-white">
          <p className="font-semibold text-xl indent-0 leading-tight mb-1">
            {title}
          </p>
          <p className="indent-0 leading-5 text-base font-medium">{subtitle}</p>
        </div>
      </Card>
    </Link>
  );
};

export default AssemblageCard;
