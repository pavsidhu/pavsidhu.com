import React from "react"
import { styled } from "linaria/react"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import { Seo } from "../components"

const Container = styled.article`
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
            Programming has been a fundamental part of my life from the age of
            12. I learnt web development during those dark times when Internet
            Explorer 8 was popular and jQuery was at its peak. I picked up
            graphic design too and started freelancing. My clients weren't aware
            that I was a young teenager learning on the job.
          </Paragraph>
          <Paragraph>
            A few years later, I began to explore other areas of programming.
            Whilst studying for my school exams, I used my skills to build a
            study website called Revisify. Over a 2 year period, Revisify grew
            into a community of 3000 students. I decided to shut the website
            down in 2017 so I could pursue other interests.
          </Paragraph>
          <Paragraph>
            After finishing school, I went on to study Artificial Intelligence
            and Computer Science at the University of Birmingham. I learnt a
            variety of topics including machine learning, neural networks and
            natural language processing. As part of my final year project, I
            built a dating chatbot that matched users based on their
            personality. My neural network managed to achieve state-of-the-art
            results in personality classification from text.
          </Paragraph>
          <Paragraph>
            I’ve worked on several other projects through hackathons,
            self-interests and university. If you’re reading this, I’m most
            likely working on something new. I'm currently interested in
            progressive web apps and the future of the web.
          </Paragraph>
          <Paragraph>
            When I'm not behind my computer, you'll find me lifting weights in
            the gym, playing board games or spending time with friends and
            family.
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
        fluid(maxWidth: 800, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
