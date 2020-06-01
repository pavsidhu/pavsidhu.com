import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import projects from "../../projects"
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
`

const Button = styled.a`
  justify-self: start;
  padding: 16px;
  font-size: 1.6rem;
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
`

const Preview = styled(ProjectPreview)`
  grid-area: preview;
  align-self: start;
  border: 5px solid #0b0b0b;
  box-shadow: 15px 15px 0px #0b0b0b;
`

const project = projects.find(({ title }) => title === "SpotiParty")

export default function SpotiParty() {
  if (!project) throw Error("Project not found")

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "spotiparty/preview.png" }) {
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
      <ProjectDetails>
        <Title>{project.title}</Title>
        <Subtitle>{project.subtitle}</Subtitle>

        {project.description
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}

        <Button href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </ProjectDetails>

      <Preview fluid={data.file.childImageSharp.fluid} />
    </Container>
  )
}
