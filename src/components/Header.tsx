import React, { useLayoutEffect, useRef } from "react"
import { styled } from "linaria/react"
import { Link } from "gatsby"

import { ReactComponent as HomeIcon } from "../images/icons/home.svg"
import { ReactComponent as AboutIcon } from "../images/icons/about.svg"
import { ReactComponent as BlogIcon } from "../images/icons/blog.svg"
import { ReactComponent as ProjectsIcon } from "../images/icons/projects.svg"
import { ReactComponent as ContactIcon } from "../images/icons/contact.svg"
import { ReactComponent as IconSvg } from "../images/favicons/favicon.svg"

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
    border-bottom: 1px solid var(--divider-color);
    padding: var(--space-s);
    background: var(--navigation-background-color);
  }

  @supports (backdrop-filter: blur(10px)) {
    background: var(--navigation-background-blur-color);
    backdrop-filter: blur(10px);
  }
`

const Icon = styled(IconSvg)`
  width: 3.2rem;
  height: 3.2rem;
  transition: transform 120ms ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: rotateZ(-5deg) scale(1.1);
    }
  }
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
  transition: background 100ms, color 100ms;

  svg {
    * {
      transition: fill 100ms;
    }

    #outline {
      fill: var(--default-text-color);
    }

    #fill {
      fill: transparent;
    }
  }

  &.active {
    color: var(--primary-text-color);

    svg #fill {
      fill: var(--primary-color);
    }
  }

  @media (prefers-color-scheme: dark) {
    &.active {
      svg {
        #fill {
          fill: transparent;
        }

        #outline {
          fill: var(--primary-text-color);
        }
      }
    }
  }
`

const NavItemLabel = styled.p`
  margin-left: var(--space-xs);
  padding-top: var(--font-padding);
  font-family: var(--orkney-font-family);
  font-size: var(--font-xs);
  font-weight: 500;
`

export default function Header() {
  const containerRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (containerRef.current) {
      // +1 to take into account bottom border of header
      document.documentElement.style.setProperty(
        "--header-height",
        containerRef.current.clientHeight + 1 + "px"
      )
    }
  })

  return (
    <Container ref={containerRef}>
      <Link to="/">
        <Icon />
      </Link>

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
