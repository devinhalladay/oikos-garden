import React from "react";
import { graphql } from "gatsby";

import BrainNote from "../components/BrainNote";

export default (props) => {
  return <BrainNote note={props.data.brainNote} />;
};

export const query = graphql`
  query BrainNoteWithRefsBySlug($slug: String!) {
    brainNote(slug: { eq: $slug }) {
      slug
      title
      absolutePath
      childMdx {
        body
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          slug
          tags
        }
      }
      inboundReferenceNotes {
        title
        slug
        childMdx {
          excerpt(pruneLength: 200)
          frontmatter {
            title
            slug
            tags
          }
        }
      }
      outboundReferenceNotes {
        title
        slug
        childMdx {
          excerpt(pruneLength: 280)
          frontmatter {
            title
            slug
            tags
          }
        }
      }
    }
  }
`;
