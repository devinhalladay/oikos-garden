import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import TagLink from '../components/TagLink';

const EssayTemplate = ({ data, location }) => {
  const post = data.allMdx.nodes[0];
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const { tableOfContents } = post;

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
        <header className="pb-14 mb-14 border-gray-100 border-b-8">
          <div className="mb-1 text-gray-500 font-sans lining-nums text-center font-medium">
            <small className="mr-3">{post.frontmatter.date}</small>
            <small className="mr-3">{post.fields.readingTime.text}</small>
            {post.frontmatter.tags &&
              post.frontmatter.tags.map((tag, i) => (
                <TagLink tag={tag} size={"sm"} />
              ))}
          </div>
          <div className="mb-2 text-center justify-center items-center flex flex-col">
            <h1 className="mb-2 font-serif font-light pb-8">
              {post.frontmatter.title}
            </h1>
            <div className="bg-domain-red w-px h-64"></div>
            {post.frontmatter.subtitle && (
              <p className="font-sans text-2xl indent-0 mt-8">
                {post.frontmatter.subtitle}
              </p>
            )}
          </div>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
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
