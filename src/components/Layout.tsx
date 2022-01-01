import "@fontsource/alegreya-sans-sc/latin.css";
import "@fontsource/alegreya-sans/latin.css";
import "@fontsource/manuale/latin.css";
import "../styles/styles.scss";

import React, { FC } from "react";
import { Helmet } from "react-helmet";

import { MDXProvider } from "@mdx-js/react";

import favicon from "../images/favicon.ico";
import Graphic from "./Graphic";
import components from "./mdx";
import Navigation from "./Navigation";

interface Layout {
  children: React.ReactNode;
  width?: "wide";
  navContent?: React.ReactNode;
}

const Layout: FC<Layout> = ({ children, width = undefined, navContent }) => {
  return (
    <MDXProvider components={components}>
      <Helmet
        title="Infinite Caesura"
        description="Infinite Caesura is the personal wiki of Devin Halladay, a designer and writer based in Manhattan."
      >
        <link rel="icon" href={favicon} />
      </Helmet>

      <Graphic layout={width} />

      <div className="layout antialiased">
        <Navigation>{navContent}</Navigation>
        <main className={width}>{children}</main>
      </div>
    </MDXProvider>
  );
};

export default Layout;
