import React from "react"
import { styled } from "linaria/react"
import { graphql, useStaticQuery } from "gatsby"

import { revisify } from "../../projects"
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
  background: #253239;
  color: #fefefe;
`

const Button = styled(ProjectButton)`
  padding: calc(16px + var(--font-padding)) 16px 16px;
  font-size: var(--font-s);
  font-weight: 500;
  background-color: #c4105a;
  border-radius: 4px;
  transition: transform 100ms;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }

  &:active {
    transform: scale(1.05);
  }
`

export default function Revisify() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "projects/revisify/preview.png" }) {
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
        <Title>{revisify.title}</Title>
        <Subtitle>{revisify.subtitle}</Subtitle>

        {revisify.description
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}

        <Button href={revisify.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </ProjectDetails>

      <ProjectPreview fluid={data.file.childImageSharp.fluid} />
    </Container>
  )
}
