import { graphql } from "gatsby";

export const essayQueries = graphql`
  fragment EssayFrontmatter on Mdx {
    frontmatter {
      title
      slug
      date(formatString: "MMMM YYYY")
      subtitle
      tags
      cover_image {
        childImageSharp {
          fluid(maxWidth: 800) {
            src
          }
        }
      }
    }
  }

  fragment ReadingTime on Mdx {
    fields {
      readingTime {
        text
      }
    }
  }

  fragment EssayPreview on Mdx {
    id
    slug
    excerpt(truncate: true, pruneLength: 10000)
    ...EssayFrontmatter
    ...ReadingTime
  }

  fragment Essay on Mdx {
    id
    slug
    body
    ...EssayFrontmatter
    ...ReadingTime
  }
`;
