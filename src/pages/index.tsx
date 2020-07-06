import React from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"
import { Link, graphql } from "gatsby"

import { BlogPostCard, Seo } from "../components"
import { ReactComponent as TwitterIcon } from "../images/icons/twitter.svg"
import { ReactComponent as GitHubIcon } from "../images/icons/github.svg"
import { ReactComponent as LinkedInIcon } from "../images/icons/linkedin.svg"
import { ReactComponent as ForwardIcon } from "../images/icons/forward.svg"

const Container = styled.article`
  width: 100%;
  padding: var(--space-m);
  display: grid;
  justify-items: center;
  row-gap: var(--space-m);
  grid-template-areas:
    "intro"
    "posts";
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    row-gap: 0;
    grid-template-rows: calc(80vh - var(--header-height)) auto;
  }
`

const Intro = styled.div`
  grid-area: "intro";
  display: grid;
  grid-template-areas:
    "photo"
    "title"
    "description"
    "social";
  row-gap: var(--space-s);
  place-self: center;
  justify-items: start;

  @media (min-width: 600px) {
    grid-template-areas:
      "photo . title      "
      "photo . description"
      "photo . social     ";
    grid-template-columns: 28rem var(--space-xl) auto;
    row-gap: var(--space-m);
  }
`

const Photo = styled(Image)`
  grid-area: photo;
  align-self: center;
  width: 100%;
  max-width: 32rem;
  border-radius: 8px;

  @media (min-width: 600px) {
    padding-bottom: 100%;
    height: 0;
  }
`

const Title = styled.h1`
  grid-area: title;
  width: 100%;
  font-size: clamp(100%, var(--font-l) + 2.5vw, var(--font-xxl));
`

const Description = styled.p`
  grid-area: description;
  font-size: var(--font-m);
  font-weight: 400;
  line-height: 2.8rem;
  max-width: 35ch;
`

const AboutLink = styled((props) => <Link {...props} />)`
  color: var(--primary-color);
  font-weight: 600;
`

const SocialList = styled.div`
  grid-area: social;
  display: grid;
  place-items: start;
  grid-auto-flow: column;
  gap: var(--space-s);
  transform: translateX(calc(-1 * var(--space-xs)));
`

const Social = styled.a`
  padding: var(--space-xs);
  border-radius: 50%;
  display: inline-flex;

  svg {
    width: 40px;
    height: 40px;
    fill: currentColor;
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

  @media (min-width: 500px) {
    grid-template-areas:
      "blog-title blog-more"
      "blog-list  blog-list";
    grid-template-columns: 1fr auto;
  }
`

const BlogPostsTitle = styled.h2`
  grid-area: blog-title;
  font-size: var(--font-xl);
  margin-bottom: var(--space-xs);

  @media (min-width: 500px) {
    margin-bottom: 0;
  }
`

const BlogPostsMore = styled((props) => <Link {...props} />)`
  grid-area: blog-more;
  display: flex;
  justify-self: end;
  align-items: center;
  color: var(--primary-color);

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
      transform: translateX(var(--space-xs));
    }
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

const socials = [
  {
    name: "Twitter",
    link: "https://twitter.com/pav_sidhu",
    renderIcon: () => <TwitterIcon />
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pavsidhu",
    renderIcon: () => <LinkedInIcon />
  },
  {
    name: "GitHub",
    link: "https://github.com/pavsidhu",
    renderIcon: () => <GitHubIcon />
  }
]

export default function IndexPage({ data }) {
  return (
    <Container>
      <Seo title="Home" />
      <Intro>
        <Photo
          fluid={data.file.childImageSharp.fluid}
          width={280}
          height={280}
        />
        <Title>Hey, I'm Pav</Title>
        <Description>
          I’m a developer from the UK. I like progressive web apps, neural
          networks and designing user experiences.{" "}
          <AboutLink to="/about">Learn more</AboutLink>
        </Description>

        <SocialList>
          {socials.map((social) => (
            <Social
              href={social.link}
              target="_blank"
              rel="noopener"
              aria-label={social.name}
              data-clickable="default"
            >
              {social.renderIcon()}
            </Social>
          ))}
        </SocialList>
      </Intro>

      <BlogPosts>
        <BlogPostsTitle>Latest Blog Posts</BlogPostsTitle>
        <BlogPostsMore to="/blog">
          <p>See More</p>
          <ForwardIcon />
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
