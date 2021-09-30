import React, { useState } from 'react';
import { css } from '@emotion/react';

const Footnote = (props) => {
  const { id, idName, children, closed, className } = props;
  // console.log(props);
  const [isOpen, setIsOpen] = useState(false);

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
      text-align: left;
      text-indent: 0;
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
      content: '[' counter(sidenote-counter) ']';
      font-family: Manuale;
      font-size: 0.875rem;
      color: #1973ff;
      top: -0.5rem;
      left: 0em;
      padding-right: 3px;
    }

    .sidenote:before {
      content: '[' counter(sidenote-counter) ']';
      color: #1973ff;
      font-size: 0.875rem;
      padding-right: 6px;
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

    @media (max-width: 1000px) {
      label.margin-toggle:not(.sidenote-number) {
        display: inline;
      }

      .sidenote,
      .marginnote {
        float: none;
        display: block;
        position: relative;
        right: unset;
        width: 100%;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
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
      text-indent: 0;
      font-family: Alegreya Sans;
      float: right;
      clear: right;
      text-align: left;
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
      content: '[' counter(sidenote-counter) ']';
      font-size: 0.875rem;
      top: -0.5rem;
      left: 0em;
      padding-right: 3px;
      color: #1973ff;
    }

    .sidenote:before {
      content: '[' counter(sidenote-counter) ']';
      font-size: 0.875rem;
      padding-right: 6px;
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

    @media (max-width: 1000px) {
      .sidenote,
      .marginnote {
        display: none;
      }
    }
  `;

  // console.log(children);

  return (
    <span className={className}>
      <span css={isOpen ? footnoteStyles : closedFootnoteStyles}>
        <label
          for={idName}
          className="margin-toggle sidenote-number"
          onClick={() => {
            setIsOpen(!isOpen);
          }}></label>
        <input
          type="checkbox"
          id={idName}
          className="margin-toggle"
        />
        <span className="sidenote">{children}</span>
      </span>
    </span>
  );
};

export default Footnote;
