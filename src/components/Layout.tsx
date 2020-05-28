import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import { TabBar } from "../components"

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

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;
    font-family: "Orkney";
    background: var(--white);
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
  }
`

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`

interface Props {
  children: React.ReactNode
  location: Location
}

export default function Layout(props: Props) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <main>{props.children}</main>
        <TabBar location={location} />
      </Container>
    </>
  )
}
