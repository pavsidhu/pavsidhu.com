import React, { useState, useEffect, useRef } from "react"
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

const Navigator = styled(animated.div)`
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

const NavigatorItem = styled(Element)<NavigatorItemProps>`
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

export default function Projects() {
  const [project, setProject] = useState(projectsList[0])
  const [navigatorScrollSpring, setNavigatorScrollSpring] = useSpring(() => ({
    scroll: 0
  }))

  const [scrollSpring, setScrollSpring] = useSpring(() => ({ scroll: 200 }))

  useEffect(() => {
    preloadImages()
  }, [])

  const navigatorRef = useRef<HTMLDivElement>() as React.MutableRefObject<
    HTMLDivElement
  >

  function handleNavigationItemClick(projectId: number) {
    setProject(projectsList[projectId])

    console.log("navigatorRef", navigatorRef.current)

    if (navigatorRef.current) {
      const navigatorItems = Array.from(navigatorRef.current.children)
      const navigatorItemsBeforeSelected = navigatorItems.slice(0, projectId)

      const width = navigatorItemsBeforeSelected.reduce(
        (total, navItem) => total + navItem.scrollWidth,
        0
      )

      const navigatorWidth = navigatorRef.current.offsetWidth - 48
      const selectedNavigatorItemWidth = navigatorItems[projectId].scrollWidth

      const scroll = width - navigatorWidth / 2 + selectedNavigatorItemWidth / 2
      console.log("scroll", scroll)

      // Set scroll spring to current scroll position
      // +1 so the scroll is guaranteed to change so onRest is called
      setNavigatorScrollSpring({
        scroll: navigatorRef.current.scrollLeft + 1,
        config: { duration: 0 },
        onRest: () => {
          setNavigatorScrollSpring({ scroll, config: { tension: 400 } })
          console.log("next scroll")
        }
      })
    }
  }

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
          setScrollSpring({ scroll: isVisible ? 0 : 200 })

          return (
            <Navigator
              ref={navigatorRef}
              scrollLeft={navigatorScrollSpring.scroll}
              style={{
                transform: scrollSpring.scroll.to(
                  scroll => `translateX(${scroll}px)`
                )
              }}
            >
              {projectsList.map(p => (
                <Link to="projects" smooth={true} duration={300} key={p.id}>
                  <NavigatorItem
                    name={p.name}
                    selected={p.id === project.id}
                    dark={project.theme.dark ? "true" : "false"}
                    onClick={() => handleNavigationItemClick(p.id)}
                  >
                    {p.name}
                  </NavigatorItem>
                </Link>
              ))}
            </Navigator>
          )
        }}
      </TrackVisibility>

      {project.render(project)}
    </Container>
  )
}
