import React, { FC } from "react";

interface Figure {
  src: string;
  caption?: string;
  className?: string;
  bordered?: boolean;
}

const Figure: FC<Figure> = ({
  src,
  caption,
  children,
  className = undefined,
  bordered = false,
}) => {
  return (
    <figure className={`my-8 relative ${className}`}>
      <div className="relative">
        <div className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:bg-red after:h-full after:mix-blend-screen after:hover:opacity-0 after:pointer-events-none after:transition-all">
          <img
            src={src}
            alt={caption}
            className={`mb-2 w-full filter grayscale hover:grayscale-0 transition-all ${
              bordered && "border border-gray-300"
            }`}
          />
        </div>
      </div>

      {caption ||
        (children && (
          <figcaption className="font-sans text-base text-gray-500">
            {caption}
            {children}
          </figcaption>
        ))}
    </figure>
  );
};

export default Figure;
