import { graphql } from "gatsby";
import * as React from "react";

import EssayCard from "../components/EssayCard";
import Layout from "../components/Layout";
import NoteCard from "../components/NoteCard";
import SectionHeading from "../components/SectionHeading";

interface IndexPage {
  data: {
    notesQuery: GatsbyTypes.BrainNoteConnection;
    assemblagesQuery: GatsbyTypes.MdxConnection;
    essaysQuery: GatsbyTypes.MdxConnection;
    worksQuery: GatsbyTypes.MdxConnection;
  };
}

const IndexPage: React.FC<IndexPage> = ({
  data: { notesQuery, assemblagesQuery, essaysQuery, worksQuery },
}) => {
  return (
    <Layout wide>
      <div className="flex flex-col gap-12 lg:flex-row mb-12 border-gray-100 border-b-8">
        {/* <section className="w-full xl:w-2/3 mr-8">
          <SectionHeading
            title="Assemblages"
            subhead={
              <>
                Thematic compositions of notes, essays, and works.
                Similar to{' '}
                <a
                  href="https://tomcritchlow.com/2019/07/17/blogchains/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium">
                  blogchains
                </a>
                .
              </>
            }
          />
          <div className="grid md:grid-cols-2 pl-0 list-none gap-4 gap">
            {assemblagesQuery.edges.map((edge) => {
              const { node } = edge;
              return <AssemblageCard node={node} />;
            })}
          </div>
        </section> */}

        <section className="w-full lg:w-2/3 border-gray-100 border-b-8 sm:border-b-0 pb-12">
          <SectionHeading
            title="Featured Essays"
            subhead="Long-form writing on topics ranging from design and technology, to political theory, to art history, and beyond."
            link="/essays"
          />
          <div className="flex flex-col gap-4">
            {essaysQuery.nodes.map((node) => (
              <EssayCard post={node} />
            ))}
          </div>
        </section>

        <section className="w-full lg:w-1/3">
          <SectionHeading
            link="/notes"
            title="Recent Notes"
            subhead="Rolling, work-in-progress notes, images, clippings, and
              threads."
          />
          <div className="gap-4">
            {notesQuery.nodes.map((note) => (
              <NoteCard
                note={
                  note as GatsbyTypes.BrainNote & {
                    childMdx: GatsbyTypes.Mdx;
                  }
                }
              />
            ))}
          </div>
        </section>
      </div>
      <div>
        {/* <section className="w-full pb-12 border-gray-100 border-b-8">
          <SectionHeading
            title="Creative Works"
            subhead="Design, art, and other media I've created regarding the
            concepts on this site."
            link="/works"
          />
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
                            node.frontmatter.cover_image
                              .childImageSharp.fluid.src
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
        </section> */}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    assemblagesQuery: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/assemblages/" } }
    ) {
      edges {
        node {
          id
          slug
          ...AssemblageFrontmatter
        }
      }
    }

    worksQuery: allMdx(
      sort: { fields: slug, order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/works/" }
        frontmatter: { published: { ne: false } }
      }
      limit: 6
    ) {
      edges {
        node {
          id
          slug
          ...WorkFrontmatter
        }
      }
    }

    notesQuery: allBrainNote(
      limit: 6
      filter: { absolutePath: { regex: "/content/notes/" } }
    ) {
      nodes {
        id
        slug
        title
        childMdx {
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            tags
          }
        }
      }
    }

    # logseqQuery: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(logseqRepo)/"}}) {
    #   edges {
    #     node {
    #       id
    #       frontmatter {
    #         title
    #       }
    #       fileAbsolutePath
    #     }
    #   }
    # }

    essaysQuery: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/essays/" }
        frontmatter: { featured: { eq: true } }
      }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 4
    ) {
      nodes {
        ...EssayPreview
      }
    }
  }
`;
