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
          <a href="/">Front Page</a>
        </li>
        <li>
          <a href="/essays">Essays</a>
        </li>
        <li>
          <a href="/moments">Moments</a>
        </li>
        <li>
          <a href="/works">Works</a>
        </li>
        <li>
          <a href="/concepts">Concepts</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
