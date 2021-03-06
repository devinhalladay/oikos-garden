import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PageHeading from '../components/PageHeading';

const WorkTemplate = ({ data, location }) => {
  const work = data.allMdx.nodes[0];

  return (
    <Layout location={location}>
      <Helmet
        title={`${work.frontmatter.title} • Infinite Caesura`}
      >
        <meta name="twitter:title" content={`${work.frontmatter.title} • Infinite Caesura`} />
        <meta
          name="twitter:description"
          content={work.frontmatter.subtitle ?? "Infinite Caesura is the personal wiki of Devin Halladay, a designer and writer based in Manhattan"}
        />
        <meta name="twitter:image" content={work.frontmatter.cover_image && `https://infinitecaesura.com/${work.frontmatter.cover_image.childImageSharp.fluid.src}` || "https://infinitecaesura.com/images/seo-image.png"} />
      </Helmet>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article">
        <PageHeading title={work.frontmatter.title} />
        <MDXRenderer>{work.body}</MDXRenderer>
        <footer
          style={{
            height: 200,
          }}></footer>
      </article>
    </Layout>
  );
};

export default WorkTemplate;

export const pageQuery = graphql`
  query WorksBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { id: { eq: $id } }) {
      nodes {
        ...Work
      }
    }
  }
`;
