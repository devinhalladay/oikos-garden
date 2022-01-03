import React, { FC } from "react";

interface Card {
  animate?: boolean;
  emoji?: string;
  className?: string;
  padded?: boolean;
  centered?: boolean;
}

const Card: FC<Card> = ({
  children,
  emoji,
  animate = false,
  padded = false,
  className = undefined,
  centered = false,
}) => {
  return (
    <div
      className={`Card indent-0 h-full font-sans shadow-sm w-full rounded-md border border-gray-300 flex gap-narrow ${
        animate ? "transition-all rotate-0 hover:rotate-1 duration-300" : ""
      } ${padded ? "p-6" : "pb-0"} ${className || ""}`}
    >
      {!!emoji && <span className="text-2xl w-6 h-6">{emoji}</span>}
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Card;
