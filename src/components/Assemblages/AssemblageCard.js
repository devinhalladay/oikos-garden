import { Link } from 'gatsby';
import React from 'react';
import Card from '../Card';

function AssemblageCard({ node }) {
  const { slug } = node;
  const { title, cover_image, subtitle } = node.frontmatter;
  return (
    <Link to={`/assemblages/${slug}`}>
      <Card animate="true">
        {cover_image && (
          <div className="h-32 w-full overflow-hidden">
            <img
              src={cover_image.childImageSharp.fluid.src}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="p-2">
          <p class="font-semibold indent-0 leading-5 my-2">{title}</p>
          <p class="indent-0 text-gray-500 leading-5 mb-2 text-base">
            {subtitle}
          </p>
        </div>
      </Card>
    </Link>
  );
}

export default AssemblageCard;
