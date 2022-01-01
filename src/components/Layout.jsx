import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.ico';
import '../styles/styles.scss';
import Graphic from './graphic';
import components from './mdx';
import Nav from './Navigation';
import '@fontsource/alegreya-sans/latin.css';
import '@fontsource/manuale/latin.css';
import '@fontsource/alegreya-sans-sc/latin.css';

export default function Layout({ children, width, navContent }) {
  return (
    <MDXProvider components={components}>
      <Helmet
        title="Infinite Caesura"
        description="Infinite Caesura is the personal wiki of Devin Halladay, a designer and writer based in Manhattan.">
        <link rel="icon" href={favicon} />
      </Helmet>

      <Graphic layout={width} />

      <div className="layout antialiased">
        <Nav>{navContent}</Nav>
        <main className={width ? width : null}>{children}</main>
      </div>
    </MDXProvider>
  );
}
