import React, { useEffect, useState } from "react"
import { css } from "linaria"
import { styled } from "linaria/react"
import { Helmet } from "react-helmet"
import { TransitionGroup, CSSTransition } from "react-transition-group"

// Polyfills
import "focus-visible"
import "web-animations-js"

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
      font-display: block;
    }

    @font-face {
      font-family: "Orkney";
      src: url("${fontRegular}") format("woff2"), url("${fontRegular}") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: block;
    }

    @font-face {
      font-family: "Orkney";
      src: url("${fontMedium}") format("woff2"), url("${fontMedium}") format("woff");
      font-weight: 500;
      font-style: normal;
      font-display: block;
    }

    @font-face {
      font-family: "Orkney";
      src: url("${fontBold}") format("woff2"), url("${fontBold}") format("woff");
      font-weight: bold;
      font-style: normal;
      font-display: block;
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
      font-family: "Orkney", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;
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
      box-shadow: var(--focus-box-shadow);
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
      --focus-box-shadow: 0 0 0 2px var(--primary-color);
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
  grid-template-areas: "main" "tabs";
  grid-template-rows: 1fr auto;

  @media (min-width: 800px) {
    grid-template-areas: "header" "main";
    grid-template-rows: auto 1fr;
  }
`

const timeout = 100

const Main = styled(TransitionGroup)`
  grid-area: main;
  position: relative;
`

const Content = styled.div`
  width: 100%;
  background: var(--background-color);
  transition: opacity ${timeout}ms ease-in-out;

  &.enter {
    position: absolute;
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
  }

  &.exit {
    position: absolute;
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
  }
`

export const BlogPostTransition = React.createContext<{
  bounds?: DOMRect
  setBounds: (bounds?: DOMRect) => void
  resetBounds: () => void
}>({
  bounds: undefined,
  setBounds: () => {},
  resetBounds: () => {}
})

export default function Layout(props: { children: React.ReactNode }) {
  // Disable annoying install prompt
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault()
    })

    window.matchMedia("(prefers-color-scheme: dark)").addListener((event) => {
      document
        .querySelector("meta[name=theme-color]")
        ?.setAttribute("content", event.matches ? "#292929" : "#fefefe")
    })
  }, [])

  const [blogPostCardBounds, setBlogPostCardBounds] = useState<DOMRect>()
  const subtab = location.pathname.split("/")[2]

  return (
    <Container>
      <Helmet>
        {[fontLight, fontRegular, fontMedium, fontBold].map((font, index) => (
          <link
            rel="preload"
            href={font}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key={index}
          />
        ))}
      </Helmet>

      <Header />

      <BlogPostTransition.Provider
        value={{
          bounds: blogPostCardBounds,
          setBounds: setBlogPostCardBounds,
          resetBounds: () => setBlogPostCardBounds(undefined)
        }}
      >
        <Main component="main">
          <CSSTransition
            key={subtab}
            timeout={timeout}
            unmountOnExit={true}
            onExit={(node) => {
              node.style.top = (-1 * window.scrollY).toString() + "px"
            }}
          >
            <Content>{props.children}</Content>
          </CSSTransition>
        </Main>
      </BlogPostTransition.Provider>

      <TabBar />
    </Container>
  )
}
