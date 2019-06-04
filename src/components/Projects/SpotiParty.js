import React from "react"
import styled from "styled-components"

import preview from "../../images/spotiparty/preview.png"

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
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
  color: black;
  padding: 16px;
  font-size: 1.6rem;
  background-color: #fefefe;
  border: 5px solid #0b0b0b;
  box-shadow: 8px 8px 0px #0b0b0b;
  transition: all 100ms;

  &:hover {
    box-shadow: 12px 12px 0px #0b0b0b;
    transform: translateX(-2px) translateY(-2px) scale(1.03);
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
  border: 5px solid #0b0b0b;
  box-shadow: 15px 15px 0px #0b0b0b;
  position: relative;
  left: 5px;
`

function SpotiParty({ project }) {
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
        <Photo src={preview} />
      </PhotoContainer>
    </Container>
  )
}

export default SpotiParty
