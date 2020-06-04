import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import { BlogPostCard, Seo } from "../components"
import { ReactComponent as TwitterIcon } from "../images/icons/twitter.svg"
import { ReactComponent as GitHubIcon } from "../images/icons/github.svg"
import { ReactComponent as LinkedInIcon } from "../images/icons/linkedin.svg"

const Container = styled.section`
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: min-content 1fr;
    height: 100%;
  }
`

const Intro = styled.div`
  border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
  display: grid;
  grid-template-areas:
    ".      .      .      .        .      "
    ".      photo  .      greeting .      "
    ".      .      .      .        .      "
    ".      desc   desc   desc     .      "
    ".      .      .      .        .      "
    "social social social social    social"
    ".      .      .      .        .      ";
  grid-template-columns:
    var(--space-m)
    min-content
    var(--space-s)
    auto
    var(--space-m);
  grid-template-rows:
    var(--space-m)
    min-content
    var(--space-m)
    max-content
    var(--space-m)
    auto
    var(--space-m);

  @media (min-width: 500px) and (max-width: 899px) {
    justify-content: center;
    grid-template-areas:
      ". .     .    .        . .      ."
      ". photo .    greeting . social ."
      ". .     .    .        . social ."
      ". desc  desc desc     . social ."
      ". .     .    .        . .      .";
    grid-template-columns:
      var(--space-m)
      min-content
      var(--space-s)
      auto
      var(--space-m)
      min-content
      var(--space-m);
    grid-template-rows:
      var(--space-m)
      min-content
      var(--space-m)
      1fr
      var(--space-m);
  }

  @media (min-width: 900px) {
    border-bottom: none;
    border-right: rgba(0, 0, 0, 0.1) 1px solid;
    position: sticky;
    left: 0;
    top: 0;
  }
`

const ProfilePicture = styled(Image)`
  grid-area: photo;
  align-self: center;
  border-radius: 50%;
  width: 72px;
  height: 75px;
`

const Greeting = styled.h2`
  grid-area: greeting;
  align-self: center;
  font-size: 3.2rem;
  padding-top: 1rem;

  @media (min-width: 900px) {
    white-space: nowrap;
  }
`

const Description = styled.p`
  grid-area: desc;
  line-height: 2.4rem;
  font-size: 1.6rem;
  font-weight: 400;
  max-width: 25ch;
`

const Highlight = styled.span`
  color: var(--orange);
`

const Social = styled.div`
  grid-area: social;
  height: 100%;
  display: flex;
  margin: 0 var(--space-m);

  @media (min-width: 500px) {
    flex-direction: column;
    margin: 0;
  }
`

const SocialLink = styled.a`
  display: grid;
  grid-template-areas: "icon";
  grid-template-columns: var(--space-m);
  grid-template-rows: var(--space-m);
  margin-right: var(--space-m);
  transition: background 100ms, color 100ms;

  @media (min-width: 500px) {
    grid-template-columns: var(--space-xl) var(--space-s) 1fr;
    grid-template-rows: initial;
    grid-template-areas:
      "icon . label "
      "icon . handle";
    margin: 0 var(--space-s) var(--space-xs);
    padding: var(--space-xs) var(--space-s);
    border-radius: 40px;
  }

  @media (hover: hover) {
    &:hover {
      background: var(--light-grey);
    }
  }
`

const SocialIcon = styled.svg`
  grid-area: icon;
  width: 100%;
  height: 100%;
  fill: currentColor;
  align-self: center;
`

const SocialLabel = styled.p`
  display: none;

  @media (min-width: 500px) {
    display: block;
    grid-area: label;
    font-size: 1.6rem;
    padding-top: 0.5rem;
  }
`

const SocialHandle = styled.p`
  display: none;

  @media (min-width: 500px) {
    display: block;
    grid-area: handle;
    font-size: 1.6rem;
    padding-top: 0.5rem;
    color: #adadad;
  }
`

const BlogPosts = styled.div`
  justify-self: center;
  width: 100%;

  /* Max size of 4 blog post cards */
  max-width: calc((300px * 4) + (24px * 3) + (24px * 2));

  display: grid;
  justify-content: center;
  grid-template-areas:
    ". .          ."
    ". title      ."
    ". .          ."
    ". blog-posts ."
    ". .          .";
  grid-template-columns: var(--space-m) 1fr var(--space-m);
  grid-template-rows:
    var(--space-m)
    max-content
    var(--space-m)
    max-content
    var(--space-m);
`

const BlogPostsTitle = styled.h3`
  grid-area: title;
  font-size: 2.4rem;
`

const BlogPostCards = styled.div`
  grid-area: blog-posts;
  display: grid;
  gap: var(--space-l);
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  justify-items: start;
`

export default function IndexPage({ data }) {
  return (
    <>
      <Seo title="Home" />
      <Container>
        <Intro>
          <ProfilePicture fixed={data.file.childImageSharp.fixed} />
          <Greeting>Hey, I'm Pav</Greeting>
          <Description>
            I’m a developer from the UK. I like{" "}
            <Highlight>progressive web apps</Highlight>,{" "}
            <Highlight>neural networks</Highlight> and{" "}
            <Highlight>designing user experiences</Highlight>.
          </Description>

          <Social>
            <SocialLink
              href="https://twitter.com/pav_sidhu"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon as={TwitterIcon} />
              <SocialLabel>Twitter</SocialLabel>
              <SocialHandle>@pav_sidhu</SocialHandle>
            </SocialLink>

            <SocialLink
              href="https://github.com/pavsidhu"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon as={GitHubIcon} />
              <SocialLabel>GitHub</SocialLabel>
              <SocialHandle>@pavsidhu</SocialHandle>
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/in/pavsidhu"
              target="_blank"
              rel="noopener"
            >
              <SocialIcon as={LinkedInIcon} />
              <SocialLabel>LinkedIn</SocialLabel>
              <SocialHandle>@pavsidhu</SocialHandle>
            </SocialLink>
          </Social>
        </Intro>

        <BlogPosts>
          <BlogPostsTitle>Latest Blog Posts</BlogPostsTitle>

          <BlogPostCards>
            {data.allMdx.edges.map(({ node }) => (
              <BlogPostCard
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                coverImage={node.frontmatter.coverImage}
                coverImageAlt={node.frontmatter.coverImageAlt}
                readTime={node.timeToRead}
                excerpt={node.excerpt}
                key={node.frontmatter.title}
              />
            ))}
          </BlogPostCards>
        </BlogPosts>
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
          timeToRead
          excerpt
        }
      }
    }
    file(relativePath: { eq: "general/profile.jpg" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
