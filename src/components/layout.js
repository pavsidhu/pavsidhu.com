import React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <footer>Made with ❤️ by Pav Sidhu</footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
