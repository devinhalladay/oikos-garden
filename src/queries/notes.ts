import { graphql } from "gatsby";

export const notesQueries = {
  allNotes: graphql`
    {
      brainNotes: allBrainNote(
        sort: { fields: childMdx___frontmatter___date }
        filter: { absolutePath: { regex: "/content/notes/" } }
      ) {
        edges {
          node {
            title
            slug
            childMdx {
              frontmatter {
                date(formatString: "MM.DD.YYYY")
                subtitle
                published
                tags
              }
            }
          }
        }
      }
    }
  `,
};
