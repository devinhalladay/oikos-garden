import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import EssayHeader from '../components/Essay/EssayHeader';
import Layout from '../components/layout';
import Figure from '../components/mdx/figure';
import Heading from '../components/mdx/headings';

const EssayTemplate = ({ data, location }) => {
  const post = data.allMdx.nodes[0];
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const { tableOfContents } = post;

  console.log(tableOfContents);

  const renderTOC = () => {
    return typeof tableOfContents.items === 'undefined' ? null : (
      <ul className="font-sans text-base leading-5 mt-2  pl-2 box-border">
        {/* <InnerScroll> */}
        {tableOfContents.items.map((i) => {
          return (
            <li
              key={i.url}
              className="pb-1 -ml-2 pl-2 border-l border-gray-400 hover:border-domain-red box-border">
              <a href={i.url} key={i.url}>
                {i.title}
              </a>
              {/* typeof tableOfContents.items === 'undefined' ? null */}
              {typeof i.items === 'undefined'
                ? null
                : i.items.map((i2) => {
                    console.log(i2.items);
                    return (
                      <li
                        key={i2.url}
                        className="ml-2 pb-1 hover:border-l border-domain-red pl-2">
                        <a href={i2.url} key={i2.url}>
                          {i2.title}
                        </a>
                        {typeof i2.items === 'undefined'
                          ? null
                          : i2.items.map((i3) => {
                              console.log(i3.items);
                              return (
                                <li
                                  key={i3.url}
                                  className="ml-4 pb-1">
                                  <a href={i3.url} key={i3.url}>
                                    {i3.title}
                                  </a>
                                </li>
                              );
                            })}
                      </li>
                    );
                  })}
            </li>
          );
        })}
        {/* </InnerScroll> */}
      </ul>
    );
  };

  return (
    <Layout
      location={location}
      title={siteTitle}
      navContent={renderTOC()}>
      <Helmet
        title={`${post.frontmatter.title} • Infinite Caesura`}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article">
        <EssayHeader post={post} />
        <MDXRenderer>{post.body}</MDXRenderer>
        <footer
          style={{
            height: 200,
          }}></footer>
      </article>
    </Layout>
  );
};

export default EssayTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { id: { eq: $id } }) {
      nodes {
        ...Essay
        tableOfContents
      }
    }
  }
`;
