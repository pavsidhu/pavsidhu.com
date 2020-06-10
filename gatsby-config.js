require("dotenv").config()

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
    `gatsby-remark-images`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              background: "rgba(0,0,0,0.8)"
            }
          }
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 80,
              withWebp: true,
              linkImagesToOriginal: false,
              showCaptions: true
            }
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              background: "rgba(0,0,0,0.8)"
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              rel: "noopener"
            }
          }
        ]
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
    },
    {
      resolve: `gatsby-plugin-firebase-messaging`,
      options: {
        config: {
          apiKey: process.env.FIREBASE_API_KEY,
          appId: process.env.FIREBASE_APP_ID,
          messagingSenderId: process.env.FIREBASE_FIREBASE_MESSAGING_SENDER_ID,
          projectId: process.env.FIREBASE_FIREBASE_PROJECT_ID
        }
      }
    }
  ]
}
