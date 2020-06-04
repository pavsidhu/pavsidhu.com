module.exports = {
  siteMetadata: {
    title: `Pav Sidhu`,
    description: `I’m a developer from the UK. I like progressive web apps, neural networks and designing user experiences.`,
    author: `Pav Sidhu <pav@pavsidhu.com>`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.tsx`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/content/blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPostImages`,
        path: `${__dirname}/static/images/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pav Sidhu`,
        short_name: `Pav Sidhu`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#f05f40`,
        display: `browser`,
        icon: `src/images/favicon/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41576939-2"
      }
    }
  ]
}
