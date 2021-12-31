import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import PageHeading from '../components/PageHeading';
import TagLink from '../components/TagLink';

// markup
const WorksIndex = ({ data: { worksQuery } }) => {
  const { node } = worksQuery;

  return (
    <Layout width="wide">
      <Helmet title="Works • Infinite Caesura" />
      <PageHeading title="Creative Works" />
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-8">
          {worksQuery.edges.map(({ node }) => {
            console.log(node);
            return (
              <div className="font-sans">
                {node.frontmatter.cover_image && (
                  <Link to={`/${node.frontmatter.slug}`}>
                    <div className="h-52 w-full overflow-hidden rounded-lg">
                      <img
                        src={
                          node.frontmatter.cover_image.childImageSharp
                            .fluid.src
                        }
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                )}
                <div className="pt-2">
                  <Link
                    to={`/${node.frontmatter.slug}`}
                    className="font-semibold indent-0 leading-5 text-xl">
                    {node.frontmatter.title}
                  </Link>
                  <div className="mb-2 leading-3">
                    {node.frontmatter.tags &&
                      node.frontmatter.tags.map((tag, i) => (
                        <TagLink tag={tag} size="sm" />
                      ))}
                  </div>
                  <p className="mt-2">
                    <Link
                      to={`/${node.frontmatter.slug}`}
                      className="p-2 leading-none inline-block transition-colors rounded-md text-gray-500 border border-gray-200 bg-gray-50 hover:bg-black hover:text-white">
                      See Project
                    </Link>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default WorksIndex;

export const pageQuery = graphql`
  query {
    worksQuery: allMdx(
      sort: { fields: slug, order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/works/" }
        frontmatter: { published: { ne: false } }
      }
    ) {
      edges {
        node {
          id
          slug
          ...WorkFrontmatter
        }
      }
    }
  }
`;
