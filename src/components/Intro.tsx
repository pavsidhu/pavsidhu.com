import React from "react"
import { Link as ScrollLink } from "react-scroll"
import styled from "styled-components"

import profileImage from "../images/intro/profile.jpg"
import scatterBackground from "../images/intro/scatter.svg"
import scrollIndicator from "../images/intro/scroll_indicator.svg"
import { size } from "../styles"
import Link from "./Link"

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas: "space" "content" "scroll";
  width: 100vw;
  min-height: 100vh;
  background: url('${scatterBackground}');
  background-repeat: repeat;
`

const Content = styled.div`
  grid-area: content;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  flex: 1;
`

const Photo = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`

const Heading = styled.h1`
  font-size: 4.8rem;
  color: #1b1b1b;
  margin-bottom: 40px;
  background-color: #fefefe;
`

const List = styled.ul`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${size.medium}) {
    flex-direction: row;
    margin-bottom: 16px;
  }
`

const ListItem = styled.li`
  margin: 0 24px 16px;
  background-color: #fefefe;
  list-style-type: none;

  @media (min-width: ${size.medium}) {
    margin-bottom: 0;
  }
`

const ScrollIndicatorContainer = styled(ScrollLink)`
  grid-area: scroll;
  align-self: flex-end;
  justify-self: center;
  cursor: pointer;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 100ms ease-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
    }

    &:hover img {
      transform: translateY(5px);
    }
  }
`

const ScrollText = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`

const ScrollIndicator = styled.img`
  transition: transform 100ms ease-out 80ms;
  width: 32px;
`

const Intro = () => (
  <Container>
    <Content>
      <Photo src={profileImage} alt="My face" />
      <Heading>Hey I’m Pav</Heading>

      <List>
        <ListItem>
          <Link
            href="https://github.com/pavsidhu"
            target="_blank"
            rel="noopener"
          >
            Developer
          </Link>
        </ListItem>
        <ListItem>UX Designer</ListItem>
        <ListItem>
          <Link
            href="https://www.instagram.com/p/BrIiwq9hAbV/"
            target="_blank"
            rel="noopener"
          >
            Powerlifter
          </Link>
        </ListItem>
      </List>

      <List>
        <ListItem>Cardiff / Birmingham</ListItem>
        <ListItem>
          <Link
            href="https://www.cs.bham.ac.uk/admissions/undergraduate/degrees/aics"
            target="_blank"
            rel="noopener"
          >
            AI and Computer Science
          </Link>
        </ListItem>
      </List>
    </Content>

    <ScrollIndicatorContainer to="projects" smooth={true} duration={300}>
      <ScrollText>My Projects</ScrollText>
      <ScrollIndicator src={scrollIndicator} alt="Scroll indicator" />
    </ScrollIndicatorContainer>
  </Container>
)

export default Intro
