import React, { useLayoutEffect, useRef } from "react"
import { Link } from "gatsby"
import { styled } from "linaria/react"

import { ReactComponent as HomeIcon } from "../images/icons/home.svg"
import { ReactComponent as AboutIcon } from "../images/icons/about.svg"
import { ReactComponent as BlogIcon } from "../images/icons/blog.svg"
import { ReactComponent as ProjectsIcon } from "../images/icons/projects.svg"
import { ReactComponent as ContactIcon } from "../images/icons/contact.svg"

const Container = styled.nav`
  grid-area: tabs;
  display: flex;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px;
  background: var(--background-color);
  position: sticky;
  z-index: 10;
  left: 0;
  bottom: 0;
  padding-bottom: env(safe-area-inset-bottom);

  @media (min-width: 800px) {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    background: var(--secondary-background-color);
  }
`

const Tab = styled((props) => <Link {...props} />)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  fill: currentColor;
  padding: calc(0.8rem + 2px) 0 0.8rem;
  border-bottom: 2px solid var(--background-color);
  transition: background 100ms, color 100ms;

  &.active {
    background: var(--primary-light-color);
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
  }

  @media (prefers-color-scheme: dark) {
    &.active {
      color: var(--primary-text-color);
    }
  }

  @media (hover: hover) {
    &:hover:not(.active) {
      background: var(--hover-color);
    }
  }
`

const TabLabel = styled.p`
  margin-top: 4px;
  font-size: var(--font-xxs);
`

export default function TabBar() {
  const containerRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (containerRef.current) {
      document.documentElement.style.setProperty(
        "--tab-bar-height",
        containerRef.current.clientHeight + "px"
      )
    }
  })

  return (
    <Container ref={containerRef}>
      <Tab to="/" activeClassName="active">
        <HomeIcon aria-hidden="true" />
        <TabLabel>Home</TabLabel>
      </Tab>

      <Tab to="/about" activeClassName="active" partiallyActive={true}>
        <AboutIcon aria-hidden="true" />
        <TabLabel>About</TabLabel>
      </Tab>

      <Tab to="/blog" activeClassName="active" partiallyActive={true}>
        <BlogIcon aria-hidden="true" />
        <TabLabel>Blog</TabLabel>
      </Tab>

      <Tab to="/projects" activeClassName="active" partiallyActive={true}>
        <ProjectsIcon aria-hidden="true" />
        <TabLabel>Projects</TabLabel>
      </Tab>

      <Tab to="/contact" activeClassName="active" partiallyActive={true}>
        <ContactIcon aria-hidden="true" />
        <TabLabel>Contact</TabLabel>
      </Tab>
    </Container>
  )
}
