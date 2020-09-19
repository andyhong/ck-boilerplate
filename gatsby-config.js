module.exports = {
  siteMetadata: {
    title: `Demo Church`,
    description: `The weekly bulletin for Demo Church`,
    author: `@churchkeyio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bulletin`,
        path: `${__dirname}/content/bulletin`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `config`,
        path: `${__dirname}/content/config`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`,`400`, `500`, `600`, `700`, `900`]
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        addPageHeaders: [
          `Cache-Control: no-store`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Demo Church Bulletin`,
        short_name: `Demo Church`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#faae2b`,
        display: `minimal-ui`,
        icon: `src/images/door.svg`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-identity-widget`,
  ],
}
