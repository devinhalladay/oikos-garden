import { MDXProvider } from "@mdx-js/react";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";
import "../styles/styles.scss";
import Graphic from "./graphic";
import components from "./mdx";
import Navigation from "./Navigation";
import "@fontsource/alegreya-sans/latin.css";
import "@fontsource/manuale/latin.css";
import "@fontsource/alegreya-sans-sc/latin.css";

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
