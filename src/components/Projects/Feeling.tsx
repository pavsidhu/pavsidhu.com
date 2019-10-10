import React from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

import preview from "../../images/feeling/preview.png"
import { projectSpring, size } from "../../styles"
import {
  Description,
  MobileContainer,
  Name,
  Paragraph,
  Text as BaseText
} from "./common"
import Project from "../../types/Project"

const Container = styled(MobileContainer)`
  display: grid;

  @media (min-width: ${size.medium}) {
    grid-template-columns:
      minmax(0, 180px) minmax(340px, 1fr) minmax(0, 56px) minmax(340px, 1fr)
      minmax(0, 180px);
    grid-template-areas: "left-space text space preview right-space";
    grid-gap: 24px;
    max-width: 1600px;
  }
`

const Text = styled(BaseText)`
  color: #1b1b1b;

  @media (min-width: ${size.medium}) {
    grid-area: text;
  }
`

const Button = styled.a`
  color: #1b1b1b;
  padding: 16px;
  font-size: 1.6rem;
  padding: 16px;
  border-radius: 12px;
  background-color: rgba(254, 254, 254, 0.8);
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  @media (hover: hover) {
    &:hover {
      filter: brightness(115%);
    }
  }
`

const Photo = styled(animated.img)`
  align-self: center;
  width: 100%;
  max-width: 350px;
  margin-bottom: 24px;

  @media (min-width: ${size.medium}) {
    grid-area: preview;
    justify-self: start;
    max-width: 500px;
    margin-bottom: 0;
  }
`

interface Props {
  project: Project
}

function Feeling({ project }: Props) {
  const spring = useSpring(projectSpring)

  return (
    <Container
      style={{
        opacity: spring.opacity
      }}
    >
      <Text
        style={{
          transform: spring.yPosition.interpolate(y => `translateY(${y}px)`)
        }}
      >
        <Name>{project.name}</Name>
        <Description>{project.description}</Description>

        {project.fullDescription.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}

        <Button href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </Text>
      <Photo
        src={preview}
        alt="Feeling app preview"
        style={{
          transform: spring.yPosition.interpolate(y => `translateY(${y}px)`)
        }}
      />
    </Container>
  )
}

export default Feeling
