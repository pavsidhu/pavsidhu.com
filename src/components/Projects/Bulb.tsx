import React from "react"
import styled from "styled-components"

import moon from "../../images/bulb/moon.svg"
import preview from "../../images/bulb/preview.svg"
import stars from "../../images/bulb/stars.svg"
import { size } from "../../styles"
import {
  Description as CommonDescription,
  MobileContainer as Container,
  Name as CommonName,
  Paragraph as CommonParagraph,
  Text
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

const Moon = styled.img`
  width: 180px;
  height: 180px;
  position: absolute;
  left: 40px;
  top: 24px;

  @media (max-width: ${size.medium}) {
    display: none;
  }
`

const Name = styled(CommonName)`
  background-color: #180652;
`

const Description = styled(CommonDescription)`
  background-color: #180652;
`

const Paragraph = styled(CommonParagraph)`
  background-color: #180652;
`

const Button = styled.a`
  color: #fefefe;
  padding: 16px;
  font-size: 1.6rem;
  background-color: #3c247f;
  border-radius: 4px;

  &:hover {
    filter: brightness(115%);
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

function Bulb({ project }) {
  return (
    <Background>
      <Moon src={moon} alt="Moon" />

      <Container>
        <Text>
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
        <Photo src={preview} alt="Bulb app preview" />
      </Container>
    </Background>
  )
}

export default Bulb
