import React from "react"
import { styled } from "linaria/react"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import { Seo } from "../components"

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns:
    minmax(var(--space-m), 1fr)
    minmax(auto, 50ch)
    minmax(var(--space-m), 1fr);
  grid-template-rows: var(--space-m) auto var(--space-m);
  grid-template-areas:
    ". .       ."
    ". content ."
    ". .       .";
  font-size: var(--font-m);
`

const Content = styled.div`
  grid-area: content;
  display: grid;
  row-gap: var(--space-m);
`

const Title = styled.h1`
  font-size: var(--font-xxl);
`

const ImageOfMe = styled(Image)`
  border-radius: 4px;
`

const SubTitle = styled.h1`
  font-size: var(--font-l);
`

const Paragraph = styled.p`
  font-size: var(--font-m);
  line-height: 3.2rem;
`

export default function AboutPage({ data }) {
  return (
    <>
      <Seo title="About" />
      <Container>
        <Content>
          <Title>About</Title>

          <ImageOfMe fluid={data.file.childImageSharp.fluid} />

          <SubTitle>
            A simple Google search of “how do websites work” is what started
            everything off.
          </SubTitle>

          <Paragraph>
            Since I was 12, programming has been a fundamental part of my life.
            I learnt web development in dark times when Internet Explorer 8 was
            popular and JQuery was at its peak. I picked up graphic design too,
            in fact, I did some freelance work. My clients weren't aware that I
            was a young teenager learning as I go.
          </Paragraph>
          <Paragraph>
            A few years later, I started exploring other areas of programming
            and came across Python. When I was studying for my high school
            exams, I decided to use my skills to build a study website,
            Revisify. I worked on the project for 2 years, gaining a community
            of 3000 students before closing it down to pursue other interests.
          </Paragraph>
          <Paragraph>
            I studied Artificial Intelligence and Computer Science at the
            University of Birmingham. During my time at university, I learnt a
            lot about machine learning and neural networks. I managed to achieve
            state-of-the-art results in personality classification from text as
            part of my final year project.
          </Paragraph>
          <Paragraph>
            I’ve worked on many other projects through hackathons,
            self-interests and more. If you’re reading this, I’m most likely
            working on something new. When I’m not programming, I love
            powerlifting, playing board games and listening to music.
          </Paragraph>
          <Paragraph>
            As of now, I’ve finished university and have a graduate scheme lined
            up in London. I’m currently interested in progressive web apps and
            the future of the web.
          </Paragraph>
        </Content>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "general/about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
