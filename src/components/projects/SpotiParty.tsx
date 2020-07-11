import React from "react"
import { styled } from "linaria/react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import { spotiparty } from "../../projects"
import {
  Title,
  Subtitle,
  Paragraph,
  ProjectContainer,
  ProjectDetails,
  ProjectPreview
} from ".."

const Container = styled(ProjectContainer)`
  background: #39d772;
  color: #0b0b0b;

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(#39d772e6, #39d772e6);
    background-color: var(--background-color);
  }
`

const Button = styled.a`
  justify-self: start;
  padding: calc(16px + var(--font-padding)) 16px 16px;
  font-size: var(--font-s);
  background-color: #fefefe;
  border: 5px solid #0b0b0b;
  box-shadow: 8px 8px 0px #0b0b0b;
  transition: transform 100ms, box-shadow 100ms;

  @media (hover: hover) {
    &:hover {
      box-shadow: 12px 12px 0px #0b0b0b;
      transform: translateX(-2px) translateY(-2px) scale(1.03);
    }
  }

  &:active {
    box-shadow: 12px 12px 0px #0b0b0b;
    transform: translateX(-2px) translateY(-2px) scale(1.03);
  }

  &:focus {
    box-shadow: var(--focus-box-shadow), 12px 12px 0px #0b0b0b;
  }
`

const Preview = styled(ProjectPreview)`
  grid-area: preview;
  align-self: start;
  border: 5px solid #0b0b0b;
  box-shadow: 15px 15px 0px #0b0b0b;
`

export default function SpotiParty() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "projects/spotiparty/preview.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Container>
      <ProjectDetails>
        <Title>{spotiparty.title}</Title>
        <Subtitle>{spotiparty.subtitle}</Subtitle>

        {spotiparty.description
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}

        <Button
          href={spotiparty.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Button>
      </ProjectDetails>

      <Preview fluid={data.file.childImageSharp.fluid} />
    </Container>
  )
}
