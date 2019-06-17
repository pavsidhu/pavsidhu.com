import React from "react"
import { useSpring } from "react-spring"
import styled from "styled-components"

import preview from "../../images/spotiparty/preview.png"
import { size } from "../../styles"
import {
  Description,
  Name,
  Paragraph,
  Text,
  WebContainer as Container
} from "./common"

const Button = styled.a`
  color: black;
  padding: 16px;
  font-size: 1.6rem;
  background-color: #fefefe;
  border: 5px solid #0b0b0b;
  box-shadow: 8px 8px 0px #0b0b0b;
  transition: all 100ms;
  margin-bottom: 16px;

  &:hover {
    box-shadow: 12px 12px 0px #0b0b0b;
    transform: translateX(-2px) translateY(-2px) scale(1.03);
  }
`

const Photo = styled.img`
  align-self: center;
  width: 100%;
  max-width: 600px;
  border: 5px solid #0b0b0b;
  box-shadow: 15px 15px 0px #0b0b0b;
  margin-bottom: 40px;

  @media (min-width: ${size.medium}) {
    max-width: none;
  }
`

function SpotiParty({ project }) {
  const spring = useSpring({
    opacity: 1,
    yPosition: 0,
    from: {
      opacity: 0,
      yPosition: 50
    },
    duration: 50
  })

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

        {project.fullDescription.map((paragraph: string, index: number) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}

        <Button href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </Text>

      <Photo src={preview} />
    </Container>
  )
}

export default SpotiParty
