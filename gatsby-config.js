const config = require('./config/website');
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
    PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: ['Philosophy', 'Tech', 'Design', 'Art History'],
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
    'gatsby-plugin-emotion',
    `gatsby-plugin-sass`,
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-remark-reading-time',
    'gatsby-plugin-sharp',
    `gatsby-plugin-mdx-source-name`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                'gatsby-remark-heading-slug'
              ],
            },
          },
          {
            resolve: require.resolve(`./plugins/footnotes.js`),
            options: {
              referenceComponent: 'Footnote',
              footnoteComponent: undefined,
            },
          },
        ],

        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/essays`,
        name: 'essays',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/works`,
        name: 'works',
      },
    },
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
