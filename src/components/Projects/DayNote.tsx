import React from "react"
import styled from "styled-components"

import preview from "../../images/daynote/preview.png"

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1000px;
`

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.div`
  max-width: 320px;
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
  display: block;
  text-align: center;
  color: black;
  padding: 16px;
  font-size: 1.6rem;
  background-color: #fefefe;
  border-radius: 2px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);

  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
  }
`

const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Photo = styled.img`
  height: 80vh;
  max-height: 750px;
`

function DayNote({ project }) {
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
        <Photo src={preview} alt="DayNote app preview" />
      </PhotoContainer>
    </Container>
  )
}

export default DayNote
