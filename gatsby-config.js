const config = require("./config/website");
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // These are preview features.
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
    PARALLEL_SOURCING: true,
  },
  // This configures metadata about the app.
  // THe values are mostly used in the head of the site.
  siteMetadata: {
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
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-remark-reading-time`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx-source-name`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          // Default page layout for all posts rendered by MDX.
          default: require.resolve(`./src/components/Layout.jsx`),
        },
        gatsbyRemarkPlugins: [
          // Parses markdown and creates a table of contents
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              // We can use any remark plugins here
              plugins: [`gatsby-remark-heading-slug`],
            },
          },
          // Custom plugin powering my site's margin notes
          {
            resolve: require.resolve(`./plugins/footnotes.js`),
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
        path: `${__dirname}/src/images/`,
      },
    },
    // Sometimes we need to use an absolute path to an image,
    // so we can also store images here.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images/`,
      },
    },
    // All my site's pages are stored in this folder
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    // All my essays are stored in this folder
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/essays`,
        name: "essays",
      },
    },
    // All my works are stored in this folder
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/works`,
        name: "works",
      },
    },
    // My notes and wikilinks are parsed by this plugin
    {
      resolve: `@aengusm/gatsby-theme-brain`,
      options: {
        mdxOtherwiseConfigured: true,
        notesDirectory: `content/notes/`,
        rootPath: `notes`,
        hideDoubleBrackets: false,
      },
    },
  ],
};
