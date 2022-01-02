const escapeStringRegexp = require("escape-string-regexp");

const pagePath = `content`;
const indexName = `oikos`;

const essayQuery = `{
  pages: allMdx(filter: {fileAbsolutePath: { regex: "/content/essays" }}) {
    edges {
      node {
        id
        slug
        excerpt(truncate: true, pruneLength: 10000)
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
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
}
`;

const notesQuery = `{
  pages: allBrainNote(
    sort: {fields: childMdx___frontmatter___date}
    filter: {absolutePath: {regex: "/content/notes/"}}
  ) {
    edges {
      node {
        id
        title
        slug
        childMdx {
          frontmatter {
            date(formatString: "MM.DD.YYYY")
            subtitle
            published
            tags
          }
          excerpt(pruneLength: 10000)
        }
      }
    }
  }
}
`;

const worksQuery = `{
  pages: allMdx(
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
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, ...rest } }: GatsbyTypes.MdxEdge) {
  return {
    objectID: id,
    ...rest,
  };
}

const queries = [
  {
    query: essayQuery,
    transformer: ({
      data,
    }: {
      data: {
        pages: GatsbyTypes.MdxConnection;
      };
    }) => {
      return data.pages.edges.map(pageToAlgoliaRecord);
    },
    indexName: "oikos",
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
  {
    query: notesQuery,
    transformer: ({
      data,
    }: {
      data: {
        pages: GatsbyTypes.MdxConnection;
      };
    }) => {
      return data.pages.edges.map(pageToAlgoliaRecord);
    },
    indexName: "notes",
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
  {
    query: worksQuery,
    transformer: ({
      data,
    }: {
      data: {
        pages: GatsbyTypes.MdxConnection;
      };
    }) => {
      return data.pages.edges.map(pageToAlgoliaRecord);
    },
    indexName: "works",
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];

module.exports = queries;
