import React, { FC } from "react";

interface QuoteCard {}

const QuoteCard: FC<QuoteCard> = ({ children }) => {
  return <blockquote className="blockquote-page">{children}</blockquote>;
};

export default QuoteCard;
