import React from "react"
import { css } from "linaria"
import { styled } from "linaria/react"
import { Helmet } from "react-helmet"
import "focus-visible"

import { Header, TabBar } from "../components"
import fontLight from "../fonts/Orkney-Light.woff2"
import fontMedium from "../fonts/Orkney-Medium.woff2"
import fontRegular from "../fonts/Orkney-Regular.woff2"
import fontBold from "../fonts/Orkney-Bold.woff2"

export const globals = css`
  :global() {
    @font-face {
      font-family: "Orkney";
      src: url("${fontLight}") format("woff2"), url("${fontLight}") format("woff");
      font-weight: 300;
      font-style: normal;
      font-display: optional;
    }

    @font-face {
      font-family: "Orkney";
      src: url("${fontRegular}") format("woff2"), url("${fontRegular}") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: optional;
    }

    @font-face {
      font-family: "Orkney";
      src: url("${fontMedium}") format("woff2"), url("${fontMedium}") format("woff");
      font-weight: 500;
      font-style: normal;
      font-display: optional;
    }

    @font-face {
      font-family: "Orkney";
      src: url("${fontBold}") format("woff2"), url("${fontBold}") format("woff");
      font-weight: bold;
      font-style: normal;
      font-display: optional;
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
      -webkit-tap-highlight-color: transparent;
    }

    html,
    body {
      font-size: 62.5%;
      font-family: "Orkney";
      background: var(--background-color);
      color: var(--primary-text-color);
    }

    a {
      text-decoration: none;
      color: inherit;
      user-select: none;
    }

    img {
      user-select: none;
      user-drag: none;
    }

    button,
    label,
    #gatsby-announcer {
      user-select: none;
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
      box-shadow: 0 0 0 2px var(--primary-color);
    }

    /* Remove default button styles */
    button {
      font: inherit;
      cursor: pointer;
      border: none;
      background: none;
    }

    :root {
      --primary-color: #f05f40;
      --primary-light-color: #fff4f1;
      --primary-text-color: #1b1b1b;
      --secondary-text-color: #646464;
      --background-color: #fefefe;
      --secondary-background-color: rgba(0, 0, 0, 0.2);
      --hover-color: #eeeeee;
      --line-color: rgba(0, 0, 0, 0.1);

      --space-xs: 8px;
      --space-s: 16px;
      --space-m: 24px;
      --space-l: 32px;
      --space-xl: 40px;

      --font-xxl: 5.6rem;
      --font-xl: 3.2rem;
      --font-l: 2.4rem;
      --font-m: 1.8rem;
      --font-s: 1.6rem;
      --font-xs: 1.4rem;
      --font-xxs: 1.2rem;

      --font-padding: 0.333em;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --primary-light-color: rgba(255, 255, 255, 0.25);
        --primary-text-color: rgba(255, 255, 255, 0.9);
        --secondary-text-color: rgba(255, 255, 255, 0.7);
        --background-color: #1b1b1b;
        --secondary-background-color: #292929;
        --hover-color: rgba(255, 255, 255, 0.1);
        --line-color: rgba(255, 255, 255, 0.1);
      }

      * {
        box-shadow: none;
      }
    }
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
    <Container>
      <Helmet>
        <link rel="preload" href={fontLight} as="font" type="font/woff2" />
        <link rel="preload" href={fontMedium} as="font" type="font/woff2" />
        <link rel="preload" href={fontRegular} as="font" type="font/woff2" />
        <link rel="preload" href={fontBold} as="font" type="font/woff2" />
      </Helmet>

      <Header />
      <main>{props.children}</main>
      <TabBar />
    </Container>
  )
}
