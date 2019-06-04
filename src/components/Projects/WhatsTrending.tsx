import React from "react"
import styled from "styled-components"

import echoDot from "../../images/whats-trending/echo-dot.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const Text = styled.div`
  max-width: 350px;
  flex: 1;
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
  border-radius: 3rem;
  background-color: #ffe033;
  border: 3px solid white;

  &:hover {
    filter: brightness(105%);
  }
`

const PhotoContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Photo = styled.img`
  height: 100%;
  max-height: 240px;
`

function WhatsTrending({ project }) {
  return (
    <Container>
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
      <PhotoContainer>
        <Photo src={echoDot} alt="Echo Dot" />
      </PhotoContainer>
    </Container>
  )
}

export default WhatsTrending
