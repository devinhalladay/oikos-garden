import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

export const useBbox = () => {
  const ref = useRef();
  const [bbox, setBbox] = useState({});

  const set = () =>
    setBbox(
      ref && ref.current ? ref.current.getBoundingClientRect() : {}
    );

  useEffect(() => {
    set();
    window.addEventListener('resize', set);
    return () => window.removeEventListener('resize', set);
  }, []);

  return [bbox, ref];
};

const Footnote = (props) => {
  const [bbox, ref] = useBbox();

  const { id, idName, children, closed, className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const defaultFootnoteStyles = css`
    font-family: Alegreya Sans;
    color: #1973ff;
    font-size: 0.75rem;
    line-height: 1.3;
    text-indent: 0;

    float: right;
    clear: right;
    margin-right: -40%;
    width: 260px;
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    line-height: 1.3;
    vertical-align: baseline;
    position: relative;
    text-indent: 0;

    font-weight: 500;
    margin-left: 1rem;

    @media (max-width: 1000px) {
      float: none;
      position: relative;
      width: 100%;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      margin-left: 0;
      display: none;
    }

    & a {
      text-decoration: underline;
    }

    &:before {
      content: '[' counter(sidenote-counter) ']';
      vertical-align: baseline;
      font-size: 0.875rem;
      padding-right: 6px;
    }

    blockquote & {
      margin-right: calc(-41% - 2px);
      min-width: 258px;
      text-align: left;
    }
  `;

  const openFootnoteStyles = css`
    font-family: Alegreya Sans;
    color: #1973ff;
    font-size: 0.75rem;
    line-height: 1.3;
    text-indent: 0;

    float: right;
    clear: right;
    margin-right: -40%;
    width: 260px;
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    line-height: 1.3;
    vertical-align: baseline;
    position: relative;
    text-indent: 0;
    margin-left: 1rem;

    font-weight: 500;

    @media (max-width: 1000px) {
      float: none;
      display: block;
      position: relative;
      right: unset;
      width: 100%;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      margin-left: 0;
    }

    & a {
      text-decoration: underline;
    }

    &:before {
      content: '[' counter(sidenote-counter) ']';
      vertical-align: baseline;
      font-size: 0.875rem;
      padding-right: 6px;
    }

    blockquote & {
      margin-right: calc(-41% - 2px);
      min-width: 258px;
      text-align: left;
    }
  `;

  const inputStyles = css`
    display: none;
  `;

  const labelStyles = css`
    cursor: pointer;
    counter-increment: sidenote-counter;
    max-height: 2rem;
    text-indent: 0;

    &:after {
      content: '[' counter(sidenote-counter) ']';
      font-family: Manuale;
      font-size: 0.875rem;
      color: #1973ff;
      top: -0.5rem;
      left: 0em;
      padding-right: 3px;
      padding-left: 1px;
      position: relative;
      vertical-align: baseline;
    }
  `;

  return (
    <>
      <label
        id={`f-ref-${id}`}
        for={idName}
        className="margin-toggle sidenote-number"
        css={labelStyles}
        onClick={() => {
          setIsOpen(!isOpen);
        }}></label>
      <input type="checkbox" id={idName} css={inputStyles} />
      <span
        css={isOpen ? openFootnoteStyles : defaultFootnoteStyles}
        className="sidenote">
        {children}
      </span>
    </>
  );
};

export default Footnote;
