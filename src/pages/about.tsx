import React from "react"
import Image from "gatsby-image"
import { styled } from "linaria/react"
import { graphql, Link } from "gatsby"

import { Seo } from "../components"

const Container = styled.article`
  width: 100%;
  max-width: 60ch;
  margin: 0 auto;
  padding: var(--space-xl) var(--space-m) var(--space-m);
  display: grid;
  row-gap: var(--space-m);
  font-size: var(--font-m);
  background: var(--background-color);
`

const Title = styled.h1`
  font-size: var(--font-xxl);
`

const ImageOfMe = styled(Image)`
  border-radius: var(--border-radius);
`

const SubTitle = styled.h1`
  font-size: var(--font-l);
  line-height: 3.2rem;
`

const Paragraph = styled.p`
  font-size: var(--font-m);
  line-height: 3.4rem;
  word-break: break-word;
`

export default function AboutPage({ data }) {
  return (
    <Container>
      <Seo title="About" />

      <Title>About</Title>

      <ImageOfMe fluid={data.file.childImageSharp.fluid} />

      <SubTitle>
        A simple Google search of “how do websites work” is what started
        everything off.
      </SubTitle>

      <Paragraph>
        Programming has been a fundamental part of my life from the age of 12. I
        learnt web development during those dark times when Internet Explorer 8
        was popular and jQuery was at its peak. I picked up graphic design too
        and started freelancing. My clients weren't aware that I was a young
        teenager learning on the job.
      </Paragraph>
      <Paragraph>
        A few years later, I began to explore other areas of programming. Whilst
        studying for my school exams, I used my skills to build a study website
        called <Link to="/projects#revisify">Revisify</Link>. Over a 2 year
        period, Revisify grew into a community of 3000 students. I decided to
        shut the website down in 2017 so I could pursue other interests.
      </Paragraph>
      <Paragraph>
        After finishing school, I went on to achieve a first in Artificial
        Intelligence and Computer Science at the University of Birmingham. I
        learnt a variety of topics including machine learning, neural networks
        and natural language processing. As part of my final year project, I
        built <Link to="/projects#aida">Aida</Link>, a dating chatbot that
        matched users based on their personality. My neural network managed to
        achieve excellent results in personality classification from text.
      </Paragraph>
      <Paragraph>
        I’ve worked on several other projects through hackathons, self-interests
        and university. If you’re reading this, I’m most likely working on
        something new. I'm currently interested in progressive web apps and the
        future of the open web.
      </Paragraph>
      <Paragraph>
        When I'm not behind my computer, you'll find me lifting weights in the
        gym, playing board games or spending time with friends and family.
      </Paragraph>
    </Container>
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
