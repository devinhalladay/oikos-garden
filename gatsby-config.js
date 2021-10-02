const config = require('./config/website');
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    FAST_DEV: true,
  },
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: ['Philosophy', 'Tech', 'Design', 'Art History'],
    canonicalUrl: config.siteUrl,
    // image: config.siteLogo,
    author: {
      name: config.author,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      // logo: config.siteLogo,
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve(`./plugins/footnotes.js`),
            options: {
              referenceComponent: 'Footnote',
              footnoteComponent: undefined,
            },
          },
        ],
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
        path: `${__dirname}/content/assemblages`,
        name: 'assemblages',
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
        rootPath: `/`,
        hideDoubleBrackets: false,
      },
    },
    // {
    //   resolve: `gatsby-source-roamresearch`,
    //   options: {
    //     url: 'https://roamresearch.com/#/app/oikos/',
    //     // Learn about environment variables: https://gatsby.dev/env-vars
    //     email: process.env.ROAM_EMAIL,
    //     password: process.env.ROAM_PASSWORD,
    //   },
    // },
  ],
};
