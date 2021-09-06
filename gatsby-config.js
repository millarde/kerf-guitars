
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `kerf guitars`,
    titleTemplate: `%s | built for aspriing players`,
    description: `This is the kerf guiltars web site. Please learn about what we do and why we do it, read some fun blogs and maybe buy a nice guitar.`,
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
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    }, 
    // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
