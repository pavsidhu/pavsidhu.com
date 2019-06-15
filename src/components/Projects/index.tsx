import React, { useState } from "react"
import styled, { css } from "styled-components"

import { size } from "../../styles"
import projectsList from "./projectsList"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: 100vh;
  position: relative;

  ${({ theme }) =>
    css`
      background: ${theme.background};
    `};
`

const Navigator = styled.ul`
  margin: 24px;
  display: flex;
  list-style-type: none;
  overflow-y: scroll;
  max-width: 100vw;
`

const NavigatorItem = styled.li`
  font-size: 1.8rem;
  margin: 0 24px;
  color: #fefefe;
  border-radius: 4px;
  padding: 4px 8px;
  white-space: nowrap;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      background: black;
      color: white;

      @supports (mix-blend-mode: screen) {
        background: white;
        color: black;
        mix-blend-mode: screen;
      }
    `};
`

function Projects() {
  const [project, setProject] = useState(projectsList[0])

  return (
    <Container theme={project.theme}>
      <Navigator>
        {projectsList.map(p => (
          <NavigatorItem
            selected={p.id === project.id}
            onClick={() => setProject(projectsList[p.id])}
            key={p.id}
          >
            {p.name}
          </NavigatorItem>
        ))}
      </Navigator>
      {project.render(project)}
    </Container>
  )
}

export default Projects
