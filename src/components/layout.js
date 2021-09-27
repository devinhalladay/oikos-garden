import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import '../styles/styles.scss';
import Nav from './nav';
import components from './mdx';
import Graphic from './graphic';

export default function Layout({ children, width }) {
  return (
    <MDXProvider components={components}>
      <Graphic layout={width} />
      <div class="layout">
        <Nav />
        <main className={width ? width : null}>{children}</main>
      </div>
    </MDXProvider>
  );
}
