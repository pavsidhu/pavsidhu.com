import React from "react"
import { styled } from "linaria/react"
import { graphql, useStaticQuery } from "gatsby"

import { daynote } from "../../projects"
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
  background: #ff785a;
  color: #fefefe;

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
    background: linear-gradient(#ff785ae6, #ff785ae6);
    background-color: var(--background-color);
  }
`

const Button = styled(ProjectButton)`
  width: 100%;
  text-align: center;
  color: black;
  padding: calc(16px + var(--font-padding)) 16px 16px;
  font-size: var(--font-s);
  background-color: #fefefe;
  border-radius: 2px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  transition: box-shadow 200ms;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
    }
  }

  &:active {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
  }

  &:focus {
    box-shadow: var(--focus-box-shadow), 0 0 8px 0 rgba(0, 0, 0, 0.12),
      0 8px 8px 0 rgba(0, 0, 0, 0.24);
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

export default function DayNote() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "projects/daynote/preview.png" }) {
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
        <Title>{daynote.title}</Title>
        <Subtitle>{daynote.subtitle}</Subtitle>

        {daynote.description
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}

        <Button href={daynote.link} target="_blank" rel="noopener noreferrer">
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
