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
    <figure className={`my-8 ${className}`}>
      <img
        src={src}
        alt={caption}
        className={`mb-2 w-full ${bordered && "border border-gray-300"}`}
      />

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
