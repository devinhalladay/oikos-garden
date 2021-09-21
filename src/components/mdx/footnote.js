import React from "react";
import { css } from "@emotion/react";

const Footnote = ({ id, idName, children, closed }) => {
  const footnoteStyles = css`
    .sidenote,
    .marginnote {
      font-family: Alegreya Sans;
      float: right;
      clear: right;
      right: -50%;
      width: 260px;
      margin-top: 0;
      margin-bottom: 0;
      color: #1973ff;
      font-size: 0.75rem;
      opacity: 85%;
      line-height: 1.3;
      vertical-align: baseline;
      position: absolute;
    }

    label {
      cursor: pointer;
    }

    .sidenote-number {
      counter-increment: sidenote-counter;
    }

    .sidenote-number:after,
    .sidenote:before {
      position: relative;
      vertical-align: baseline;
    }

    .sidenote-number:after {
      content: "[" counter(sidenote-counter) "]";
      font-family: Manuale;
      font-size: 0.875rem;
      color: #1973ff;
      top: -0.5rem;
      left: 0em;
      padding-right: 3px;
    }

    .sidenote:before {
      content: "[" counter(sidenote-counter) "]";
      color: #1973ff;
      font-size: 0.875rem;
      padding-right: 8px;
    }

    blockquote .sidenote,
    blockquote .marginnote {
      margin-right: -82%;
      min-width: 59%;
      text-align: left;
    }

    label.sidenote-number {
      display: inline;
    }

    label.margin-toggle:not(.sidenote-number) {
      display: none;
    }

    input.margin-toggle {
      display: none;
    }

    @media and (max-width: 1000px) {
      label.margin-toggle:not(.sidenote-number) {
        display: inline;
      }

      .sidenote,
      .marginnote {
        display: none;
      }

      .margin-toggle:checked + .sidenote,
      .margin-toggle:checked + .marginnote {
        display: block;
        float: left;
        left: 1rem;
        clear: both;
        width: 95%;
        margin: 1rem 2.5%;
        vertical-align: baseline;
        position: relative;
      }
    }
  `;
  const closedFootnoteStyles = css`
    .sidenote,
    .marginnote {
      float: right;
      clear: right;
      margin-right: -45%;
      width: 40%;
      margin-top: 0;
      margin-bottom: 0;
      font-size: 0.82em;
      opacity: 85%;
      line-height: 1.3;
      vertical-align: baseline;
      position: relative;
      border-left: 2px solid lightgray;
      padding-left: 1em;
    }

    label {
      cursor: pointer;
    }

    .sidenote-number {
      counter-increment: sidenote-counter;
    }

    .sidenote-number:after,
    .sidenote:before {
      position: relative;
      vertical-align: baseline;
    }

    .sidenote-number:after {
      content: counter(sidenote-counter);
      font-size: 0.9em;
      top: -0.5rem;
      left: 0em;
      padding-right: 3px;
      color: #1973ff;
    }

    .sidenote:before {
      content: counter(sidenote-counter) " ";
      font-size: 0.9em;
      top: -0.3rem;
      padding-right: 8px;
    }

    blockquote .sidenote,
    blockquote .marginnote {
      margin-right: -82%;
      min-width: 59%;
      text-align: left;
    }

    label.sidenote-number {
      display: inline;
    }

    input.margin-toggle {
      display: none;
    }

    label.margin-toggle:not(.sidenote-number) {
      display: inline;
    }

    .sidenote,
    .marginnote {
      display: none;
    }

    .margin-toggle:checked + .sidenote,
    .margin-toggle:checked + .marginnote {
      display: block;
      float: left;
      left: 1rem;
      clear: both;
      width: 95%;
      margin: 1rem 2.5%;
      vertical-align: baseline;
      position: relative;
    }
  `;

  return (
    <span css={closed ? closedFootnoteStyles : footnoteStyles}>
      <label
        for={idName}
        className="margin-toggle sidenote-number"></label>
      <input type="checkbox" id={idName} className="margin-toggle" />
      <span className="sidenote">{children}</span>
    </span>
  );
};

export default Footnote;
