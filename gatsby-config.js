module.exports = {
  siteMetadata: {
    title: `Pav Sidhu`,
    description: `Welcome to my website! I'm a developer, designer and powerlifter from Cardiff. I study Computer Science at the University of Birmingham.`,
    author: `Pav Sidhu <pav@pavsidhu.com>`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pav Sidhu`,
        short_name: `Pav Sidhu`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#fefefe`,
        display: `browser`,
        icon: `src/images/favicon/favicon.png`
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`
  ]
}
