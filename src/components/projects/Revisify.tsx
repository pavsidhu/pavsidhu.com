import React from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

import laptop from "../../images/revisify/laptop.svg"
import notepad from "../../images/revisify/notebook.svg"
import preview from "../../images/revisify/preview.png"
import { projectSpring, size } from "../../styles"
import {
  Description,
  Name,
  Paragraph,
  Text as BaseText,
  WebContainer
} from "./common"
import Project from "../../types/Project"

const Container = styled(WebContainer)`
  grid-template-rows: minmax(100px, 20vw) auto;
  padding-bottom: 24px;

  @media (min-width: ${size.medium}) {
    padding: 24px;
    grid-template-columns: minmax(400px, 1fr) 1fr;
    grid-template-rows: minmax(100px, 180px) 1fr minmax(90px, 180px);
    grid-gap: 0;
    grid-column-gap: 24px;
  }
`

const Text = styled(BaseText)`
  @media (min-width: ${size.medium}) {
    align-self: center;
    justify-self: center;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`

const Button = styled.a`
  color: #fefefe;
  padding: 16px 24px;
  font-size: var(--font-s);
  background-color: #c4105a;
  border-radius: 4px;
  transition: all 80ms;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`

const Photo = styled(animated.img)`
  align-self: center;
  width: 100%;
  max-width: 600px;
  object-fit: contain;

  @media (min-width: ${size.medium}) {
    justify-self: center;
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    max-width: none;
  }
`

const Laptop = styled.img`
  justify-self: start;
  height: 100%;
  max-width: 100%;
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;

  @media (min-width: ${size.medium}) {
    margin-left: 24px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`

const NotePad = styled.img`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  justify-self: end;
  height: 100%;
  max-width: 100%;
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

interface Props {
  project: Project
}

export default function Revisify({ project }: Props) {
  const spring = useSpring(projectSpring)

  return (
    <Container
      style={{
        opacity: spring.opacity
      }}
    >
      <Laptop src={laptop} alt="Laptop" />
      <NotePad src={notepad} alt="Notepad" />

      <Text
        style={{
          transform: spring.yPosition.interpolate((y) => `translateY(${y}px)`)
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
        alt="Revisify website preview"
        style={{
          transform: spring.yPosition.interpolate((y) => `translateY(${y}px)`)
        }}
      />
    </Container>
  )
}
