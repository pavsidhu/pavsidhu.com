import React from "react"
import styled from "styled-components"

import preview from "../../images/daynote/preview.png"
import { size } from "../../styles"
import {
  Description,
  Name,
  Paragraph,
  Text,
  MobileContainer as Container
} from "./common"

const Button = styled.a`
  width: 100%;
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

function DayNote({ project }) {
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

      <Photo src={preview} alt="DayNote app preview" />
    </Container>
  )
}

export default DayNote
