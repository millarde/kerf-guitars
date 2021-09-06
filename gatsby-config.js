
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `kerf guitars`,
    titleTemplate: `%s | built for aspriing players`,
    description: `Built using GatsbyJS and serving content using markdown`,
    siteUrl: `https://kerfguitars.com`, // Cannot include a trailing slash
    image: `/images/kerfguitars-logo.png`,
    twitterUsername: `@millard3`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `src/products`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },        
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
}
