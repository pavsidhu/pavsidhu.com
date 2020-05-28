import React from "react"
import { useSpring } from "react-spring"
import styled from "styled-components"

import preview from "../../images/daynote/preview.png"
import { projectSpring, size } from "../../styles"
import {
  Description,
  MobileContainer as Container,
  Name,
  Paragraph,
  Text
} from "./common"
import Project from "../../types/Project"

const Button = styled.a`
  width: 100%;
  text-align: center;
  color: black;
  padding: 16px;
  font-size: 1.6rem;
  background-color: #fefefe;
  border-radius: 2px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);

  transition: box-shadow 200ms;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
    }
  }
`

const Photo = styled.img`
  align-self: center;
  width: 100%;
  max-width: 250px;
  margin-bottom: 24px;

  @media (min-width: ${size.medium}) {
    justify-self: start;
    max-width: 300px;
  }
`

interface Props {
  project: Project
}

export default function DayNote({ project }: Props) {
  const spring = useSpring(projectSpring)

  return (
    <Container
      style={{
        opacity: spring.opacity,
        transform: spring.yPosition.interpolate((y) => `translateY(${y}px)`)
      }}
    >
      <Text>
        <Name>{project.name}</Name>
        <Description>{project.description}</Description>

        {project.fullDescription.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}

        <Button href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </Text>

      <Photo src={preview} alt="DayNote app preview" />
    </Container>
  )
}
