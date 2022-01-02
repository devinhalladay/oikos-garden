import { graphql } from 'gatsby';

export const assemblageQueries = graphql`
  fragment AssemblageFrontmatter on Mdx {
    frontmatter {
      title
      subtitle
      cover_image {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

