import { Link } from 'gatsby';
import React from 'react';

function Nav() {
  return (
    <nav>
      <aside>
        <div>
          <a href="/" className="site-title">
            <span className="site-title--1">Infinite</span>
            <span className="site-title--2">Caesura</span>
          </a>
        </div>
        <h2 className="font-sans-sc text-base lowercase leading-none tracking-wide">
          Being as the World
        </h2>

        <p className="leading-tight font-sans">
          This is the wiki realm of Devin Halladay, a product designer
          and writer based in Manhattan.
        </p>
      </aside>
      <ul className="mt-6">
        <li>
          <Link to="/" ariaLabel="View front page">
            Front Page
          </Link>
        </li>
        <li>
          <Link to="/essays" ariaLabel="Go to essays">
            Essays
          </Link>
        </li>
        <li>
          <Link to="/notes" ariaLabel="Go to notes">
            Notes
          </Link>
        </li>
        <li>
          <Link to="/works" ariaLabel="View work catalog">
            Works
          </Link>
        </li>
        <li>
          <Link to="/tags" ariaLabel="View site topics">
            Concepts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
