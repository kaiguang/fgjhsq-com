module.exports = {
  siteMetadata: {
    title: `余事`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `poems`,
        path: `${__dirname}/poems/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-copy-linked-files`, `gatsby-remark-images`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `余事`,
        short_name: `余事`,
        start_url: `/`,
        background_color: `#fff9c4`,
        theme_color: `#fff9c4`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `fgjhsq-com`,
        acl: null,
        protocol: `https`,
        hostname: `fgjhsq-com`,
        region: `us-west-2`,
      },
    },
  ],
}
