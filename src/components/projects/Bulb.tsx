import React from "react"
import { styled } from "linaria/react"
import { graphql, useStaticQuery } from "gatsby"

import { bulb } from "../../projects"
import stars from "../../images/projects/bulb/stars.svg"
import { ReactComponent as MoonSvg } from "../../images/projects/bulb/moon.svg"
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
  background: url(${stars}) #180652;
  background-size: 30%;
  color: #fefefe;
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
`

const CustomTitle = styled(Title)`
  background: #180652;

  @media (min-width: 800px) {
    background: none;
  }
`

const CustomSubtitle = styled(Subtitle)`
  background: #180652;

  @media (min-width: 800px) {
    background: none;
  }
`

const CustomParagraph = styled(Paragraph)`
  background: #180652;

  @media (min-width: 800px) {
    background: none;
  }
`

const Button = styled(ProjectButton)`
  padding: calc(16px + var(--font-padding)) 16px 16px;
  font-size: var(--font-s);
  border-radius: 4px;
  background: #3c247f;
  transform: background 100ms;

  @media (hover: hover) {
    &:hover {
      background: #452992;
    }
  }

  &:active {
    background: #452992;
  }
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

const Moon = styled(MoonSvg)`
  display: none;
  background: #180652;
  border-radius: 50%;
  width: 100%;

  @media (min-width: 800px) {
    display: block;
    grid-area: content;
    transform: translateY(-50px) translateX(-100px) scale(0.9);
    filter: brightness(0.5);
    z-index: 0;
    justify-self: start;
    align-self: start;
    pointer-events: none;
    user-select: none;
  }
`

export default function Bulb() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "projects/bulb/preview.png" }) {
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
      <Moon />

      <ProjectDetails>
        <CustomTitle>{bulb.title}</CustomTitle>
        <CustomSubtitle>{bulb.subtitle}</CustomSubtitle>

        {bulb.description
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <CustomParagraph key={index}>{paragraph}</CustomParagraph>
          ))}

        <Button href={bulb.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </ProjectDetails>

      <Preview
        fluid={data.file.childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
      />
    </Container>
  )
}
