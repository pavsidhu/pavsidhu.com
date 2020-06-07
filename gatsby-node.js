const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

// Add slug to blog post nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `Mdx`) {
    actions.createNodeField({
      node,
      name: `slug`,
      value: createFilePath({ node, getNode })
    })
  }
}
