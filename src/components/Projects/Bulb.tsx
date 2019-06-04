import React from "react"
import styled from "styled-components"

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
  color: #fefefe;
  padding: 16px;
  font-size: 1.6rem;
  background-color: #3c247f;
  border-radius: 4px;

  &:hover {
    filter: brightness(115%);
  }
`
const PhotoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
function Bulb({ project }) {
  return (
    <Container>
      <TextContainer>
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
      </TextContainer>
      <PhotoContainer />
    </Container>
  )
}

export default Bulb
