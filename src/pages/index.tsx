import React from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"
import { graphql } from "gatsby"

import { BlogPostCard, Seo } from "../components"
import { ReactComponent as TwitterIcon } from "../images/icons/twitter.svg"
import { ReactComponent as GitHubIcon } from "../images/icons/github.svg"
import { ReactComponent as LinkedInIcon } from "../images/icons/linkedin.svg"

const Container = styled.article`
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: min-content 1fr;
    height: 100%;
  }
`

const Intro = styled.div`
  border-bottom: rgba(0, 0, 0, 0.1) 1px solid;
  display: grid;
  padding: var(--space-m);
  row-gap: var(--space-m);
  grid-template-areas:
    "photo  .      greeting"
    "desc   desc   desc    "
    "social social social  ";
  grid-template-columns: min-content var(--space-s) auto;
  grid-template-rows: min-content max-content auto;

  @media (min-width: 500px) and (max-width: 899px) {
    justify-content: center;
    grid-template-areas:
      "photo .    greeting . social"
      "desc  desc desc     . social";
    grid-template-columns: min-content var(--space-s) auto var(--space-m) min-content;
    grid-template-rows: min-content 1fr;
  }

  @media (min-width: 900px) {
    border-bottom: none;
    border-right: var(--line-color) 1px solid;
    height: calc(100vh - var(--header-height));
    position: sticky;
    top: var(--header-height);
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
  font-size: var(--font-xl);

  @media (min-width: 900px) {
    white-space: nowrap;
  }
`

const Description = styled.p`
  grid-area: desc;
  line-height: 2.4rem;
  font-size: var(--font-s);
  font-weight: 400;
  max-width: 35ch;
`

const Highlight = styled.span`
  color: var(--primary-color);
`

const Social = styled.div`
  grid-area: social;
  display: grid;
  grid-auto-flow: column;
  gap: var(--space-s);
  justify-content: start;
  align-content: start;
  transform: translateX(calc(-1 * var(--space-xs)));

  @media (min-width: 500px) {
    transform: none;
    grid-auto-flow: row;
    gap: var(--space-xs);
  }

  @media (min-width: 800px) {
    transform: translateX(calc(-1 * var(--space-xs)));
    width: calc(100% + var(--space-s));
    justify-content: initial;
  }
`

const SocialLink = styled.a`
  display: grid;
  grid-template-areas: "icon";
  grid-template-columns: var(--space-m);
  padding: var(--space-xs);
  border-radius: 50%;

  @media (min-width: 500px) {
    grid-template-columns: var(--space-xl) var(--space-s) 1fr;
    grid-template-areas:
      "icon . label "
      "icon . handle";
    border-radius: 40px;
  }
`

const SocialIcon = styled.svg`
  grid-area: icon;
  width: 100%;
  fill: currentColor;
  align-self: center;
`

const SocialLabel = styled.p`
  display: none;

  @media (min-width: 500px) {
    display: block;
    grid-area: label;
    font-size: var(--font-s);
  }
`

const SocialHandle = styled.p`
  display: none;

  @media (min-width: 500px) {
    display: block;
    grid-area: handle;
    font-size: var(--font-s);
    color: var(--secondary-text-color);
  }
`

const BlogPosts = styled.div`
  justify-self: center;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  gap: var(--space-s);
  padding: var(--space-m);

  /* Max size of 4 blog post cards */
  max-width: calc((300px * 4) + (24px * 3) + (24px * 2));
`

const BlogPostsTitle = styled.h3`
  font-size: var(--font-l);
`

const BlogPostCards = styled.div`
  display: grid;
  gap: var(--space-m);
  justify-items: start;

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
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
              aria-label="Twitter"
              data-clickable="default"
            >
              <SocialIcon as={TwitterIcon} />
              <SocialLabel>Twitter</SocialLabel>
              <SocialHandle>@pav_sidhu</SocialHandle>
            </SocialLink>

            <SocialLink
              href="https://github.com/pavsidhu"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              data-clickable="default"
            >
              <SocialIcon as={GitHubIcon} />
              <SocialLabel>GitHub</SocialLabel>
              <SocialHandle>@pavsidhu</SocialHandle>
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/in/pavsidhu"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              data-clickable="default"
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
                link={node.fields.slug}
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
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
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
    file(relativePath: { eq: "general/profile.jpg" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
