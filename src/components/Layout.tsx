import React from "react"
import styled, { createGlobalStyle } from "styled-components"

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

  * {
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
  }

  :root {
    --orange: #f05f40;
    --light-orange: #fff4f1;
    --black: #1b1b1b;
    --white: #fefefe;
    --light-grey: #eeeeee;

    --space-xs: 8px;
    --space-s: 16px;
    --space-m: 24px;
    --space-l: 32px;
    --space-xl: 40px;
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
