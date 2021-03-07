import React, { useRef, useContext, useLayoutEffect } from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { BlogPostTransition } from "../components/Layout"
import { Seo, CodeBlock } from "../components"

const CoverImageContainer = styled.div`
  width: calc(100% + var(--space-m) + var(--space-m));
  margin: calc(-1 * var(--space-m));
  margin-bottom: 0;

  @media (min-width: 700px) {
    width: 100%;
    margin: 0;
  }
`

const CoverImage = styled(Image)`
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  transform-origin: top left;
  will-change: transform;

  @media (min-width: 700px) {
    border-radius: var(--border-radius);
  }
`

const Container = styled.article`
  @keyframes fade-in {
    from {
      transform: translateY(200px);
      opacity: 0;
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-m);

  margin: 0 auto;
  padding: var(--space-m);
  width: 100%;
  max-width: 60ch;

  font-size: var(--font-m);
  background: var(--background-color);

  > :not(${CoverImageContainer}) {
    animation: fade-in 200ms ease-in-out 50ms backwards;
  }
`

const Title = styled.h1`
  font-size: var(--font-xl);
  line-height: 1.6;
  text-align: center;
  padding: 0;
`

const Meta = styled.div`
  text-align: center;
  font-size: var(--font-s);
  font-weight: 500;
  color: var(--secondary-text-color);
`

const components = {
  h2: styled.h2`
    font-size: var(--font-l);
    margin-top: var(--space-m);
  `,

  p: styled.p`
    font-family: var(--system-font-family);
    font-size: var(--font-m);
    line-height: 1.9;
    word-break: break-word;

    figcaption {
      text-align: center;
      font-size: var(--font-s);
      margin-top: 4px;
      color: var(--secondary-text-color);
    }
  `,

  ul: styled.ul`
    padding: 0 1.6rem;
  `,

  ol: styled.ol`
    padding: 0 1.6rem;
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
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    padding: var(--space-s);
    color: var(--secondary-text-color);
    background: rgba(0, 0, 0, 0.025);

    @media (prefers-color-scheme: dark) {
      background: rgba(255, 255, 255, 0.05);
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
          duration: 200,
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

      <CoverImageContainer>
        <CoverImage
          ref={coverImageRef}
          fluid={mdx.frontmatter.coverImage.childImageSharp.fluid}
          alt={mdx.frontmatter.coverImageAlt}
          loading="eager"
        />
      </CoverImageContainer>

      <Title>{mdx.frontmatter.title}</Title>
      <Meta>
        {mdx.frontmatter.date} • {mdx.frontmatter.tag}
      </Meta>

      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
        tag
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200) {
              src
            }
          }
        }
        coverImageAlt
      }
    }
  }
`
