import React from "react"
import styled from "styled-components"

import preview from "../../images/tea-bot/preview-1.jpg"
import Project from "../../types/Project"

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
  color: #2b2b2b;
  padding: 12px 18px;
  font-size: 1.6rem;
  background-color: #fefefe;
  border-radius: 8px;
  transition: all 100ms;
  transform-origin: 0% 0%;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`

const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Photo = styled.img`
  height: 80vh;
  max-height: 700px;
`

interface Props {
  project: Project
}

function TeaBot({ project }: Props) {
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

export default TeaBot
