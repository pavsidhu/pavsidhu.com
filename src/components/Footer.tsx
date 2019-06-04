import React from "react"
import styled from "styled-components"

import mediumIcon from "../images/social/medium.svg"
import githubIcon from "../images/social/github.svg"
import twitterIcon from "../images/social/twitter.svg"
import emailIcon from "../images/social/email.svg"

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  margin: 32px;
  color: rgba(0, 0, 0, 0.8);
`

const Social = styled.div`
  flex: 1;
`

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`

const Credit = styled.p`
  font-size: 1.6rem;

  span {
    color: rgba(0, 0, 0, 1);
  }
`

const Footer = () => (
  <Container>
    <Social>
      <a href="https://medium.com/@pavsidhu">
        <SocialIcon src={mediumIcon} />
      </a>
      <a href="https://github.com/pavsidhu">
        <SocialIcon src={githubIcon} />
      </a>
      <a href="https://twitter.com/pav_sidhu">
        <SocialIcon src={twitterIcon} />
      </a>
      <a href="mailto:pav@pavsidhu.com?subject=Hey Pav!">
        <SocialIcon src={emailIcon} />
      </a>
    </Social>
    <Credit>
      Made with{" "}
      <span role="img" aria-label="love">
        💛
      </span>
      by Pav Sidhu
    </Credit>
  </Container>
)

export default Footer
