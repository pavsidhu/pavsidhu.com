import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { Seo, CodeBlock, ReadingProgress } from "../components"

const Container = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: var(--space-m) minmax(0, 1fr) var(--space-m);
  grid-template-areas:
    "cover cover   cover"
    ".     title   .    "
    ".     meta    .    "
    ".     content .    "
    ".     .       .    ";
  row-gap: var(--space-s);

  @media (min-width: 800px) {
    grid-template-columns:
      minmax(var(--space-m), 1fr)
      minmax(auto, 600px)
      minmax(var(--space-m), 1fr);
    row-gap: var(--space-m);
  }
`

const CoverImage = styled(Image)`
  grid-area: cover;
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  justify-self: center;
  /* border-radius: 4px; */
`

const Title = styled.h1`
  grid-area: title;
  font-size: 3.2rem;
  /* font-size: 5.6rem; */
`

const Meta = styled.div`
  grid-area: meta;
  font-size: 1.4rem;
  font-weight: 500;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  @media (min-width: 800px) {
    justify-content: start;
    gap: var(--space-m);
  }
`

const Content = styled.section`
  grid-area: content;
  justify-self: center;
  max-width: 700px;
`

const components = {
  h2: styled.h2`
    padding-top: var(--space-l);
    font-size: 2.4rem;
  `,

  p: styled.p`
    &:not(:first-of-type) {
      padding-top: var(--space-s);
    }

    font-size: 1.8rem;
    line-height: 2.8rem;
    word-break: break-word;

    figcaption {
      text-align: center;
      font-size: 1.6rem;
      margin-top: 4px;
    }
  `,

  a: styled.a`
    color: var(--orange);
  `,

  ul: styled.ul`
    list-style-position: inside;
  `,

  li: styled.li`
    padding-top: var(--space-s);
    font-size: 1.8rem;
    line-height: 3.2rem;

    p {
      display: inline;
    }
  `,
  code: CodeBlock
}

export default function BlogPost({ data: { mdx } }) {
  const contentRef = useRef<HTMLElement>(null)

  return (
    <Container ref={contentRef}>
      <Seo title={mdx.frontmatter.title} description={mdx.excerpt} />

      <ReadingProgress target={contentRef} />

      <CoverImage
        fluid={mdx.frontmatter.coverImage.childImageSharp.fluid}
        alt={mdx.frontmatter.coverImageAlt}
      />

      <Title>{mdx.frontmatter.title}</Title>

      <Meta>
        <p>{mdx.frontmatter.date}</p>
        <p>{mdx.timeToRead} Minute Read</p>
      </Meta>

      <Content>
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
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        coverImageAlt
      }
    }
  }
`
