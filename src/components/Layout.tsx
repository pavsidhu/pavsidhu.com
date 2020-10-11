import React, { useEffect, useState } from "react"
import { css } from "linaria"
import { styled } from "linaria/react"
import { Helmet } from "react-helmet"

// Polyfills
import "focus-visible"
import "web-animations-js"
import "scroll-behavior-polyfill"
import "wicg-inert"

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

import backgroundLight from "../images/general/background-light.svg"
import backgroundDark from "../images/general/background-dark.svg"
import { Header, TabBar } from "../components"

export const globals = css`
  :global() {
    @font-face {
      font-family: "Orkney";
      src: url("${fontLight}") format("woff2"),
        url("${fontLight}") format("woff");
      font-weight: 300;
      font-style: normal;
      font-display: block;
    }

    @font-face {
      font-family: "Orkney";
      src: url("${fontRegular}") format("woff2"),
        url("${fontRegular}") format("woff");
      font-weight: normal;
      font-style: normal;
      font-display: block;
    }

    @font-face {
      font-family: "Orkney";
      src: url("${fontMedium}") format("woff2"),
        url("${fontMedium}") format("woff");
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
      font-family: var(--orkney-font-family);
      color: var(--default-text-color);
      background-color: var(--background-color);
      background-image: url("${backgroundLight}");
      background-size: 50px;
    }

    p {
      font-family: var(--system-font-family);
    }

    a {
      text-decoration: none;
      color: inherit;
      user-select: none;
    }

    p a {
      color: var(--primary-text-color);
      background-image: linear-gradient(currentColor, currentColor);
      background-position: 0% 100%;
      background-repeat: no-repeat;
      background-size: 0% 2px;
      transition: background-size 160ms ease-in-out;
      user-select: auto;

      @media (hover: hover) {
        &:hover {
          background-size: 100% 2px;
        }
      }
    }

    img {
      user-select: none;
      user-drag: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: var(--orkney-font-family);
    }

    button,
    label,
    #gatsby-announcer {
      user-select: none;
    }

    :focus {
      outline: none;
    }

    .focus-visible {
      box-shadow: var(--focus-box-shadow);
    }

    body:not(.loaded) *:not(article) {
      animation-play-state: paused !important;
      transition: none !important;
    }

    /* Remove default button styles */
    button {
      font: inherit;
      cursor: pointer;
      border: none;
      background: none;
    }

    /* Remove default textarea styles */
    textarea {
      font-family: inherit;
      font-size: inherit;

      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
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
        top: calc(-1 * 4px);
        left: calc(-1 * 4px);
        width: calc(100% + var(--space-xs));
        height: calc(100% + var(--space-xs));
      }

      @media (hover: hover) {
        &:hover {
          &:before {
            transform: none;
            opacity: 1;
          }
        }
      }

      &:active:not(.active) {
        &:before {
          transform: none;
          opacity: 1;
        }
      }
    }

    [data-clickable="square"] {
      &:before {
        border-radius: 12px;
        top: calc(-1 * var(--space-xs));
        left: calc(-1 * var(--space-xs));
        width: calc(100% + var(--space-s));
        height: calc(100% + var(--space-s));
      }
    }

    :root {
      --primary-color: #ff8767;
      --primary-text-color: #da3d00;
      --default-text-color: #1b1b1b;
      --secondary-text-color: #646464;
      --background-color: #fffffc;
      --navigation-background-color: #fffffc;
      --navigation-background-blur-color: #fffffcd9;
      --hover-color: rgba(0, 0, 0, 0.07);
      --divider-color: #f2f2ef;

      --space-xxs: 8px;
      --space-xs: 8px;
      --space-s: 16px;
      --space-m: 24px;
      --space-l: 32px;
      --space-xl: 40px;
      --space-xxl: 48px;

      --font-xxl: 5.6rem;
      --font-xl: 3.2rem;
      --font-l: 2.4rem;
      --font-m: 1.8rem;
      --font-s: 1.6rem;
      --font-xs: 1.4rem;
      --font-xxs: 1.2rem;

      --font-padding: 0.333em;
      --system-font-family: system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell,
        sans-serif;
      --orkney-font-family: "Orkney", var(--system-font-family);
      --focus-box-shadow: 0 0 0 2px var(--primary-text-color);
      --cubic-bezier-bounce: cubic-bezier(0.75, -0.5, 0, 1.75);
      --border-radius: 8px;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --primary-text-color: #ff8767;
        --default-text-color: rgba(255, 255, 255, 0.9);
        --secondary-text-color: rgba(255, 255, 255, 0.7);
        --background-color: #232323;
        --navigation-background-color: #2d2d2d;
        --navigation-background-blur-color: #2d2d2df2;
        --hover-color: rgba(255, 255, 255, 0.1);
        --divider-color: #393939;
      }

      * {
        box-shadow: none;
      }

      body {
        background-image: url("${backgroundDark}");
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

    // Play animations once page has loaded
    document.body.className = "loaded"
  }, [])

  const [blogPostCardBounds, setBlogPostCardBounds] = useState<DOMRect>()

  return (
    <Container>
      <Helmet
        bodyAttributes={{
          onTouchStart: undefined,
          onContextMenu: () =>
            !window.matchMedia("(display-mode: standalone)").matches
        }}
      >
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
