import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import projects from "../../projects"

const Container = styled.section`
  grid-column: -1 / 1;
  grid-row: -1 / 1;
  background: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);

  /* Ensures content doesn't appear under the project selector */
  padding-top: calc(85px + 2.3rem);

  display: grid;
  grid-template-areas:
    ". content ."
    ". .       ."
    ". preview ."
    ". .       .";
  grid-template-columns: var(--space-m) 1fr var(--space-m);
  grid-template-rows: auto var(--space-m) auto var(--space-m);

  @media (min-width: 800px) {
    grid-template-areas:
      ". .       . .       ."
      ". content . preview ."
      ". .       . .       .";
    grid-template-columns:
      minmax(var(--space-m), 1fr)
      minmax(350px, 60ch)
      minmax(var(--space-m), 1fr)
      minmax(400px, 800px)
      minmax(var(--space-m), 1fr);
    grid-template-rows:
      minmax(var(--space-m), 1fr)
      max-content
      minmax(var(--space-m), 1fr);
  }
`

const Content = styled.div`
  align-self: center;
  grid-area: content;
  display: grid;
  grid-auto-flow: row;
  gap: var(--space-s);
`

const Title = styled.h2`
  color: var(--white);
  font-size: 4.8rem;
`

const Subtitle = styled.h3`
  color: var(--white);
  font-size: 2.4rem;
`

const Paragraph = styled.p`
  color: var(--white);
  font-size: 1.8rem;
  line-height: 2.8rem;
`

const Button = styled.a`
  justify-self: start;
  padding: 16px;
  font-size: 1.6rem;
  font-weight: 500;
  color: #fefefe;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`

const PhotoPreview = styled(Image)`
  grid-area: preview;
`

const project = projects.find(({ title }) => title === "Cop Bot")

export default function CopBot() {
  if (!project) throw Error("Project not found")

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "copbot/preview.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Content>
        <Title>{project.title}</Title>
        <Subtitle>{project.subtitle}</Subtitle>

        {project.description
          .trim()
          .split("\n")
          .map((paragraph) => (
            <Paragraph>{paragraph}</Paragraph>
          ))}

        <Button href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </Content>

      <PhotoPreview fluid={data.file.childImageSharp.fluid} />
    </Container>
  )
}
