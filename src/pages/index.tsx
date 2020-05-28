import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import TwitterIcon from "../images/icons/twitter.svg"
import GitHubIcon from "../images/icons/github.svg"
import LinkedInIcon from "../images/icons/linkedin.svg"

const Container = styled.section`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 320px 1fr;
    height: 100%;
  }
`

const Intro = styled.div`
  background: #f7f7f7;

  display: grid;
  grid-template-columns:
    var(--space-m)
    72px
    var(--space-s)
    auto
    var(--space-m);

  grid-template-rows:
    var(--space-m)
    72px
    var(--space-m)
    max-content
    var(--space-m)
    auto
    var(--space-m);
  align-items: center;
  grid-template-areas:
    ".      .      .      .        .      "
    ".      photo  .      greeting .      "
    ".      .      .      .        .      "
    ".      desc   desc   desc     .      "
    ".      .      .      .        .      "
    "social social social social    social"
    ".      .      .      .        .      ";

  @media (min-width: 800px) {
    position: sticky;
    left: 0;
    top: 0;
  }
`

const ProfilePicture = styled(Image)`
  grid-area: photo;
  border-radius: 50%;
`

const Greeting = styled.h2`
  grid-area: greeting;
  font-size: 3.2rem;
  padding-top: 1rem;
`

const Description = styled.p`
  grid-area: desc;
  line-height: 2.4rem;
  font-size: 1.6rem;
  font-weight: 300;
`

const Highlight = styled.span`
  color: var(--orange);
`

const Social = styled.div`
  grid-area: social;
  height: 100%;
  display: flex;
  margin: 0 var(--space-m);

  @media (min-width: 800px) {
    flex-direction: column;
    margin: 0;
  }
`

const SocialLink = styled.a`
  display: grid;
  grid-template-areas: "icon";
  grid-template-columns: var(--space-m);
  grid-template-rows: var(--space-m);
  color: var(--black);
  margin-right: var(--space-m);
  transition: background 100ms, color 100ms;

  @media (min-width: 800px) {
    grid-template-columns: var(--space-xl) var(--space-s) 1fr;
    grid-template-rows: initial;
    grid-template-areas:
      "icon . label "
      "icon . handle";
    margin: 0 var(--space-s) var(--space-xs);
    padding: var(--space-xs) var(--space-s);
    border-radius: 40px;
  }

  @media (hover: hover) {
    &:hover {
      background: var(--light-grey);
      color: var(--orange);
    }
  }
`

const SocialIcon = styled.svg`
  grid-area: icon;
  width: 100%;
  height: 100%;
  fill: currentColor;
  align-self: center;
`

const SocialLabel = styled.p`
  display: none;

  @media (min-width: 800px) {
    display: block;
    grid-area: label;
    font-size: 1.6rem;
    padding-top: 0.5rem;
  }
`

const SocialHandle = styled.p`
  display: none;

  @media (min-width: 800px) {
    display: block;
    grid-area: handle;
    font-size: 1.6rem;
    padding-top: 0.5rem;
    color: #adadad;
  }
`

const BlogPosts = styled.div``

export default function IndexPage({ data }) {
  return (
    <>
      <Seo title="Home" />
      <Container>
        <Intro>
          <ProfilePicture fixed={data.file.childImageSharp.fixed} />
          <Greeting>Hey, I'm Pav</Greeting>
          <Description>
            I’m a developer from the UK. I like{" "}
            <Highlight>progressive web apps</Highlight>,{" "}
            <Highlight>neural networks</Highlight> and{" "}
            <Highlight>designing user experiences</Highlight>.
          </Description>

          <Social>
            <SocialLink
              href="https://twitter.com/pav_sidhu"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon as={TwitterIcon} />
              <SocialLabel>Twitter</SocialLabel>
              <SocialHandle>@pav_sidhu</SocialHandle>
            </SocialLink>

            <SocialLink
              href="https://github.com/pavsidhu"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon as={GitHubIcon} />
              <SocialLabel>GitHub</SocialLabel>
              <SocialHandle>@pavsidhu</SocialHandle>
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/in/pavsidhu"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon as={LinkedInIcon} />
              <SocialLabel>LinkedIn</SocialLabel>
              <SocialHandle>@pavsidhu</SocialHandle>
            </SocialLink>
          </Social>
        </Intro>
        <BlogPosts></BlogPosts>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "intro/profile.jpg" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
