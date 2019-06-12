import React from "react"
import styled from "styled-components"

import blogIcon from "../images/social/blog.svg"
import emailIcon from "../images/social/email.svg"
import gitHubIcon from "../images/social/github.svg"
import linkedInIcon from "../images/social/linkedin.svg"
import mediumIcon from "../images/social/medium.svg"
import twitterIcon from "../images/social/twitter.svg"
import { size } from "../styles"
import Footer from "./Footer"

const socialNetworks = [
  {
    name: "Email",
    handle: "pav@pavsidhu.com",
    link: "mailto:pav@pavsidhu.com",
    icon: emailIcon
  },
  {
    name: "My Blog",
    handle: "blog.pavsidhu.com",
    link: "https://blog.pavsidhu.com",
    icon: blogIcon
  },
  {
    name: "GitHub",
    handle: "@pavsidhu",
    link: "https://github.com/pavsidhu",
    icon: gitHubIcon
  },
  {
    name: "Medium",
    handle: "@pavsidhu",
    link: "https://medium.com/@pavsidhu",
    icon: mediumIcon
  },
  {
    name: "Twitter",
    handle: "@pav_sidhu",
    link: "https://twitter.com/pav_sidhu",
    icon: twitterIcon
  },
  {
    name: "LinkedIn",
    handle: "@pavsidhu",
    link: "https://www.linkedin.com/in/pavsidhu/",
    icon: linkedInIcon
  }
]

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
`

const Contents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = styled.h2`
  text-align: center;
  font-size: 4.8rem;
  color: #1b1b1b;
  margin-bottom: 40px;
`

const Item = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  padding: 16px;
`

const Icon = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
`

const Name = styled.p`
  font-size: 1.8rem;
  color: #1b1b1b;
`

const Handle = styled.p`
  font-size: 1.6rem;
  color: #adadad;
`

const Social = () => (
  <Container>
    <Contents>
      <Heading>Social</Heading>
      {socialNetworks.map((socialNetwork, index) => (
        <Item href={socialNetwork.link} key={index}>
          <Icon src={socialNetwork.icon} />
          <div>
            <Name>{socialNetwork.name}</Name>
            <Handle>{socialNetwork.handle}</Handle>
          </div>
        </Item>
      ))}
    </Contents>
    <Footer />
  </Container>
)

export default Social
