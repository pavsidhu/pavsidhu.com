import Image from "gatsby-image"
import styled from "styled-components"

import BlogPostCard from "./BlogPostCard"
import CodeBlock from "./CodeBlock"
import Header from "./Header"
import Input from "./Input"
import ReadingProgress from "./ReadingProgress"
import Seo from "./Seo"
import TabBar from "./TabBar"
import YouTube from "./YouTube"

export {
  BlogPostCard,
  CodeBlock,
  Header,
  Input,
  ReadingProgress,
  Seo,
  TabBar,
  YouTube
}

export const Title = styled.h1`
  font-size: 4.8rem;
`

export const Subtitle = styled.h2`
  font-size: 2.4rem;
`

export const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
`

export const ProjectContainer = styled.section`
  grid-column: -1 / 1;
  grid-row: -1 / 1;

  /* Ensures content doesn't appear under the project selector */
  padding-top: calc(53px + 2.3rem);

  display: grid;
  grid-template-areas:
    ". .       ."
    ". content ."
    ". .       ."
    ". preview ."
    ". .       .";
  grid-template-columns: var(--space-m) 1fr var(--space-m);
  grid-template-rows: var(--space-s) auto var(--space-m) auto var(--space-m);

  @media (min-width: 800px) {
    grid-template-areas:
      ". .       . .       ."
      ". content . preview ."
      ". .       . .       .";
    grid-template-columns:
      minmax(var(--space-m), 1fr)
      minmax(350px, 60ch)
      minmax(var(--space-m), 1fr)
      minmax(400px, 800px)
      minmax(var(--space-m), 1fr);
    grid-template-rows:
      minmax(var(--space-m), 1fr)
      max-content
      minmax(var(--space-m), 1fr);
  }
`

export const ProjectDetails = styled.div`
  align-self: center;
  justify-self: center;
  grid-area: content;
  max-width: 400px;
  display: grid;
  grid-auto-flow: row;
  gap: var(--space-s);
  z-index: 1;
`

export const ProjectPreview = styled(Image).attrs({ fadeIn: false })`
  grid-area: preview;
  align-self: start;
`

export const ProjectButton = styled.a`
  justify-self: start;
  cursor: pointer;
`
