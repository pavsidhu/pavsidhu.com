import React, { useState, useRef, useLayoutEffect, useEffect } from "react"
import SwipeableViews from "react-swipeable-views"
import { bindKeyboard } from "react-swipeable-views-utils"
import { styled } from "linaria/react"

import { Seo } from "../components"
import Aida from "../components/projects/Aida"
import Bulb from "../components/projects/Bulb"
import CopBot from "../components/projects/CopBot"
import DayNote from "../components/projects/DayNote"
import Revisify from "../components/projects/Revisify"
import RocketRiot from "../components/projects/RocketRiot"
import SpotiParty from "../components/projects/SpotiParty"
import projects from "../projects"

const Container = styled.article`
  display: grid;
  grid-template-rows: var(--space-s) max-content 1fr;
  grid-template-columns:
    minmax(var(--space-s), 1fr)
    auto
    minmax(var(--space-s), 1fr);
  grid-template-areas:
    ".       .        .      "
    ".       selector .      "
    ".       projects .      ";
`

const Selector = styled.div`
  grid-area: selector;
  display: grid;
  grid-auto-flow: column;
  gap: var(--space-xs);
  overflow: scroll;
  scroll-snap-type: x mandatory;
  padding: 8px;
  position: sticky;
  top: var(--space-s);
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: rgba(0, 0, 0, 0.05) 0 0 10px;
  backdrop-filter: blur(8px);
  z-index: 5;

  /* Hide scrollbar in firefox and edge */
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;

  /* Hide scrollbar in webkit */
  &::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    background: rgba(0, 0, 0, 0.5);
  }
`

const SelectorItem = styled.button`
  padding: calc(var(--space-xs) + var(--font-padding)) var(--space-m)
    var(--space-xs);
  font-size: var(--font-m);
  font-weight: 500;
  font-family: inherit;
  white-space: nowrap;
  border-radius: 40px;
  border: none;
  background: none;
  outline: 0;
  scroll-snap-align: center;
  position: relative;
  cursor: pointer;
  color: var(--default-text-color);

  /* Account for overflow scroll not including right spacing of child */
  &:last-child {
    &:after {
      content: "";
      display: block;
      position: absolute;
      right: -8px;
      width: 1px;
      height: 1px;
    }
  }

  &.active {
    color: var(--primary-color);
  }
`

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews)

const Projects = styled(BindKeyboardSwipeableViews)`
  grid-column: -1 / 1;
  grid-row: -1 / 1;

  .react-swipeable-view-container {
    height: calc(100vh - var(--tab-bar-height));
  }

  @media (min-width: 800px) {
    .react-swipeable-view-container {
      height: calc(100vh - var(--header-height));
    }
  }
`

const projectHashes = projects.map(
  ({ title }) => "#" + title.toLowerCase().replace(" ", "")
)

export default function ProjectsPage() {
  const [projectIndex, setProjectIndex] = useState(0)
  const selectorRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!selectorRef.current) return

    document.documentElement.style.setProperty(
      "--project-selector-height",
      selectorRef.current.clientHeight + "px"
    )
  })

  useEffect(() => {
    if (!projectHashes.includes(window.location.hash)) {
      window.location.hash = projectHashes[0]
    } else {
      const index = projectHashes.indexOf(window.location.hash)
      setProjectIndex(index)
      scrollToSelectorItem(index)
    }
  }, [])

  useEffect(() => {
    document
      .querySelectorAll(".react-swipeable-view-container > div")
      .forEach((slide, index) => {
        index !== projectIndex
          ? slide.setAttribute("inert", "")
          : slide.removeAttribute("inert")
      })
  }, [projectIndex])

  function scrollToSelectorItem(index: number) {
    selectorRef.current?.childNodes[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "end"
    })
  }

  return (
    <Container>
      <Seo title="Projects" />

      <Selector ref={selectorRef}>
        {projects.map(({ title }, index) => (
          <SelectorItem
            className={index === projectIndex ? "active" : undefined}
            key={title}
            data-clickable="default"
            onClick={() => {
              setProjectIndex(index)
              scrollToSelectorItem(index)
            }}
          >
            {title}
          </SelectorItem>
        ))}
      </Selector>

      <Projects
        index={projectIndex}
        onChangeIndex={(index) => {
          setProjectIndex(index)
          setTimeout(() => {
            scrollToSelectorItem(index)
          }, 100)
        }}
        onTransitionEnd={() => {
          window.location.hash = projectHashes[projectIndex]
        }}
      >
        <Aida />
        <Revisify />
        <RocketRiot />
        <CopBot />
        <SpotiParty />
        <Bulb />
        <DayNote />
      </Projects>
    </Container>
  )
}
