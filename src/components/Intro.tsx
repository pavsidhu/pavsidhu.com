import React from "react"
import { Link as ScrollLink } from "react-scroll"
import styled from "styled-components"

import profileImage from "../images/intro/profile.jpg"
import scatterBackground from "../images/intro/scatter.svg"
import scrollIndicator from "../images/intro/scroll_indicator.svg"
import { size } from "../styles"
import Link from "./Link"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: url('${scatterBackground}');
  background-repeat: repeat;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
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
  position: absolute;
  bottom: 0;
  cursor: pointer;
  margin-bottom: 24px;
`

const ScrollIndicator = styled.img`
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
            href="https://www.cs.bham.ac.uk/admissions/undergraduate/degrees/cs"
            target="_blank"
            rel="noopener"
          >
            Computer Science
          </Link>
        </ListItem>
      </List>

      <ScrollIndicatorContainer to="projects" smooth={true} duration={300}>
        <ScrollIndicator src={scrollIndicator} alt="Scroll indicator" />
      </ScrollIndicatorContainer>
    </Content>
  </Container>
)

export default Intro
