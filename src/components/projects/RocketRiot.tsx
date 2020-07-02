import React from "react"
import { styled } from "linaria/react"
import { graphql, useStaticQuery } from "gatsby"

import { rocketRiot } from "../../projects"
import stars from "../../images/projects/rocket-riot/stars.svg"
import preview from "../../images/projects/rocket-riot/preview.mp4"
import {
  Title,
  Subtitle,
  Paragraph,
  ProjectButton,
  ProjectContainer,
  ProjectDetails
} from ".."

const Container = styled(ProjectContainer)`
  background: url("${stars}"), linear-gradient(115deg, #001536 0%, #012661 100%);
  color: #fefefe;
`

const Button = styled(ProjectButton)`
  padding: calc(16px + var(--font-padding)) 16px 16px;
  font-size: var(--font-s);
  font-weight: 500;
  background-color: #008a8b;
  border: 8px solid #008a8b33;
  background-clip: padding-box;
  transition: background 100ms;

  @media (hover: hover) {
    &:hover {
      background-color: #019b9d;
    }
  }

  &:active {
    background-color: #019b9d;
  }
`

const Video = styled.video`
  grid-area: preview;
  width: 100%;
  border: 8px solid #fefefe33;
  background: fefefe33;
`

export default function RocketRiot() {
  return (
    <Container>
      <ProjectDetails>
        <Title>{rocketRiot.title}</Title>
        <Subtitle>{rocketRiot.subtitle}</Subtitle>

        {rocketRiot.description
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <Paragraph key={index}>{paragraph}</Paragraph>
          ))}

        <Button
          href={rocketRiot.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Button>
      </ProjectDetails>

      <Video autoPlay={true} loop={true} disableRemotePlayback="true">
        <source src={preview} type="video/mp4" />
      </Video>
    </Container>
  )
}
