import React from "react"
import { styled } from "linaria/react"
import { graphql } from "gatsby"

import { BlogPostCard, Seo } from "../components"

const Container = styled.article`
  /* Max size of 3 blog post cards */
  --max-width: calc((420px * 3) + (24px * 2) + (24px * 2));

  width: 100%;

  display: grid;
  grid-template-areas:
    ". .          ."
    ". title      ."
    ". .          ."
    ". blog-posts ."
    ". .          .";
  grid-template-columns:
    minmax(var(--space-m), 1fr)
    minmax(auto, var(--max-width))
    minmax(var(--space-m), 1fr);
  grid-template-rows:
    var(--space-xl)
    max-content
    var(--space-s)
    max-content
    var(--space-m);
`

const Title = styled.h1`
  grid-area: title;
  font-size: var(--font-xxl);
  justify-self: start;
`

const BlogPostCards = styled.div`
  grid-area: blog-posts;
  display: grid;
  gap: var(--space-l);
  justify-items: start;

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`

export default function BlogPage({ data }) {
  return (
    <Container>
      <Seo title="Blog" />
      <Title>Blog</Title>

      <BlogPostCards>
        {data.allMdx.edges.map(({ node }, index) => (
          <BlogPostCard
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            coverImage={node.frontmatter.coverImage}
            coverImageAlt={node.frontmatter.coverImageAlt}
            readTime={node.timeToRead}
            excerpt={node.excerpt}
            link={node.fields.slug}
            index={index}
            key={index}
          />
        ))}
      </BlogPostCards>
    </Container>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "Do MMM YYYY")
            coverImage {
              childImageSharp {
                fluid(maxWidth: 300, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            coverImageAlt
          }
          fields {
            slug
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`
