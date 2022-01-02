import React, { FC } from "react";

interface Rule {
  short?: boolean;
}

const Rule: FC<Rule> = ({ short = false }) => {
  return <hr className={short ? "hr-short" : ""} />;
};

export default Rule;
