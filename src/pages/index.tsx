import React from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"
import { Link, graphql } from "gatsby"

import { BlogPostCard, Seo, SocialList } from "../components"
import { ReactComponent as ArrowIcon } from "../images/icons/arrow.svg"
import { ReactComponent as IntroBackgroundSvg } from "../images/general/intro-background.svg"
import { ReactComponent as IntroBackgroundSmallSvg } from "../images/general/intro-background-small.svg"

const Container = styled.article`
  width: 100%;
  padding: var(--space-m) 0;
  display: grid;
  justify-items: center;
  row-gap: var(--space-xxl);
  grid-template-areas:
    ". intro ."
    ". posts .";
  grid-template-columns: var(--space-m) 1fr var(--space-m);
  overflow-x: hidden;
`

const IntroContainer = styled.div`
  min-height: calc(100vh - var(--header-height) - 200px);
  grid-area: intro;
  display: grid;
  place-content: center;
`
const Intro = styled.div`
  @keyframes fade-in {
    from {
      transform: translateY(120px);
      opacity: 0;
    }

    to {
      transform: none;
      opacity: 1;
    }
  }

  display: grid;
  grid-template-areas:
    "photo"
    "title"
    "description"
    "social";
  row-gap: var(--space-s);
  /* place-self: center; */
  justify-items: start;
  align-items: start;
  z-index: 1;

  @media (min-width: 600px) {
    grid-template-areas:
      "photo . title      "
      "photo . description"
      "photo . social     ";
    grid-template-columns: minmax(16rem, 28rem) var(--space-xl) auto;
    row-gap: var(--space-m);
    animation: fade-in 400ms var(--cubic-bezier-bounce) forwards;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--background-color);
  }
`

const Photo = styled(Image)`
  grid-area: photo;
  align-self: center;
  justify-self: center;
  width: 75%;
  max-width: 240px;
  border-radius: var(--border-radius);

  @media (min-width: 600px) {
    width: 100%;
    max-width: initial;
    padding-bottom: 100%;
    height: 0;
  }
`

const Title = styled.h1`
  grid-area: title;
  width: 100%;
  font-size: clamp(100%, var(--font-xl) + 2.5vw, var(--font-xxl));
`

const Description = styled.p`
  grid-area: description;
  font-size: var(--font-m);
  font-weight: 400;
  line-height: 2.8rem;
  max-width: 30ch;

  @media (min-width: 600px) {
    max-width: 35ch;
  }
`

const IntroBackgroundSmall = styled(IntroBackgroundSmallSvg)`
  grid-column: -1 / 1;
  grid-row: 1 / 2;
  height: 100%;
  justify-self: center;
  align-self: end;
  fill: var(--primary-color);
  transform: translateY(var(--space-m));

  @media (min-width: 600px) {
    display: none;
  }
`

const IntroBackground = styled(IntroBackgroundSvg)`
  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  display: none;
  grid-column: -1 / 1;
  grid-row: 1 / 2;
  width: 80rem;
  justify-self: center;
  align-self: center;
  fill: var(--primary-color);
  opacity: 0;
  animation: fade-in 200ms ease-out 300ms forwards;

  @media (min-width: 600px) {
    display: block;
  }
`

const BlogPosts = styled.div`
  grid-area: posts;
  width: 100%;
  display: grid;
  gap: var(--space-m);
  grid-template-areas:
    "blog-title"
    "blog-list"
    "blog-more";
  align-items: center;
  justify-content: center;

  /* Max size of 3 blog post cards */
  max-width: calc((420px * 3) + (24px * 2) + (24px * 2));

  @media (min-width: 600px) {
    grid-template-areas:
      "blog-title blog-more"
      "blog-list  blog-list";
    grid-template-columns: 1fr auto;
  }
`

const BlogPostsTitle = styled.h2`
  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  grid-area: blog-title;
  font-size: var(--font-xl);
  padding-top: var(--font-padding);
  margin-bottom: var(--space-xs);

  @media (min-width: 600px) {
    margin-bottom: 0;
    opacity: 0;
    animation: fade-in 200ms ease-out 300ms forwards;
  }
`

const BlogPostsMore = styled((props) => <Link {...props} />)`
  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  grid-area: blog-more;
  display: flex;
  justify-self: end;
  align-items: center;
  color: var(--primary-text-color);
  padding: var(--space-xs);

  p {
    color: inherit;
    font-family: var(--orkney-font-family);
    font-size: var(--font-m);
    font-weight: 500;
    padding-top: 0.1em;
    margin-right: var(--space-xs);
  }

  svg {
    display: inline;
    fill: currentColor;
    transition: transform 150ms ease-in-out;
  }

  @media (hover: hover) {
    &:hover svg {
      transform: translateX(4px);
    }
  }

  @media (min-width: 600px) {
    opacity: 0;
    animation: fade-in 200ms ease-out 300ms forwards;
  }
`

const BlogPostsList = styled.div`
  grid-area: blog-list;
  display: grid;
  gap: var(--space-l);
  width: 100%;

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`

export default function IndexPage({ data }) {
  return (
    <Container>
      <Seo title="Home" />
      <IntroContainer>
        <Intro>
          <Photo
            fluid={data.file.childImageSharp.fluid}
            width={280}
            height={280}
            loading="eager"
          />
          <Title>Hey, I'm Pav</Title>
          <Description>
            I’m a developer from the UK. I like progressive web apps, neural
            networks and designing user experiences.
          </Description>
          <SocialList />
        </Intro>
      </IntroContainer>

      <IntroBackground />
      <IntroBackgroundSmall />

      <BlogPosts>
        <BlogPostsTitle>Latest Blog Posts</BlogPostsTitle>
        <BlogPostsMore to="/blog" data-clickable="default">
          <p>See More Posts</p>
          <ArrowIcon />
        </BlogPostsMore>

        <BlogPostsList>
          {data.allMdx.edges.map(({ node }, index) => (
            <BlogPostCard
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              coverImage={node.frontmatter.coverImage}
              coverImageAlt={node.frontmatter.coverImageAlt}
              readTime={node.timeToRead}
              excerpt={node.excerpt}
              link={node.fields.slug}
              key={node.frontmatter.title}
              index={index}
              delay={300}
            />
          ))}
        </BlogPostsList>
      </BlogPosts>
    </Container>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "general/profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 280, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMdx(limit: 3, sort: { order: DESC, fields: [frontmatter___date] }) {
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
