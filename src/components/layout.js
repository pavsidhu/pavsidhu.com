import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"

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

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`

const Credit = styled.p`
  font-size: 1.6rem;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>
    <Footer>
      <Credit>
        {" "}
        Made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by Pav Sidhu
      </Credit>
    </Footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
