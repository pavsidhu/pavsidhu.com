import React from "react"
import { animated, useSpring } from "react-spring"
import { styled } from "linaria/react"

import asteroid from "../../images/rocket-riot/asteroid.svg"
import planet1 from "../../images/rocket-riot/planet-1.svg"
import planet2 from "../../images/rocket-riot/planet-2.svg"
import preview from "../../images/rocket-riot/preview.mp4"
import rocket1 from "../../images/rocket-riot/rocket-1.svg"
import rocket2 from "../../images/rocket-riot/rocket-2.svg"
import rocket3 from "../../images/rocket-riot/rocket-3.svg"
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
  background-size: contain;
  background-repeat: repeat;
  max-width: none;

  @media (min-width: ${size.medium}) {
    padding: 24px;
    grid-template-columns:
      1fr minmax(330px, 1fr) minmax(0, 56px) minmax(350px, auto)
      1fr;
    grid-template-rows: minmax(100px, auto) auto minmax(100px, auto);
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

const VideoContainer = styled.div`
  max-width: 600px;

  @media (min-width: ${size.medium}) {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 4 / 5;
    grid-row: 2 / 3;
    max-width: none;
    width: 100%;
  }
`

const Video = styled(animated.video)`
  border: 8px solid #fefefe33;
  width: 100%;
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
  max-height: 100px;
  transform: rotateZ(240deg);
  margin-right: 40px;

  @media (min-width: ${size.medium}) {
    height: 90%;
    max-height: 100px;
    transform: rotateZ(150deg);
    justify-self: center;
    margin-right: 120px;
    margin-bottom: 32px;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`

const Rocket2 = styled(Entity)`
  justify-self: end;
  align-self: start;
  height: 90%;
  max-height: 100px;
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  transform: rotateZ(240deg);

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

const Rocket3 = styled(Entity)`
  align-self: center;
  justify-self: start;
  margin-left: 20px;
  height: 90%;
  max-height: 100px;
  grid-column: 3 / 5;
  grid-row: 3 / 4;
  transform: rotateZ(340deg);

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

const Asteroid = styled(Entity)`
  justify-self: center;
  align-self: end;
  margin-top: 10px;
  margin-bottom: 20px;
  height: 90%;
  max-height: 100px;
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
  height: 90%;
  margin-left: 80px;
  max-height: 100px;
  grid-column: 3 / 5;
  grid-row: 1 / 2;

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

const Planet2 = styled(Entity)`
  justify-self: center;
  align-self: center;
  margin-bottom: 16px;
  margin-left: 120px;
  height: 90%;
  max-height: 100px;
  grid-column: 4 / 6;
  grid-row: 3 / 4;

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

interface Props {
  project: Project
}

export default function RocketRiot({ project }: Props) {
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

      <VideoContainer>
        <Video
          autoPlay={true}
          loop={true}
          disableremoteplayback="true"
          style={{
            transform: spring.yPosition.interpolate((y) => `translateY(${y}px)`)
          }}
        >
          <source src={preview} type="video/mp4" />
        </Video>
      </VideoContainer>
    </Container>
  )
}
