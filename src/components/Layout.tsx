import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import "focus-visible"

import { Header, TabBar } from "../components"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Orkney";
    src: url("../fonts/Orkney-Medium.woff2") format("woff2"),
      url("../fonts/Orkney-Medium.woff") format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Orkney";
    src: url("../fonts/Orkney-Light.woff2") format("woff2"),
      url("../fonts/Orkney-Light.woff") format("woff");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Orkney";
    src: url("../fonts/Orkney-Regular.woff2") format("woff2"),
      url("../fonts/Orkney-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Orkney";
    src: url("../fonts/Orkney-Bold.woff2") format("woff2"),
      url("../fonts/Orkney-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-delay: 0s !important;
      transition-duration: 0s !important;
    }
  }

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    font-size: 62.5%;
    font-family: "Orkney";
    background: var(--white);
    color: var(--black);
  }

  a {
    text-decoration: none;
    color: inherit;
    user-select:  none;
  }
  
  img {
    user-select:  none;
    user-drag: none;
  }

  button, label {
    user-select:  none;
  }

  /* Fixes text not aligning properly due to the font used */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    padding-top: var(--font-padding);
  }

  :focus {
    outline: none;
  }

  .focus-visible {
    box-shadow: 0 0 0 2px var(--orange);
  }

  :root {
    --orange: #f05f40;
    --light-orange: #fff4f1;
    --black: #1b1b1b;
    --white: #fefefe;
    --light-grey: #eeeeee;
    --dark-grey: #646464;

    --space-xs: 8px;
    --space-s: 16px;
    --space-m: 24px;
    --space-l: 32px;
    --space-xl: 40px;

    --font-padding: 0.333em;
  }
`

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;

  @media (min-width: 800px) {
    grid-template-rows: auto 1fr;
  }
`

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <main>{props.children}</main>
        <TabBar />
      </Container>
    </>
  )
}
