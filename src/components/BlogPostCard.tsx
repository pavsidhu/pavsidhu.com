import React, { useRef, useContext } from "react"
import Image, { FluidObject } from "gatsby-image"
import { styled } from "linaria/react"
import { Link, navigate } from "gatsby"

import { BlogPostTransition } from "./Layout"

const Container = styled((props) => <Link {...props} />)`
  display: grid;
  width: 100%;
  grid-template-areas:
    "photo  "
    "meta   "
    "title  "
    "excerpt";
  grid-auto-flow: row;
  gap: var(--space-s);
  align-content: start;
  border-radius: 8px;
  transition: transform 150ms ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.01);
    }
  }
`

const CoverPhoto = styled((props) => <Image {...props} />)`
  grid-area: photo;
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  object-fit: cover;
  border-radius: 8px;
  color: transparent;
`

const Meta = styled.div`
  grid-area: meta;
  display: flex;
  align-items: center;
  font-size: var(--font-xs);
  font-weight: 500;
  color: var(--secondary-text-color);
  padding-top: var(--font-padding);

  p {
    font-family: var(--orkney-font-family);
  }
`

const Divider = styled.span`
  background: var(--line-color);
  padding-bottom: 2px;
  margin: 0 var(--space-s) 3px;
  flex: 1;
`

const Title = styled.p`
  grid-area: title;
  font-size: var(--font-l);
  font-family: var(--orkney-font-family);
  font-weight: 600;
`

const Excerpt = styled.p`
  grid-area: excerpt;
  font-family: var(--system-font-family);
  font-size: var(--font-s);
  line-height: 2.8rem;
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
  const coverPhotoRef = useRef<HTMLDivElement>(null)
  const context = useContext(BlogPostTransition)

  return (
    <Container
      to={"/blog" + props.link}
      onClick={(event: Event) => {
        event.preventDefault()
        const coverPhotoBounds = coverPhotoRef.current?.base.getBoundingClientRect()
        if (coverPhotoBounds) context.setBounds(coverPhotoBounds)
        navigate("/blog" + props.link)
      }}
      data-clickable="square"
    >
      <CoverPhoto
        fluid={props.coverImage.childImageSharp.fluid}
        ref={coverPhotoRef}
      />

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
