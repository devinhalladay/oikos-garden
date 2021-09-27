import { Link } from 'gatsby';
import React from 'react';

function AssemblageCard({ node }) {
  const { slug } = node;
  const { title, cover_image, subtitle } = node.frontmatter;
  return (
    <div class="indent-0 font-sans shadow-sm mr-4 pb-0 w-full rounded border border-gray-300 flex transform rotate-0  hover:rotate-2 transition-all duration-300">
      <Link to={`/assemblages/${slug}`}>
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
      </Link>
    </div>
  );
}

export default AssemblageCard;
