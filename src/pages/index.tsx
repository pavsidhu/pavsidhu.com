import React from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"
import { Link, graphql } from "gatsby"

import { BlogPostCard, Seo, SocialList } from "../components"
import { ReactComponent as ArrowIcon } from "../images/icons/arrow.svg"
import { ReactComponent as IntroBackgroundSvg } from "../images/general/intro-background.svg"
import { ReactComponent as IntroBackgroundSmallSvg } from "../images/general/intro-background-small.svg"

const Container = styled.article`
  width: 100%;
  padding: var(--space-m) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Hero = styled.div`
  min-height: calc(100vh - 300px);
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-areas: "intro";
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
`
const Intro = styled.div`
  @keyframes fade-in {
    to {
      transform: translateY(-10px);
      opacity: 1;
    }
  }

  grid-area: intro;
  display: grid;
  grid-template-areas:
    "photo"
    "title"
    "description"
    "social";
  row-gap: var(--space-s);
  justify-items: start;
  align-items: center;
  z-index: 1;
  padding: var(--space-m);
  transform: translateY(120px);
  opacity: 0;
  animation: fade-in 400ms var(--cubic-bezier-bounce) forwards;

  /* Fix for edge */
  position: relative;

  @media (min-width: 600px) {
    grid-template-areas:
      "photo . title      "
      "photo . description"
      "photo . social     ";
    grid-template-columns: minmax(16rem, 28rem) var(--space-xl) auto;
    row-gap: var(--space-m);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--background-color);
  }
`

const Photo = styled(Image)`
  grid-area: photo;
  align-self: center;
  justify-self: center;
  width: 75%;
  max-width: 240px;
  border-radius: var(--border-radius);

  @media (min-width: 600px) {
    width: 100%;
    max-width: initial;
    padding-bottom: 100%;
    height: 0;
  }
`

const Title = styled.h1`
  grid-area: title;
  width: 100%;
  font-size: 4.8rem;
`

const Description = styled.p`
  grid-area: description;
  font-size: var(--font-m);
  font-weight: 400;
  line-height: 2.8rem;
  max-width: 30ch;

  @media (min-width: 600px) {
    max-width: 35ch;
  }
`

const IntroBackgroundSmall = styled(IntroBackgroundSmallSvg)`
  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  grid-column: -1 / 1;
  grid-row: -1 / 1;
  min-width: 100%;
  transform: scale(1.35);
  transform-origin: 50% 100%;
  justify-self: center;
  align-self: end;
  fill: var(--primary-color);
  opacity: 0;
  animation: fade-in 200ms ease-out 300ms forwards;

  @media (min-width: 600px) {
    display: none;
  }
`

const IntroBackground = styled(IntroBackgroundSvg)`
  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  display: none;
  grid-column: -1 / 1;
  grid-row: 1 / -1;
  width: 120%;
  max-width: 80rem;
  justify-self: center;
  align-self: center;
  fill: var(--primary-color);
  opacity: 0;
  animation: fade-in 200ms ease-out 300ms forwards;

  @media (min-width: 600px) {
    display: block;
  }
`

export default function IndexPage({ data }) {
  return (
    <Container>
      <Seo title="Home" />
      <Hero>
        <Intro>
          <Photo
            fluid={data.file.childImageSharp.fluid}
            width={280}
            height={280}
            loading="eager"
          />
          <Title>Hey, I'm Pav</Title>
          <Description>
            I’m a Software Engineer living in London, UK. I like crafting user
            experiences, health and fitness, and the colour orange.
          </Description>
          <SocialList />
        </Intro>

        <IntroBackground />
        <IntroBackgroundSmall />
      </Hero>
    </Container>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "general/profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 280, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
