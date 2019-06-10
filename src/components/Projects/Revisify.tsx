import React from "react"
import styled, { css } from "styled-components"

import folders from "../../images/revisify/folders.svg"
import laptop from "../../images/revisify/laptop.svg"
import notepad from "../../images/revisify/notebook.svg"
import preview from "../../images/revisify/preview.png"
import { size } from "../../styles"
import {
  Description,
  Name,
  Paragraph,
  Text,
  WebContainer as Container
} from "./common"

const Button = styled.a`
  color: #fefefe;
  padding: 16px 24px;
  font-size: 1.6rem;
  background-color: #c4105a;
  border-radius: 4px;
  transition: all 80ms;

  &:hover {
    transform: scale(1.05);
  }
`

const Photo = styled.img`
  align-self: center;
  width: 100%;
  max-width: 600px;

  @media (min-width: ${size.medium}) {
    max-width: none;
  }
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Entity = styled.img`
  position: absolute;
  height: 220px;

  ${(props: IEntityProps) => css`
    left: ${props.x};
    top: ${props.y};
  `}
`

interface IEntityProps {
  x: string
  y: string
}

function Revisify({ project }) {
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

      <Photo src={preview} alt="Revisify home page preview" />

      <Background>
        <Entity src={laptop} alt="Laptop" x="2%" y="0%" />
        <Entity src={folders} alt="Folders" x="78%" y="8%" />
        <Entity src={notepad} alt="Notepad" x="22%" y="60%" />
      </Background>
    </Container>
  )
}

export default Revisify
