import React, { useRef, useContext } from "react"
import Image, { FluidObject } from "gatsby-image"
import { styled } from "linaria/react"
import { Link, navigate } from "gatsby"

import { BlogPostTransition } from "./Layout"

const Container = styled((props) => <Link {...props} />)`
  @keyframes fade-in {
    from {
      transform: translateY(80px);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: none;
    }
  }

  background: var(--background-color);
  display: grid;
  width: 100%;
  max-width: 480px;
  justify-self: center;
  grid-auto-flow: row;
  gap: var(--space-s);
  align-content: start;
  border-radius: var(--border-radius);
  transition: transform 80ms ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.025);
    }
  }

  @media (min-width: 720px) {
    animation: fade-in 400ms var(--cubic-bezier-bounce)
      ${(props) => props.index * 50 + props.delay}ms backwards;
  }
`

const CoverPhoto = styled((props) => <Image {...props} />)`
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  object-fit: cover;
  border-radius: var(--border-radius);
  color: transparent;
`

const Meta = styled.div`
  font-size: var(--font-xs);
  font-weight: 500;
  color: var(--secondary-text-color);
  padding-top: var(--font-padding);

  p {
    font-family: var(--orkney-font-family);
  }
`

const Title = styled.p`
  font-size: var(--font-l);
  font-family: var(--orkney-font-family);
  padding-top: var(--font-padding);
  font-weight: 600;
`

const Excerpt = styled.p`
  font-family: var(--system-font-family);
  font-size: var(--font-s);
  line-height: 2.8rem;
`

interface Props {
  title: string
  date: string
  tag: string
  excerpt: string
  coverImage: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  coverImageAlt: string
  link: string
  index: number
  delay?: number
}

export default function BlogPostCard(props: Props) {
  const coverPhotoRef = useRef<HTMLDivElement>(null)
  const context = useContext(BlogPostTransition)

  function handleClick(event: Event) {
    event.preventDefault()

    const coverPhotoBounds = coverPhotoRef.current?.base.getBoundingClientRect()
    if (coverPhotoBounds) context.setBounds(coverPhotoBounds)

    navigate("/blog" + props.link)
  }

  return (
    <Container
      to={"/blog" + props.link}
      onClick={handleClick}
      data-clickable="square"
      index={props.index}
      delay={props.delay || 100}
    >
      <CoverPhoto
        fluid={props.coverImage.childImageSharp.fluid}
        ref={coverPhotoRef}
      />
      <Title>{props.title}</Title>
      <Meta>
        {props.date} • {props.tag}
      </Meta>
      <Excerpt>{props.excerpt}</Excerpt>
    </Container>
  )
}
