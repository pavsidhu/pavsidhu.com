import React from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"

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
  font-size: var(--font-l);
`

export const Paragraph = styled.p`
  font-size: var(--font-s);
  line-height: 2.8rem;
`

export const ProjectContainer = styled.section`
  height: 100%;
  width: 100vw;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  display: grid;
  grid-template-areas:
    "content"
    "preview";
  grid-template-rows: repeat(2, max-content);
  padding: calc(var(--space-s) + var(--project-selector-height)) var(--space-m)
    0;
  gap: var(--space-m);
  align-items: center;

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

  &:after {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: var(--space-xl);
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

export const ProjectPreview = styled((props) => (
  <Image fadeIn={false} {...props} />
))`
  grid-area: preview;
`

export const ProjectButton = styled.a`
  justify-self: start;
  cursor: pointer;
`
