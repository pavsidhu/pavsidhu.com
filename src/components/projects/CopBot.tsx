import React from "react"
import { styled } from "linaria/react"
import { graphql, useStaticQuery } from "gatsby"

import { copBot } from "../../projects"
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

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to right, #ed6ea0e6 0%, #ec8c69e6 100%);
    background-color: var(--background-color);
  }
`

const Button = styled(ProjectButton)`
  padding: calc(16px + var(--font-padding)) 16px 16px;
  font-size: var(--font-s);
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  transition: background 100ms;

  @media (hover: hover) {
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  &:active {
    background: rgba(255, 255, 255, 0.3);
  }
`

export default function CopBot() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "projects/copbot/preview.png" }) {
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
        <Title>{copBot.title}</Title>
        <Subtitle>{copBot.subtitle}</Subtitle>

        {copBot.description
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}

        <Button href={copBot.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </ProjectDetails>

      <ProjectPreview fluid={data.file.childImageSharp.fluid} />
    </Container>
  )
}
