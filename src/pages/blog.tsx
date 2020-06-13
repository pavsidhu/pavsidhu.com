import React from "react"
import { styled } from "linaria/react"
import { graphql } from "gatsby"

import { BlogPostCard, Seo } from "../components"

const Container = styled.section`
  /* Max size of 4 blog post cards */
  --max-width: calc((300px * 4) + (24px * 3) + (24px * 2));

  width: 100%;

  display: grid;
  grid-template-areas:
    ". .          ."
    ". title      ."
    ". .          ."
    ". blog-posts ."
    ". .          .";
  grid-template-columns:
    minmax(var(--space-s), 1fr)
    minmax(auto, var(--max-width))
    minmax(var(--space-s), 1fr);
  grid-template-rows:
    var(--space-m)
    max-content
    var(--space-s)
    max-content
    var(--space-m);
`

const Title = styled.h1`
  grid-area: title;
  font-size: var(--font-xxl);
`

const BlogPostCards = styled.div`
  grid-area: blog-posts;
  display: grid;
  gap: var(--space-m);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-items: start;
`

export default function BlogPage({ data }) {
  return (
    <>
      <Seo title="Blog" />
      <Container>
        <Title>Blog</Title>

        <BlogPostCards>
          {data.allMdx.edges.map(({ node }) => (
            <BlogPostCard
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              coverImage={node.frontmatter.coverImage}
              coverImageAlt={node.frontmatter.coverImageAlt}
              readTime={node.timeToRead}
              excerpt={node.excerpt}
              link={node.fields.slug}
              key={node.frontmatter.title}
            />
          ))}
        </BlogPostCards>
      </Container>
    </>
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
                fluid(maxWidth: 500) {
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
