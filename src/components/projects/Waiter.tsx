import React from "react"
import { styled } from "linaria/react"
import { graphql, useStaticQuery } from "gatsby"

import { waiter } from "../../projects"
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
  background: #26c2d7;
  color: #1b1b1b;
`

const Button = styled(ProjectButton)`
  padding: calc(12px + var(--font-padding)) 12px 12px;
  font-size: var(--font-s);
  font-weight: 500;
  background-color: #ff814f;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: transform 100ms;
  will-change: transform;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05) translateY(-2px);
    }
  }
`

export default function Waiter() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "projects/revisify/preview.png" }) {
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
        <Title>{waiter.title}</Title>
        <Subtitle>{waiter.subtitle}</Subtitle>

        {waiter.description
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}

        <Button href={waiter.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </ProjectDetails>

      <ProjectPreview fluid={data.file.childImageSharp.fluid} />
    </Container>
  )
}
