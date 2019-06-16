import React, { useState } from "react"
import styled, { css } from "styled-components"

import projectsList from "./projectsList"

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100vw;
  min-height: 100vh;
  position: relative;

  ${({ theme }) =>
    css`
      background: ${theme.background};
    `};
`

const Navigator = styled.ul`
  display: flex;
  max-width: 100vw;
  padding: 24px;
  list-style-type: none;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const NavigatorItem = styled.li`
  font-size: 1.8rem;
  margin: 0 24px;
  color: #fefefe;
  border-radius: 4px;
  padding: 4px 8px;
  white-space: nowrap;
  cursor: pointer;

  ${(props: INavigatorItemProps) =>
    props.selected &&
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

interface INavigatorItemProps {
  selected: boolean
}

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
