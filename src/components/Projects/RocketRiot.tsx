import React from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

import asteroid from "../../images/rocket-riot/asteroid.svg"
import planet1 from "../../images/rocket-riot/planet-1.svg"
import planet2 from "../../images/rocket-riot/planet-2.svg"
import preview from "../../images/rocket-riot/preview.gif"
import rocket1 from "../../images/rocket-riot/rocket-1.svg"
import rocket2 from "../../images/rocket-riot/rocket-2.svg"
import rocket3 from "../../images/rocket-riot/rocket-3.svg"
import stars from "../../images/rocket-riot/stars.svg"
import { projectSpring, size } from "../../styles"
import {
  Description,
  Name,
  Paragraph,
  Text as BaseText,
  WebContainer
} from "./common"

const Container = styled(WebContainer)`
  grid-template-rows: minmax(100px, 20vw) auto;
  padding-bottom: 24px;
  background-image: url("${stars}");
  background-size: contain;
  background-repeat: repeat;

  @media (min-width: ${size.medium}) {
    padding: 24px;
    grid-template-columns: 1fr minmax(350px, 1fr) 1fr auto 1fr;
    grid-template-rows: minmax(100px, 200px) auto minmax(100px, 200px);
    grid-gap: 0;
    grid-column-gap: 24px;
  }
`

const Text = styled(BaseText)`
  @media (min-width: ${size.medium}) {
    align-self: center;
    justify-self: center;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`

const Button = styled.a`
  display: inline-block;
  color: #fefefe;
  padding: 16px;
  font-size: 1.6rem;
  background-color: #008a8b;
  border: 8px solid #008a8b33;
  background-clip: padding-box;

  @media (hover: hover) {
    &:hover {
      background-color: #005858;
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
    grid-column: 4 / 5;
    grid-row: 2 / 3;
    max-width: none;
    width: 100%;
    max-height: 300px;
  }
`

const Entity = styled.img`
  pointer-events: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`

const Rocket1 = styled(Entity)`
  justify-self: end;
  align-self: end;
  height: 90%;
  transform: rotateZ(240deg);
  margin-right: 40px;

  @media (min-width: ${size.medium}) {
    height: 50%;
    transform: rotateZ(150deg);
    justify-self: start;
    margin-right: 0;
    margin-left: 40px;
    margin-bottom: 32px;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`

const Rocket2 = styled(Entity)`
  justify-self: end;
  align-self: start;
  height: 50%;
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  transform: rotateZ(240deg);

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

const Rocket3 = styled(Entity)`
  justify-self: end;
  align-self: center;
  margin-bottom: 16px;
  margin-right: 100px;
  height: 50%;
  grid-column: 4 / 6;
  grid-row: 3 / 4;
  transform: rotateZ(340deg);

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

const Asteroid = styled(Entity)`
  justify-self: center;
  align-self: start;
  margin-top: 40px;
  height: 50%;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  transform: rotateZ(350deg);

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

const Planet1 = styled(Entity)`
  align-self: center;
  justify-self: start;
  height: 50%;
  margin-left: 80px;
  grid-column: 3 / 5;
  grid-row: 1 / 2;

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

const Planet2 = styled(Entity)`
  align-self: center;
  justify-self: start;
  margin-left: 40px;
  height: 50%;
  grid-column: 4 / 5;
  grid-row: 3 / 4;

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

function RocketRiot({ project }) {
  const spring = useSpring(projectSpring)

  return (
    <Container
      style={{
        opacity: spring.opacity
      }}
    >
      <Rocket1 src={rocket1} alt="Rocket 1" />
      <Rocket2 src={rocket2} alt="Rocket 2" />
      <Rocket3 src={rocket3} alt="Rocket 3" />
      <Asteroid src={asteroid} alt="Asteroid" />
      <Planet1 src={planet1} alt="Planet 1" />
      <Planet2 src={planet2} alt="Planet 2" />

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
        alt="Rocket Riot Preview"
        style={{
          transform: spring.yPosition.interpolate(y => `translateY(${y}px)`)
        }}
      />
    </Container>
  )
}

export default RocketRiot
