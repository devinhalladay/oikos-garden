const config = require('./config/website');
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
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
    `@commercetools-docs/gatsby-transformer-mdx-introspection`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `@commercetools-docs/gatsby-transformer-mdx-introspection`,
          {
            resolve: 'gatsby-remark-reference-footnotes',
            options: {
              groupInclude: 'default',

              inlineLinkPrefix: '',
              inlineLinkSuffix: '',
              inlineTextPrefix: '',
              inlineTextSuffix: '',

              referenceLinkPosition: 'start',

              referenceLinkPrefix: '↑ ',
              referenceLinkSuffix: '.',
              referenceTextPrefix: '',
              referenceTextSuffix: ' ',
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/moments`,
        name: 'moments',
      },
    },
    {
      resolve: `@aengusm/gatsby-theme-brain`,
      options: {
        mdxOtherwiseConfigured: true,
        notesDirectory: `content/notes/`,
        rootPath: `/`,
        hideDoubleBrackets: true,
      },
    },
  ],
};
