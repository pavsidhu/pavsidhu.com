import React, { useRef, useContext } from "react"
import { styled } from "linaria/react"
import Image, { FluidObject } from "gatsby-image"
import { Link } from "gatsby"
import { navigate } from "@reach/router"

import { BlogPostTransition } from "./Layout"

const Container = styled(
  React.forwardRef((props, ref) => <Link {...props} ref={ref} />)
)`
  display: grid;
  width: 100%;
  grid-template-areas:
    "photo  "
    "meta   "
    "title  "
    "excerpt";
  grid-template-rows: auto repeat(3, auto);
  gap: var(--space-xs);
  align-content: start;
  border-radius: 4px;
  transition: box-shadow 100ms;

  @media (hover: hover) {
    &:hover:not(.active) {
      box-shadow: 0 0 0 100vw var(--hover-color) inset,
        0 0 0 8px var(--hover-color);
    }
  }
`

const CoverPhoto = styled((props) => <Image {...props} />)`
  grid-area: photo;
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  object-fit: cover;
  border-radius: 4px;
  color: transparent;
`

const Meta = styled.div`
  grid-area: meta;
  display: flex;
  align-items: center;
  font-size: var(--font-xxs);
  font-weight: 500;
  color: var(--secondary-text-color);
`

const Divider = styled.span`
  background: var(--line-color);
  padding-bottom: 1px;
  margin: 0 var(--space-xs) 1px;
  flex: 1;
`

const Title = styled.p`
  grid-area: title;
  font-size: var(--font-m);
  font-weight: 500;
  color: var(--primary-color);
  padding: 0;
`

const Excerpt = styled.p`
  grid-area: excerpt;
  font-size: var(--font-xs);
  line-height: 2.4rem;
  padding: 0;
`

interface Props {
  title: string
  date: string
  readTime: string
  excerpt: string
  coverImage: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  coverImageAlt: string
  link: string
}

export default function BlogPostCard(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const context = useContext(BlogPostTransition)

  return (
    <Container
      to={"/blog" + props.link}
      className="clickable"
      ref={containerRef}
      onClick={(event: Event) => {
        event.preventDefault()
        const coverPhoto = containerRef.current?.querySelector(
          ".gatsby-image-wrapper"
        )
        const coverPhotoBounds = coverPhoto?.getBoundingClientRect()
        if (coverPhotoBounds) context.setBounds(coverPhotoBounds)
        navigate("/blog" + props.link)
      }}
    >
      <CoverPhoto fluid={props.coverImage.childImageSharp.fluid} />

      <Meta>
        <p>{props.date}</p>
        <Divider />
        <p>{props.readTime} Minute Read</p>
      </Meta>

      <Title>{props.title}</Title>

      <Excerpt>{props.excerpt}</Excerpt>
    </Container>
  )
}
