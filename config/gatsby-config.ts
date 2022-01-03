import type { GatsbyConfig } from "gatsby";

const config = require("./website");
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const plugins: GatsbyConfig["plugins"] = [
  `gatsby-plugin-emotion`,
  `gatsby-plugin-sass`,
  `gatsby-plugin-image`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-sitemap`,
  `gatsby-remark-reading-time`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-graphql-config`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.GATSBY_ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_ADMIN_KEY,
      queries: require("../src/queries/algolia.ts"),
    },
  },
  {
    resolve: `gatsby-plugin-typegen`,
    options: {
      outputPath: `./@types/gatsby-types.d.ts`,
      includeResolvers: true,
      emitSchema: {
        "./__generated__/gatsby-introspection.json": true,
      },
      emitPluginDocuments: {
        "./__generated__/gatsby-plugin-documents.graphql": true,
      },
    },
  },
  `gatsby-plugin-mdx-source-name`,
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
      defaultLayouts: {
        // Default page layout for all posts rendered by MDX.
        default: require.resolve(`../src/components/Layout.tsx`),
      },
      gatsbyRemarkPlugins: [
        // Parses markdown and creates a table of contents
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            // We can use any remark plugins here
            plugins: [],
          },
        },
        // Images
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1200,
          },
        },
        // Custom plugin powering my site's margin notes
        {
          resolve: require.resolve(`../plugins/footnotes.js`),
          options: {
            // Component for rendering margin notes
            referenceComponent: `Footnote`,
            // We'll render the footnotes in a custom component.
            footnoteComponent: undefined,
          },
        },
      ],
    },
  },
  // All our images are stored in this folder
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/images/`,
    },
  },
  // Sometimes we need to use an absolute path to an image,
  // so we can also store images here.
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./static/images/`,
    },
  },
  // All my site's pages are stored in this folder
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: "pages",
      path: `./src/pages/`,
    },
  },
  // All my essays are stored in this folder
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./content/essays`,
      name: "essays",
    },
  },
  // All my works are stored in this folder
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./content/works`,
      name: "works",
    },
  },
  // Assemblages
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./content/assemblages`,
      name: "assemblages",
    },
  },
  // My notes and wikilinks are parsed by this plugin
  {
    resolve: `@aengusm/gatsby-theme-brain`,
    options: {
      mdxOtherwiseConfigured: true,
      notesDirectory: `./content/notes/`,
      rootPath: `notes`,
      hideDoubleBrackets: false,
    },
  },
];

const siteMetadata: GatsbyConfig["siteMetadata"] = {
  siteUrl: config.siteUrl + pathPrefix,
  title: config.siteTitle,
  twitterHandle: config.twitterHandle,
  description: config.siteDescription,
  keywords: ["Philosophy", "Tech", "Design", "Art History"],
  canonicalUrl: config.siteUrl,
  author: {
    name: config.author,
  },
  organization: {
    name: config.organization,
    url: config.siteUrl,
  },
  social: {
    twitter: config.twitterHandle,
  },
};

const flags: GatsbyConfig["flags"] = {
  FAST_DEV: true,
  DEV_SSR: false,
  PARALLEL_SOURCING: true,
};

module.exports = <GatsbyConfig>{
  // These are preview features.
  flags,
  // This configures metadata about the app.
  // THe values are mostly used in the head of the site.
  siteMetadata,
  // All our plugins are listed here.
  plugins,
};
