import React, { useState } from "react"
import { Element, Link } from "react-scroll"
import styled, { css } from "styled-components"

import { size } from "../../styles"
import projectsList from "./projectsList"

const Container = styled(Element)`
  display: grid;
  justify-items: center;
  grid-template-rows: auto 1fr;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

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
    <Container theme={project.theme} name="projects">
      <Navigator>
        {projectsList.map(p => (
          <Link to="projects" key={p.id} smooth={true} duration={300}>
            <NavigatorItem
              selected={p.id === project.id}
              onClick={() => setProject(projectsList[p.id])}
            >
              {p.name}
            </NavigatorItem>
          </Link>
        ))}
      </Navigator>

      {project.render(project)}
    </Container>
  )
}

export default Projects
