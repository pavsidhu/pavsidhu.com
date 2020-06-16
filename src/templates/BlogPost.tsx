import React, { useRef, useContext, useLayoutEffect } from "react"
import { styled } from "linaria/react"
import Image from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { BlogPostTransition } from "../components/Layout"
import { Seo, CodeBlock, ReadingProgress } from "../components"

const Container = styled.article`
  width: 100%;
  display: grid;
  grid-template-areas:
    "cover cover   cover"
    ".     content .    "
    ".     .       .    ";
  grid-template-columns: var(--space-m) minmax(0, 1fr) var(--space-m);
  row-gap: var(--space-s);
  justify-content: center;

  @media (min-width: 800px) {
    grid-template-areas:
      ". .       ."
      ". cover   ."
      ". content ."
      ". .       .";
    row-gap: var(--space-m);
  }
`

const CoverImageContainer = styled.div`
  grid-area: cover;
  justify-self: center;
  width: 100%;
  max-width: 50ch;
  font-size: var(--font-m);
`

const CoverImage = styled(Image)`
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  transform-origin: top left;
  will-change: transform;
  color: transparent;

  @media (min-width: 800px) {
    border-radius: 4px;
  }
`

const Content = styled.section`
  grid-area: content;
  justify-self: center;
  width: 100%;
  max-width: 50ch;
  font-size: var(--font-m);
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-s);
`

const Title = styled.h1`
  font-size: var(--font-xl);
`

const Meta = styled.div`
  font-size: var(--font-xs);
  font-weight: 500;
  display: flex;
  align-items: center;
  color: var(--secondary-text-color);
`

const Divider = styled.span`
  background: var(--line-color);
  padding-bottom: 1px;
  margin: 0 var(--space-xs) 1px;
  flex: 1;
`

const components = {
  h2: styled.h2`
    font-size: var(--font-l);
  `,

  p: styled.p`
    font-size: var(--font-m);
    line-height: 3.2rem;
    word-break: break-word;

    figcaption {
      text-align: center;
      font-size: var(--font-s);
      margin-top: 4px;
      color: var(--secondary-text-color);
    }
  `,

  a: styled.a`
    color: var(--primary-color);
    user-select: auto;
  `,

  ul: styled.ul`
    padding: 1.6rem;
  `,

  ol: styled.ol`
    padding: 1.6rem;
  `,

  li: styled.li`
    font-size: var(--font-m);
    line-height: var(--font-xl);

    p {
      display: inline;
    }
  `,

  code: CodeBlock,

  blockquote: styled.blockquote`
    border-left: 4px solid var(--primary-color);
    padding-left: var(--space-s);
    color: var(--secondary-text-color);

    p {
      font-size: var(--font-s);
    }
  `
}

export default function BlogPost({ data: { mdx } }) {
  const containerRef = useRef<HTMLElement>(null)
  const coverImageRef = useRef<HTMLElement>(null)
  const context = useContext(BlogPostTransition)

  useLayoutEffect(() => {
    const image = containerRef.current?.querySelector(".gatsby-image-wrapper")

    if (context.bounds && image) {
      const coverImageRect = image.getBoundingClientRect()

      const deltaX = context.bounds.left - window.scrollX - coverImageRect.left
      const deltaY = context.bounds.top - window.scrollY - coverImageRect.top
      const deltaW = context.bounds.width / coverImageRect.width
      const deltaH = context.bounds.height / coverImageRect.height

      image.animate(
        [
          {
            transform: `
            translate(${deltaX}px, ${deltaY}px)
            scale(${deltaW}, ${deltaH})
          `
          },
          {
            transform: "none"
          }
        ],
        {
          duration: 250,
          delay: 10,
          easing: "ease-in-out",
          fill: "both"
        }
      )

      context.resetBounds()
    }
  })

  return (
    <Container ref={containerRef}>
      <Seo
        title={mdx.frontmatter.title}
        description={mdx.excerpt}
        image={mdx.frontmatter.coverImage.childImageSharp.resize.src}
      />

      <ReadingProgress target={containerRef} />

      <CoverImageContainer>
        <CoverImage
          ref={coverImageRef}
          fluid={mdx.frontmatter.coverImage.childImageSharp.fluid}
          alt={mdx.frontmatter.coverImageAlt}
        />
      </CoverImageContainer>

      <Content>
        <Title>{mdx.frontmatter.title}</Title>

        <Meta>
          <p>{mdx.frontmatter.date}</p>
          <Divider />
          <p>{mdx.timeToRead} Minute Read</p>
        </Meta>

        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Content>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 160)
      timeToRead
      frontmatter {
        title
        date(formatString: "Do MMM YYYY")
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        coverImageAlt
      }
    }
  }
`
