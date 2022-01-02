import React, { FC } from "react";

const Attribution: FC = ({ children }) => {
  return (
    <p>
      <cite className="small font-sans-sc lowercase not-italic text-gray-500">
        {children}
      </cite>
    </p>
  );
};

export default Attribution;
