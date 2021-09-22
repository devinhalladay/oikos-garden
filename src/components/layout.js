import { MDXProvider } from "@mdx-js/react";
import React from "react";
import "../styles/styles.scss";
import Nav from "./nav";
import components from "./mdx";

export default function Layout({ children }) {
  return (
    <MDXProvider components={components}>
      <div class="graphic">
        <div class="caesurae">
          <div class="circle circle-1">
            <div></div>
          </div>
          <div class="caesura caesura-1">
            {/* <p>Infinite Caesura • No Place</p> */}
          </div>
          <div class="caesura caesura-2"></div>
          <div class="circle circle-2">
            <div></div>
          </div>
        </div>
      </div>
      <div class="layout">
        <Nav />
        <main>{children}</main>
      </div>
    </MDXProvider>
  );
}
