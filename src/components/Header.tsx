import React, { useLayoutEffect, useRef } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { ReactComponent as HomeIcon } from "../images/icons/home.svg"
import { ReactComponent as AboutIcon } from "../images/icons/about.svg"
import { ReactComponent as BlogIcon } from "../images/icons/blog.svg"
import { ReactComponent as ProjectsIcon } from "../images/icons/projects.svg"
import { ReactComponent as ContactIcon } from "../images/icons/contact.svg"

const Container = styled.header`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    padding: var(--space-s) var(--space-l);
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 5px;
    background: var(--background-color);
  }

  @media (prefers-color-scheme: dark) {
    background: var(--dark-secondary-background-color);
  }
`

const Title = styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  padding-top: var(--font-padding);
`

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  column-gap: var(--space-s);
`

const NavItem = styled(Link)`
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

  @media (hover: hover) {
    &:hover:not(.active) {
      background: var(--hover-color);
    }
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
`

export default function Header() {
  const containerRef = useRef()

  useLayoutEffect(() => {
    if (!containerRef.current) return

    document.documentElement.style.setProperty(
      "--header-height",
      containerRef.current.clientHeight + "px"
    )
  })

  return (
    <Container ref={containerRef}>
      <Title to="/">Pav Sidhu</Title>

      <Nav>
        <NavItem to="/" activeClassName="active">
          <HomeIcon aria-hidden="true" />
          <NavItemLabel>Home</NavItemLabel>
        </NavItem>

        <NavItem to="/about" activeClassName="active" partiallyActive={true}>
          <AboutIcon aria-hidden="true" />
          <NavItemLabel>About</NavItemLabel>
        </NavItem>

        <NavItem to="/blog" activeClassName="active" partiallyActive={true}>
          <BlogIcon aria-hidden="true" />
          <NavItemLabel>Blog</NavItemLabel>
        </NavItem>

        <NavItem to="/projects" activeClassName="active" partiallyActive={true}>
          <ProjectsIcon aria-hidden="true" />
          <NavItemLabel>Projects</NavItemLabel>
        </NavItem>

        <NavItem to="/contact" activeClassName="active" partiallyActive={true}>
          <ContactIcon aria-hidden="true" />
          <NavItemLabel>Contact</NavItemLabel>
        </NavItem>
      </Nav>
    </Container>
  )
}
