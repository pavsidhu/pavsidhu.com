import React, { useState, useEffect } from "react"
import Media from "react-media"
import TrackVisibility from "react-on-screen"
import { Element, Link } from "react-scroll"
import { animated, useSpring } from "react-spring"
import styled, { css } from "styled-components"

import preloadImages from "../../preloadImages"
import projectsList from "./projectsList"

const Container = styled(Element)`
  display: grid;
  justify-items: center;
  grid-template-rows: auto 1fr;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  ${({ background }: { background: string }) =>
    css`
      background: ${background};
    `};
`

const Navigator = styled(animated.ul)`
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

interface NavigatorItemProps {
  selected: boolean
  dark: string
}

const NavigatorItem = styled.li<NavigatorItemProps>`
  font-size: 1.8rem;
  margin: 0 24px;
  color: #fefefe;
  border-radius: 4px;
  padding: 4px 8px;
  white-space: nowrap;
  cursor: pointer;

  ${props =>
    props.selected &&
    (props.dark === "true"
      ? css`
          background: black;
          color: white;

          @supports (mix-blend-mode: multiply) {
            background: #1b1b1b
            color: white;
            mix-blend-mode:multiply;
          }
      `
      : css`
          background: white;
          color: black;

          @supports (mix-blend-mode: screen) {
            background: white;
            color: black;
            mix-blend-mode: screen;
          }
        `)};

  ${props =>
    !props.selected &&
    props.dark === "true" &&
    css`
      color: #1b1b1b;
    `};
`

function Projects() {
  const [project, setProject] = useState(projectsList[0])
  const [props, set] = useSpring(() => ({
    scroll: 0,
    duration: 2000
  }))

  useEffect(() => {
    preloadImages()
  }, [])

  return (
    <Container background={project.theme.background} name="projects">
      <TrackVisibility
        once={true}
        partialVisibility={true}
        offset={-20}
        style={{
          backgroundColor: project.theme.dark ? "white" : "black",
          mixBlendMode: project.theme.dark ? "multiply" : "screen"
        }}
      >
        {({ isVisible }) => {
          set({ scroll: isVisible ? 0 : 200 })

          return (
            <Media query="(max-width: 599px)">
              {matches => (
                <Navigator
                  style={
                    matches
                      ? {
                          transform: props.scroll.interpolate(
                            scroll => `translateX(${scroll}px)`
                          )
                        }
                      : undefined
                  }
                >
                  {projectsList.map(p => (
                    <Link to="projects" smooth={true} duration={300} key={p.id}>
                      <NavigatorItem
                        selected={p.id === project.id}
                        onClick={() => setProject(projectsList[p.id])}
                        dark={project.theme.dark ? "true" : "false"}
                      >
                        {p.name}
                      </NavigatorItem>
                    </Link>
                  ))}
                </Navigator>
              )}
            </Media>
          )
        }}
      </TrackVisibility>

      {project.render(project)}
    </Container>
  )
}

export default Projects
