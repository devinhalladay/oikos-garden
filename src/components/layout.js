import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.ico';
import '../styles/styles.scss';
import Graphic from './graphic';
import components from './mdx';
import Nav from './nav';

export default function Layout({ children, width }) {
  return (
    <MDXProvider components={components}>
      <Helmet
        title="Infinite Caesura"
        description="Infinite Caesura is the personal wiki of Devin Halladay, a designer and writer based in Manhattan.">
        <link rel="icon" href={favicon} />
      </Helmet>
      <Graphic layout={width} />
      <div className="layout antialiased">
        <Nav />
        <main className={width ? width : null}>{children}</main>
      </div>
    </MDXProvider>
  );
}
