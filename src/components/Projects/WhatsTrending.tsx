import React from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

import echoDot from "../../images/whats-trending/echo-dot.png"
import { projectSpring, size } from "../../styles"
import { Description, Name, Paragraph, Text as CommonText } from "./common"
import Project from "../../types/Project"

const Container = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 24px;
  flex: 1;

  @media (min-width: ${size.medium}) {
    padding: 0;
  }
`

const Text = styled(CommonText)`
  flex: 1;
  color: #262626;
`

const Button = styled.a`
  display: inline-block;
  color: #262626;
  padding: 16px;
  font-size: 1.6rem;
  border-radius: 3rem;
  background-color: #ffe033;
  border: 3px solid white;

  @media (hover: hover) {
    &:hover {
      filter: brightness(105%);
    }
  }
`

const PhotoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Photo = styled.img`
  max-height: 250px;
  height: 100%;
  width: 100%;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`

interface Props {
  project: Project
}

function WhatsTrending({ project }: Props) {
  const spring = useSpring(projectSpring)

  return (
    <Container
      style={{
        opacity: spring.opacity,
        transform: spring.yPosition.interpolate(y => `translateY(${y}px)`)
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
      <PhotoContainer>
        <Photo src={echoDot} alt="Echo Dot" />
      </PhotoContainer>
    </Container>
  )
}

export default WhatsTrending
