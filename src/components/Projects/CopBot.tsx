import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import projects from "../../projects"
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
  background: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
  color: #fefefe;
`

const Button = styled(ProjectButton)`
  padding: 16px;
  font-size: 1.6rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: background 100ms;

  @media (hover: hover) {
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`

const project = projects.find(({ title }) => title === "Cop Bot")

export default function CopBot() {
  if (!project) throw Error("Project not found")

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "copbot/preview.png" }) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <Container>
      <ProjectDetails>
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
      </ProjectDetails>

      <ProjectPreview fluid={data.file.childImageSharp.fluid} />
    </Container>
  )
}
