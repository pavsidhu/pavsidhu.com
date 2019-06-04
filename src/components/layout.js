import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from "styled-components"

import Footer from "./Footer"
import CircularBold from "../fonts/circular-bold.otf"
import CircularBook from "../fonts/circular-book.otf"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "circular-book";
  }

  html, body {
    font-size: 62.5%;
    background: #fefefe;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @font-face {
    font-family: "circular-bold";
    src: url('${CircularBold}') format("opentype");
  }

  @font-face {
    font-family: "circular-book";
    src: url('${CircularBook}') format("opentype");
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
