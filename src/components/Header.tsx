import React, { useLayoutEffect, useRef } from "react"
import { styled } from "linaria/react"
import { Link } from "gatsby"

import { ReactComponent as HomeIcon } from "../images/icons/home.svg"
import { ReactComponent as AboutIcon } from "../images/icons/about.svg"
import { ReactComponent as BlogIcon } from "../images/icons/blog.svg"
import { ReactComponent as ProjectsIcon } from "../images/icons/projects.svg"
import { ReactComponent as ContactIcon } from "../images/icons/contact.svg"

const Container = styled.header`
  display: none;

  @media (min-width: 800px) {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    padding: var(--space-s);
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 5px;
    background: var(--background-color);
  }

  @media (prefers-color-scheme: dark) {
    background: var(--secondary-background-color);
  }
`

const Title = styled((props) => <Link {...props} />)`
  font-size: 2rem;
  font-weight: 500;
  padding: calc(var(--font-padding) + 4px) var(--space-xs) 4px;
  border-radius: 20px;
`

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  column-gap: var(--space-s);
`

const NavItem = styled((props) => <Link {...props} />)`
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--space-xs) var(--space-s);
  border-radius: 20px;
  fill: currentColor;
  transition: background 100ms, color 100ms;

  &.active {
    background: var(--primary-light-color);
    color: var(--primary-color);
  }

  @media (prefers-color-scheme: dark) {
    &.active {
      color: var(--primary-text-color);
    }
  }
`

const NavItemLabel = styled.p`
  margin-left: var(--space-xs);
  font-size: var(--font-xs);
  font-weight: 500;
`

export default function Header() {
  const containerRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (containerRef.current) {
      document.documentElement.style.setProperty(
        "--header-height",
        containerRef.current.clientHeight + "px"
      )
    }
  })

  return (
    <Container ref={containerRef}>
      <Title to="/" data-clickable="default">
        Pav Sidhu
      </Title>

      <Nav>
        <NavItem to="/" activeClassName="active" data-clickable="default">
          <HomeIcon aria-hidden="true" />
          <NavItemLabel>Home</NavItemLabel>
        </NavItem>

        <NavItem
          to="/about"
          activeClassName="active"
          partiallyActive={true}
          data-clickable="default"
        >
          <AboutIcon aria-hidden="true" />
          <NavItemLabel>About</NavItemLabel>
        </NavItem>

        <NavItem
          to="/blog"
          activeClassName="active"
          partiallyActive={true}
          data-clickable="default"
        >
          <BlogIcon aria-hidden="true" />
          <NavItemLabel>Blog</NavItemLabel>
        </NavItem>

        <NavItem
          to="/projects"
          activeClassName="active"
          partiallyActive={true}
          data-clickable="default"
        >
          <ProjectsIcon aria-hidden="true" />
          <NavItemLabel>Projects</NavItemLabel>
        </NavItem>

        <NavItem
          to="/contact"
          activeClassName="active"
          partiallyActive={true}
          data-clickable="default"
        >
          <ContactIcon aria-hidden="true" />
          <NavItemLabel>Contact</NavItemLabel>
        </NavItem>
      </Nav>
    </Container>
  )
}
