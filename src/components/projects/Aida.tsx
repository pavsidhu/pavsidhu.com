import React from "react"
import { styled } from "linaria/react"
import { graphql, useStaticQuery } from "gatsby"

import { aida } from "../../projects"
import { ReactComponent as HeartSvg } from "../../images/projects/aida/heart.svg"
import {
  Title,
  Subtitle,
  Paragraph,
  ProjectButton,
  ProjectContainer,
  ProjectDetails,
  ProjectPreview
} from ".."

const Container = styled(ProjectContainer)`
  background: #8e92f4;
  color: #1b1b1b;
  overflow-x: hidden;

  @media (min-width: 800px) {
    grid-template-areas:
      ". .       . .       ."
      ". content . preview ."
      ". .       . .       .";
    grid-template-columns:
      minmax(var(--space-m), 2fr)
      minmax(350px, 60ch)
      minmax(var(--space-m), 1fr)
      minmax(300px, max-content)
      minmax(var(--space-m), 2fr);
  }

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(#8e92f4e6, #8e92f4e6);
    background-color: var(--background-color);
    color: #fefefe;
  }
`

const Button = styled(ProjectButton)`
  width: 100%;
  text-align: center;
  color: #424351;
  padding: calc(20px + var(--font-padding)) 20px 20px;
  font-size: var(--font-s);
  font-weight: 500;
  border-radius: 12px;
  background-color: #fefefe;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 18px;
  transition: transform 100ms, box-shadow 100ms;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
    }
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    box-shadow: var(--focus-box-shadow), 0 0 20px rgba(0, 0, 0, 0.2);
  }
`

const Heart = styled(HeartSvg)`
  grid-area: content;
  transform: rotateZ(-10deg);
  height: 80%;
  justify-self: center;
  fill: #fefefe;
  opacity: 0.1;
  user-select: none;
  z-index: 0;
`

const Preview = styled(ProjectPreview)`
  justify-self: center;
  width: 100%;
  max-height: 500px;

  @media (min-width: 800px) {
    max-height: none;
    height: clamp(400px, 100vh, 70vh);
  }
`

export default function Aida() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "projects/aida/preview.png" }) {
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
        <Title>{aida.title}</Title>
        <Subtitle>{aida.subtitle}</Subtitle>

        {aida.description
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}

        <Button href={aida.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </ProjectDetails>

      <Heart />

      <Preview
        fluid={data.file.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      />
    </Container>
  )
}
