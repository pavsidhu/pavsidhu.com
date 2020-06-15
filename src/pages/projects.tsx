import React, { useState, useRef, useLayoutEffect } from "react"
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

const Container = styled.section`
  height: 100%;
  width: 100%;
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
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  gap: var(--space-xs);
  overflow: scroll;
  scroll-snap-type: x mandatory;
  padding: 8px;
  position: sticky;
  top: var(--space-s);
  border-radius: 40px;
  background: var(--background-color);
  box-shadow: rgba(0, 0, 0, 0.05) 0 0 10px;
  z-index: 5;

  /* Hide scrollbar in firefox */
  overflow: -moz-scrollbars-none;

  /* Hide scrollbar in webkit */
  &::-webkit-scrollbar {
    width: 0 !important;
    display: none;
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
  color: var(--primary-text-color);

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
    background: var(--primary-light-color);
  }

  &:not(.active) {
    @media (hover: hover) {
      &:hover {
        background: var(--hover-color);
      }
    }
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

  function scrollToSelectorItem(index: number) {
    selectorRef.current?.childNodes[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "end"
    })
  }

  function changeIndex(index: number) {
    setProjectIndex(index)
  }

  return (
    <Container>
      <Seo title="Projects" />

      <Selector ref={selectorRef}>
        {projects.map(({ title }, index) => (
          <SelectorItem
            className={index === projectIndex ? "active" : undefined}
            onClick={() => {
              changeIndex(index)
              scrollToSelectorItem(index)
            }}
            key={title}
          >
            {title}
          </SelectorItem>
        ))}
      </Selector>

      <Projects
        index={projectIndex}
        onChangeIndex={(index) => {
          changeIndex(index)
          setTimeout(() => scrollToSelectorItem(index), 0)
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
