import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import HomeIcon from "../images/icons/home.svg"
import AboutIcon from "../images/icons/about.svg"
import ProjectsIcon from "../images/icons/projects.svg"
import ContactIcon from "../images/icons/contact.svg"

const Container = styled.nav`
  display: flex;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px;
  background: var(--white);
`

const Tab = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  fill: currentColor;
  padding: calc(0.8rem + 2px) 0 0.8rem;
  background: var(--white);
  color: var(--black);
  border-bottom: 2px solid var(--white);

  &.active {
    background: var(--light-orange);
    color: var(--orange);
    border-bottom: 2px solid var(--orange);
  }
`

const TabLabel = styled.p`
  margin-top: 4px;
  font-size: 1.2rem;
`

interface Props {
  location: Location
}

export default function TabBar(props: Props) {
  return (
    <Container>
      <Tab to="/" activeClassName="active">
        <HomeIcon />
        <TabLabel>Home</TabLabel>
      </Tab>

      <Tab to="/about" activeClassName="active">
        <AboutIcon />
        <TabLabel>About</TabLabel>
      </Tab>

      <Tab to="/projects" activeClassName="active">
        <ProjectsIcon />
        <TabLabel>Projects</TabLabel>
      </Tab>

      <Tab to="/contact" activeClassName="active">
        <ContactIcon />
        <TabLabel>Contact</TabLabel>
      </Tab>
    </Container>
  )
}
