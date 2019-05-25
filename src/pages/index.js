import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { size } from "../styles"
import profileImage from "../images/profile.jpg"

const Photo = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 40px;
  border: 3px solid #1b1b1b;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
`

const Intro = styled.h1`
  font-size: 4.8rem;
  color: #1b1b1b;
  margin-bottom: 40px;
`

const List = styled.ul`
  display: flex;
  font-size: 2rem;
  margin-bottom: 16px;

  flex-direction: column;

  @media (min-width: ${size.medium}) {
    flex-direction: row;
  }
`

const ListItem = styled.ul`
  margin: 0 24px;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" />
      <Content>
        <Photo src={profileImage} />
        <Intro>Hey I’m Pav</Intro>
        <List>
          <ListItem>Developer</ListItem>
          <ListItem>UX Designer</ListItem>
          <ListItem>Powerlifter</ListItem>
        </List>

        <List>
          <ListItem>Cardiff / Birmingham</ListItem>
          <ListItem>Computer Science</ListItem>
        </List>
      </Content>
    </Container>
  </Layout>
)

export default IndexPage
