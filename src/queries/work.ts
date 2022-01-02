import { graphql } from "gatsby";

export const workQueries = graphql`
  fragment WorkFrontmatter on Mdx {
    frontmatter {
      title
      tags
      subtitle
      slug
      cover_image {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }

  fragment Work on Mdx {
    id
    slug
    body
    ...WorkFrontmatter
  }
`;
