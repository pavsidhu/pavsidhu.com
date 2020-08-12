import React, { useRef, useContext, useLayoutEffect } from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"

import { BlogPostTransition } from "../components/Layout"
import { Seo, CodeBlock, ReadingProgress } from "../components"
import { ReactComponent as ArrowIconSvg } from "../images/icons/arrow.svg"

const Container = styled.article`
  width: 100%;
  display: grid;
  grid-template-areas:
    "cover cover   cover"
    ".     content .    ";
  grid-template-columns: var(--space-xs) minmax(0, 1fr) var(--space-xs);
  row-gap: var(--space-s);
  position: relative;

  @media (min-width: 800px) {
    grid-template-areas:
      ". .       ."
      ". cover   ."
      ". content .";
    row-gap: var(--space-l);
    margin-bottom: -64px;
  }
`

const BackButtonContainer = styled.div`
  grid-area: cover;
  justify-self: center;
  z-index: 1;
  width: 100%;
  max-width: calc(58ch + (2 * var(--space-xl)));
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), transparent);
  padding: var(--space-s) var(--space-xs);
  font-size: var(--font-m);
  font-weight: 500;
  opacity: 0;
  animation: fadeIn 100ms 100ms forwards;
  color: #fefefe;
  pointer-events: none;

  /* Fix for edge */
  position: relative;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @media (min-width: 795px) {
    border-radius: var(--border-radius);
  }

  @media (min-width: 1020px) {
    grid-area: back-button;
    background-image: none;
    padding: var(--space-s);
    position: absolute;
    color: inherit;
    top: 0;
    left: 0;
  }
`

const BackButton = styled.button`
  display: flex;
  align-self: start;
  align-items: center;
  padding: var(--space-xs);
  border-radius: 20px;
  color: inherit;
  fill: currentColor;
  transition: color 100ms;
  pointer-events: auto;

  p {
    font-family: var(--orkney-font-family);
    padding-top: 0.4rem;
    margin-left: var(--space-xs);
  }

  @media (min-width: 1020px) {
    background: var(--background-color);
  }
`

const ArrowIcon = styled(ArrowIconSvg)`
  transform: scaleX(-1);
`

const CoverImageContainer = styled.div`
  grid-area: cover;
  justify-self: center;
  width: 100%;
  max-width: calc(58ch + (2 * var(--space-xl)));
  font-size: var(--font-m);

  /* Fix for edge */
  position: relative;
`

const CoverImage = styled(Image)`
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  transform-origin: top left;
  will-change: transform;
  color: transparent;

  @media (min-width: 795px) {
    border-radius: var(--border-radius);
  }
`

const Content = styled.section`
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

  grid-area: content;
  justify-self: center;
  width: 100%;
  max-width: 58ch;
  padding: var(--space-m) var(--space-s) 0;
  border-radius: var(--border-radius);
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-s);
  position: relative;
  top: -48px;
  font-size: var(--font-m);
  background: var(--background-color);
  animation: fade-in 200ms ease-in-out 50ms backwards;

  @media (min-width: 600px) {
    top: -64px;
    padding: var(--space-m) var(--space-m) 0;
  }
`

const Title = styled.h1`
  font-size: var(--font-xl);
  padding: 0;
`

const Meta = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: var(--font-xs);
    font-weight: 500;
    color: var(--secondary-text-color);
  }
`

const Divider = styled.span`
  background: var(--divider-color);
  padding-bottom: 2px;
  margin: 0 var(--space-xs);
  flex: 1;
`

const components = {
  h2: styled.h2`
    font-size: var(--font-l);
  `,

  p: styled.p`
    font-family: var(--system-font-family);
    font-size: var(--font-m);
    line-height: 3.4rem;
    word-break: break-word;

    figcaption {
      text-align: center;
      font-size: var(--font-s);
      margin-top: 4px;
      color: var(--secondary-text-color);
    }
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

      <ReadingProgress target={containerRef} />

      <BackButtonContainer>
        <BackButton onClick={() => navigate(-1)} data-clickable="default">
          <ArrowIcon />
          <p>Back</p>
        </BackButton>
      </BackButtonContainer>

      <CoverImageContainer>
        <CoverImage
          ref={coverImageRef}
          fluid={mdx.frontmatter.coverImage.childImageSharp.fluid}
          alt={mdx.frontmatter.coverImageAlt}
          loading="eager"
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
