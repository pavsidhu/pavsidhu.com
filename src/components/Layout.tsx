import PropTypes from "prop-types"
import React from "react"
import Helmet from "react-helmet"
import { createGlobalStyle } from "styled-components"

import CircularBold from "../fonts/circular-bold.otf"
import CircularBook from "../fonts/circular-book.otf"

import moon from "../images/bulb/moon.svg"
import bulbPreview from "../images/bulb/preview.svg"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "circular-book";
  }

  h3 {
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
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
    <Helmet>
      <link rel="preload" href={moon} />
      <link rel="preload" href={bulbPreview} />
    </Helmet>
    <GlobalStyle />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
