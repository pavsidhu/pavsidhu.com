import React, { ReactNode } from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Orkney';
    src: url('../fonts/Orkney-Medium.woff2') format('woff2'),
        url('../fonts/Orkney-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
      font-family: 'Orkney';
      src: url('../fonts/Orkney-Light.woff2') format('woff2'),
          url('../fonts/Orkney-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Orkney';
      src: url('../fonts/Orkney-Regular.woff2') format('woff2'),
          url('../fonts/Orkney-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Orkney';
      src: url('../fonts/Orkney-Bold.woff2') format('woff2'),
          url('../fonts/Orkney-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
  }

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
`

interface Props {
  children: ReactNode
}

export default function Layout(props: Props) {
  return (
    <>
      <GlobalStyle />
      <main>{props.children}</main>
    </>
  )
}
