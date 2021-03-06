import React, { FC } from "react";

interface Heading {
  level: number;
}

const Heading: FC<Heading> = ({ level, children, ...rest }) => {
  switch (level) {
    case 1:
      return (
        <h1
          className="font-serif text-5xl font-light mb-10 leading-none tracking-tight"
          {...rest}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className="font-sans text-4xl pt-4 pb-2 font-medium leading-none tracking-tight border-b border-gray-300"
          {...rest}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className="font-sans text-3xl indent-0 pb-2 pt-14 mt-0" {...rest}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className="font-sans text-2xl indent-0 pb-4 mt-4" {...rest}>
          {children}
        </h4>
      );
    default:
      return (
        <h3 className="font-sans text-3xl indent-0 pb-2 pt-14 mt-0" {...rest}>
          {children}
        </h3>
      );
  }
};

export default Heading;
