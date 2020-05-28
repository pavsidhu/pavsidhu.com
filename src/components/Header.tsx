import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import HomeIcon from "../images/icons/home.svg"
import AboutIcon from "../images/icons/about.svg"
import ProjectsIcon from "../images/icons/projects.svg"
import ContactIcon from "../images/icons/contact.svg"

const Container = styled.header`
  display: none;
  align-items: center;
  width: 100%;
  padding: var(--space-s) var(--space-l);
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px;
  background: var(--white);

  @media (min-width: 800px) {
    display: flex;
  }
`

const Title = styled.h1`
  flex: 1;
  font-size: 2rem;
  font-weight: 500;
  padding-top: 0.6rem;
`

const Nav = styled.nav`
  display: flex;
`

const NavItem = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--space-xs) var(--space-s);
  margin-left: var(--space-s);
  background: var(--white);
  border-radius: 20px;
  color: var(--black);
  fill: currentColor;
  transition: background 100ms, color 100ms;

  &.active {
    background: var(--light-orange);
    color: var(--orange);
  }

  @media (hover: hover) {
    &:hover:not(.active) {
      background: var(--light-grey);
    }
  }
`

const NavItemLabel = styled.p`
  margin-left: var(--space-xs);
  padding-top: 0.4rem;
  font-size: 1.4rem;
`

export default function Header() {
  return (
    <Container>
      <Title>
        <Link to="/">Pav Sidhu</Link>
      </Title>

      <Nav>
        <NavItem to="/" activeClassName="active">
          <HomeIcon aria-hidden="true" />
          <NavItemLabel>Home</NavItemLabel>
        </NavItem>

        <NavItem to="/about" activeClassName="active">
          <AboutIcon aria-hidden="true" />
          <NavItemLabel>About</NavItemLabel>
        </NavItem>

        <NavItem to="/projects" activeClassName="active">
          <ProjectsIcon aria-hidden="true" />
          <NavItemLabel>Projects</NavItemLabel>
        </NavItem>

        <NavItem to="/contact" activeClassName="active">
          <ContactIcon aria-hidden="true" />
          <NavItemLabel>Contact</NavItemLabel>
        </NavItem>
      </Nav>
    </Container>
  )
}
