import React from "react"
import styled, { css } from "styled-components"

import asteroid from "../../images/rocket-riot/asteroid.svg"
import planet1 from "../../images/rocket-riot/planet-1.svg"
import planet2 from "../../images/rocket-riot/planet-2.svg"
import rocket1 from "../../images/rocket-riot/rocket-1.svg"
import rocket2 from "../../images/rocket-riot/rocket-2.svg"
import rocket3 from "../../images/rocket-riot/rocket-3.svg"
import stars from "../../images/rocket-riot/stars.svg"
import preview from "../../images/rocket-riot/preview.gif"

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
  z-index: 1;
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
  justify-content: flex-start;
  z-index: 1;
`

const Photo = styled.img`
  height: 70vh;
  max-height: 360px;
  border: 8px solid rgba(255, 255, 255, 0.05);
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Entity = styled.img`
  position: absolute;

  ${(props: IEntityProps) => css`
    left: ${props.x};
    top: ${props.y};
    transform: rotate(${props.rotate});
  `}
`

interface IEntityProps {
  x: string
  y: string
  rotate: string
}

const Rocket = styled(Entity)`
  height: 120px;
`

const Asteroid = styled(Entity)`
  height: 120px;
`

const Planet = styled(Entity)`
  height: 120px;
`

function RocketRiot({ project }) {
  return (
    <Container>
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
      <PhotoContainer>
        <Photo src={preview} alt="Rocket Riot Preview" />
      </PhotoContainer>

      <Background>
        <Rocket src={rocket1} alt="Rocket 1" x="5%" y="10%" rotate="150deg" />
        <Rocket src={rocket2} alt="Rocket 2" x="90%" y="0" rotate="240deg" />
        <Rocket src={rocket3} alt="Rocket 3" x="85%" y="80%" rotate="340deg" />
        <Asteroid
          src={asteroid}
          alt="Asteroid"
          x="15%"
          y="75%"
          rotate="340deg"
        />
        <Planet src={planet1} alt="Planet 1" x="45%" y="5%" rotate="340deg" />
        <Planet src={planet2} alt="Planet 2" x="55%" y="80%" rotate="340deg" />
      </Background>
    </Container>
  )
}

export default RocketRiot
