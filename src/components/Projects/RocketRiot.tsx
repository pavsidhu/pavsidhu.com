import React from "react"
import styled, { css } from "styled-components"

import stars from "../../images/rocket-riot/stars.svg"
import rocket1 from "../../images/rocket-riot/rocket-1.svg"
import rocket2 from "../../images/rocket-riot/rocket-2.svg"
import rocket3 from "../../images/rocket-riot/rocket-3.svg"
import rocket4 from "../../images/rocket-riot/rocket-4.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url("${stars}");
  background-size: contain;
  background-repeat: repeat;
  position: relative;
`

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.div`
  max-width: 350px;
`

const Name = styled.h2`
  font-size: 5.6rem;
  color: #fefefe;
  margin-bottom: 16px;
`

const Description = styled.h3`
  font-size: 2.4rem;
  color: #fefefe;
  margin-bottom: 16px;
`

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #fefefe;
  margin-bottom: 16px;
`

const Button = styled.a`
  display: inline-block;
  color: #fefefe;
  padding: 16px;
  font-size: 1.6rem;
  background-color: #008a8b;
  border: 8px solid #008a8b33;
  background-clip: padding-box;

  &:hover {
    background-color: #005858;
  }
`
const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`

const Photo = styled.img`
  height: 70vh;
  max-height: 800px;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Rocket = styled.img`
  height: 120px;
  position: absolute;

  ${props => css`
    left: ${props.x};
    top: ${props.y};
    transform: rotate(${props.rotate});
  `}
`

function RocketRiot({ project }) {
  return (
    <Container>
      <Background>
        <Rocket src={rocket1} alt="Rocket 1" x="0" y="90%" rotate="0deg" />
        <Rocket src={rocket2} alt="Rocket 2" x="0" y="0" rotate="90deg" />
        <Rocket src={rocket3} alt="Rocket 3" x="0" y="0" rotate="180deg" />
        <Rocket src={rocket4} alt="Rocket 4" x="0" y="0" rotate="270deg" />
      </Background>

      <TextContainer>
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
      </TextContainer>
      <PhotoContainer />
    </Container>
  )
}

export default RocketRiot
