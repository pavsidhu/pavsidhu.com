import React from "react"
import styled from "styled-components"

import RandomShapes from "./RandomShapes"
import { size } from "../styles"

import profileImage from "../images/intro/profile.jpg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
  /* border: 3px solid #1b1b1b; */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`

const Heading = styled.h1`
  font-size: 4.8rem;
  color: #1b1b1b;
  margin-bottom: 40px;
`

const List = styled.ul`
  font-size: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${size.medium}) {
    flex-direction: row;
    margin-bottom: 16px;
  }
`

const ListItem = styled.ul`
  margin: 0 24px 16px;

  @media (min-width: ${size.medium}) {
    margin-bottom: 0;
  }
`

const Intro = () => (
  <RandomShapes>
    <Container>
      <Content>
        <Photo src={profileImage} />
        <Heading>Hey I’m Pav</Heading>
        <List>
          <ListItem>
            <a href="https://github.com/pavsidhu">Developer</a>
          </ListItem>
          <ListItem>UX Designer</ListItem>
          <ListItem>
            <a href="https://www.instagram.com/p/BrIiwq9hAbV/">Powerlifter</a>
          </ListItem>
        </List>

        <List>
          <ListItem>Cardiff / Birmingham</ListItem>
          <ListItem>
            <a href="https://www.cs.bham.ac.uk/admissions/undergraduate/degrees/cs">
              Computer Science
            </a>
          </ListItem>
        </List>
      </Content>
    </Container>
  </RandomShapes>
)

export default Intro
