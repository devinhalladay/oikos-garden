import React, { FC } from "react";

interface Card {
  animate?: boolean;
  className?: string;
}

const Card: FC<Card> = ({
  children,
  animate = false,
  className = undefined,
}) => {
  return (
    <div
      className={`indent-0 h-full font-sans shadow-sm pb-0 w-full rounded-md border border-gray-300 ${
        animate ? "transition-all rotate-0 hover:rotate-1 duration-300" : ""
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
