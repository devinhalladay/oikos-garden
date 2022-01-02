import "@fontsource/alegreya-sans-sc/latin.css";
import "@fontsource/alegreya-sans/latin.css";
// import "@fontsource/manuale/latin.css";
import "@fontsource/alegreya/latin.css";
import "../styles/styles.scss";

import React, { FC } from "react";
import { Helmet } from "react-helmet";

import { MDXProvider } from "@mdx-js/react";

import favicon from "../images/favicon.ico";
import appleTouchIcon from "../images/apple-touch-icon.png";
import Graphic from "./Graphic";
import components from "./mdx";
import Navigation from "./Navigation";

interface Layout {
  children: React.ReactNode;
  wide?: boolean;
  navContent?: React.ReactNode;
}

const Layout: FC<Layout> = ({ children, wide = false, navContent }) => {
  return (
    <MDXProvider components={components}>
      <Helmet title="Infinite Caesura">
        <meta
          name="description"
          content="Infinite Caesura is the personal wiki of Devin Halladay, a designer and writer based in Manhattan"
        />

        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <meta name="theme-color" content="#e3001c" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@theflowingsky" />
        <meta name="twitter:title" content="Infinite Caesura" />
        <meta
          name="twitter:description"
          content="Infinite Caesura is the personal wiki of Devin Halladay, a designer and writer based in Manhattan"
        />
        <meta name="twitter:image" content="/images/seo-image.png" />
      </Helmet>

      <Graphic wide={wide} />

      <div className="layout relative px-8 pt-[72px] pb-[10rem] gap-narrow flex-col columns-12 flex md:grid">
        <Navigation>{navContent}</Navigation>
        <main className={wide ? "wide" : ""}>{children}</main>
      </div>
    </MDXProvider>
  );
};

export default Layout;
