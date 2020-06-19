import React, { useEffect, useState } from "react"
import { css } from "linaria"
import { styled } from "linaria/react"
import { Helmet } from "react-helmet"

// Polyfills
import "focus-visible"
import "web-animations-js"

// Fonts
import fontLight from "../fonts/Orkney-Light.woff2"
import fontMedium from "../fonts/Orkney-Medium.woff2"
import fontRegular from "../fonts/Orkney-Regular.woff2"
import fontBold from "../fonts/Orkney-Bold.woff2"

// Favicons
import faviconSvg from "../images/favicons/favicon.svg"
import favicon16 from "../images/favicons/favicon-16.png"
import favicon32 from "../images/favicons/favicon-32.png"
import favicon48 from "../images/favicons/favicon-48.png"

import { Header, TabBar } from "../components"

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

    article {
      animation: fade-in 100ms ease-in-out;
    }

    [data-clickable],
    [data-clickable="default"] {
      position: relative;
      z-index: 0;

      &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        opacity: 0;
        transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
        transform: scale(0.9);
        background: var(--hover-color);
        border-radius: 10000px;
        top: calc(-1 * 2px);
        left: calc(-1 * 4px);
        width: calc(100% + var(--space-xs));
        height: calc(100% + 4px);
      }

      @media (hover: hover) {
        &:hover:not(.active) {
          &:before {
            transform: none;
            opacity: 1;
          }
        }
      }
    }
    
    [data-clickable="square"] {
      &:before {
        border-radius: 8px;
        top: calc(-1 * var(--space-xs));
        left: calc(-1 * var(--space-xs));
        width: calc(100% + var(--space-s));
        height: calc(100% + var(--space-s));
      }
    }

    @keyframes fade-in {
      from {
        opacity: 0.5;
      }
      to {
        opacity: 1;
      }
    }

    :root {
      --primary-color: #f05f40;
      --primary-light-color: #fff4f1;
      --primary-text-color: #1b1b1b;
      --secondary-text-color: #646464;
      --background-color: #fefefe;
      --secondary-background-color: rgba(0, 0, 0, 0.2);
      --hover-color: rgba(0, 0, 0, 0.075);
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
  grid-template-rows: minmax(0, 1fr) max-content;

  @media (min-width: 800px) {
    grid-template-areas: "header" "main";
    grid-template-rows: max-content minmax(0, 1fr);
  }
`

const Main = styled.main`
  grid-area: main;
  width: 100%;
  background: var(--background-color);
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

interface Props {
  location: Location
  children: React.ReactNode
}

export default function Layout(props: Props) {
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

        <link rel="icon" type="image/svg+xml" href={faviconSvg} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="48x48" href={favicon48} />

        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Helmet>

      <Header />

      <BlogPostTransition.Provider
        value={{
          bounds: blogPostCardBounds,
          setBounds: setBlogPostCardBounds,
          resetBounds: () => setBlogPostCardBounds(undefined)
        }}
      >
        <Main>{props.children}</Main>
      </BlogPostTransition.Provider>

      <TabBar />
    </Container>
  )
}
