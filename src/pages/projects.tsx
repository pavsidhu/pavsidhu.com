import React from "react"
import styled, { css } from "styled-components"
import { Link, navigate } from "gatsby"

import Seo from "../components/Seo"
import projects from "../projects"

import Revisify from "../components/projects/Revisify"
import CopBot from "../components/projects/CopBot"
import SpotiParty from "../components/projects/SpotiParty"
import Bulb from "../components/projects/Bulb"
import DayNote from "../components/projects/DayNote"

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
    ".       .        .      ";
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
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: rgba(0, 0, 0, 0.05) 0 0 10px;
`

const SelectorItem = styled(Link)`
  padding: calc(var(--space-xs) + 0.5rem) var(--space-m) var(--space-xs);
  font-size: 1.8rem;
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

  ${(props: { selected: boolean }) =>
    props.selected
      ? css`
          color: var(--orange);
          background: var(--white);
        `
      : css`
          @media (hover: hover) {
            &:hover {
              background: rgba(255, 255, 255, 0.3);
            }
          }
        `}
        
    /* Account for overflow scroll not including right spacing of child */
    &:last-of-type ::after {
      content: "";
      display: block;
      position: absolute;
      right: -8px;
      width: 1px;
      height: 1px;
    }
  }
`

const toHash = (value: string) => "#" + value.toLowerCase().replace(" ", "")

export default function ProjectsPage({ location }: { location: Location }) {
  function renderProject() {
    switch (location.hash) {
      case "#feeling":
        return <CopBot />

      case "#revisify":
        return <CopBot />

      case "#rocketriot":
        return <CopBot />

      case "#copbot":
        return <CopBot />

      case "#spotiparty":
        return <SpotiParty />

      case "#bulb":
        return <Bulb />

      case "#daynote":
        return <DayNote />

      default:
        navigate("/projects" + toHash(projects[0].title))
    }
  }

  return (
    <>
      <Seo title="Projects" />
      <Container>
        <Selector>
          {projects.map(({ title }) => (
            <SelectorItem
              selected={location.hash === toHash(title)}
              to={"/projects/" + toHash(title)}
              key={title}
            >
              {title}
            </SelectorItem>
          ))}
        </Selector>

        {renderProject()}
      </Container>
    </>
  )
}
