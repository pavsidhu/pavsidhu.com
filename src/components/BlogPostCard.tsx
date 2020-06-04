import React from "react"
import styled from "styled-components"
import Image, { FluidObject } from "gatsby-image"
import { Link } from "gatsby"

const Container = styled(Link)`
  display: grid;
  width: 100%;
  grid-template-areas:
    "photo  "
    "meta   "
    "title  "
    "excerpt";
  grid-template-rows: auto repeat(3, auto);
  gap: var(--space-s);
  align-content: start;
`

const CoverPhoto = styled(Image)`
  grid-area: photo;
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  object-fit: cover;
  border-radius: 4px;
`

const Meta = styled.div`
  grid-area: meta;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #828282;
`

const Divider = styled.span`
  grid-area: divider;
  background: #f1f1f1;
  padding-bottom: 1px;
  margin: 0 var(--space-xs) 1px;
  flex: 1;
`

const Title = styled.p`
  grid-area: title;
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--orange);
`

const Excerpt = styled.p`
  grid-area: excerpt;
  font-size: 1.4rem;
  line-height: 2.4rem;
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
  return (
    <Container to={props.link}>
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
