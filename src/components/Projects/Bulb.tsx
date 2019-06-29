import React from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

import usePreloadImages from "../../hooks/usePreloadImages"
import moon from "../../images/bulb/moon.svg"
import preview from "../../images/bulb/preview.svg"
import stars from "../../images/bulb/stars.svg"
import { projectSpring, size } from "../../styles"
import {
  Description as BaseDescription,
  MobileContainer,
  Name as BaseName,
  Paragraph as BaseParagraph,
  Text as BaseText
} from "./common"

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  background-image: url("${stars}");
  background-size: 400px;
  background-repeat: repeat;
  position: relative;
`

const Container = styled(MobileContainer)`
  display: grid;

  @media (min-width: ${size.medium}) {
    grid-template-columns:
      minmax(0, 180px) minmax(400px, 1fr) 56px minmax(200px, 1fr)
      minmax(0, 180px);
    grid-template-areas: "moon text space preview moon-space";
    grid-gap: 24px;
    max-width: 1600px;
  }
`

const Moon = styled.img`
  display: none;

  @media (min-width: ${size.medium}) {
    grid-area: moon;
    display: block;
    width: 100%;
    justify-self: start;
    pointer-events: none;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }
`

const Text = styled(BaseText)`
  @media (min-width: ${size.medium}) {
    grid-area: text;
  }
`

const Name = styled(BaseName)`
  background-color: #180652;
`

const Description = styled(BaseDescription)`
  background-color: #180652;
`

const Paragraph = styled(BaseParagraph)`
  background-color: #180652;
`

const Button = styled.a`
  color: #fefefe;
  padding: 16px;
  font-size: 1.6rem;
  background-color: #3c247f;
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
  max-width: 250px;
  margin-bottom: 24px;

  @media (min-width: ${size.medium}) {
    grid-area: preview;
    justify-self: start;
    max-width: 300px;
  }
`

function Bulb({ project }) {
  const isPreloaded = usePreloadImages([moon, preview, stars])
  const spring = useSpring(projectSpring)

  return (
    isPreloaded && (
      <Background>
        <Container
          style={{
            opacity: spring.opacity
          }}
        >
          <Moon src={moon} alt="Moon" />

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

            <Button
              href="https://github.com/aledjackson/Hackference-2018"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Button>
          </Text>
          <Photo
            src={preview}
            alt="Bulb app preview"
            style={{
              transform: spring.yPosition.interpolate(y => `translateY(${y}px)`)
            }}
          />
        </Container>
      </Background>
    )
  )
}

export default Bulb
