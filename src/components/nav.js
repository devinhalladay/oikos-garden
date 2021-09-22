import { Link } from "gatsby";
import React from "react";

function Nav() {
  return (
    <nav>
      <aside>
        <div>
          <a href="/" class="site-title">
            <span class="site-title--1">Infinite</span>
            <span class="site-title--2">Caesura</span>
          </a>
        </div>
        <h2 class="folder__title">Oikos — No place</h2>

        <h1>
          This is the personal wiki of Devin Halladay, a product
          designer and writer based in Manhattan.
        </h1>
      </aside>
      <ul>
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
          <Link to="/moments" ariaLabel="Go to everyday moments">
            Moments
          </Link>
        </li>
        <li>
          <Link to="/works" ariaLabel="View work catalog">
            Works
          </Link>
        </li>
        <li>
          <Link to="/concepts" ariaLabel="View site topics">
            Concepts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
