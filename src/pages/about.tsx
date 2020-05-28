import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import Seo from "../components/Seo"

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(24px, 1fr) minmax(auto, 50ch) minmax(24px, 1fr);
  grid-template-rows: 48px auto 48px;
  grid-template-areas:
    ". .       ."
    ". content ."
    ". .       .";
  font-size: 1.6rem;
`

const Content = styled.div`
  grid-area: content;
  display: grid;
  row-gap: var(--space-m);
`

const Title = styled.h1`
  font-size: 5.6rem;
`

const SubTitle = styled.h1`
  font-size: 2.4rem;
`

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.8rem;
`

export default function AboutPage({ data }) {
  return (
    <>
      <Seo title="About" />
      <Container>
        <Content>
          <Title>About</Title>

          <Image fluid={data.file.childImageSharp.fluid} />

          <SubTitle>
            A simple Google search of “how do websites work” is what started
            everything off.
          </SubTitle>

          <Paragraph>
            Since I was 12, programming has been a fundamental part of my life.
            I learnt web development in dark times when Internet Explorer 8 was
            still popular. I did graphic design too, in fact, I had a couple
            freelance jobs where I would pretend to be an accomplished graphic
            designer.
          </Paragraph>
          <Paragraph>
            I started exploring other areas of programming and soon learnt
            Python. When I was 15, studying for my GCSEs, I decided to use my
            skills to build a study website, Revisify. I worked on the project
            for 2 years, gaining a community of 3000 students before closing it
            down to pursue other interests.
          </Paragraph>
          <Paragraph>
            By the time I closed down Revisify, I began studying Artificial
            Intelligence and Computer Science at the University of Birmingham.
            During my time at university, I learnt a lot about machine learning
            and neural networks. I managed to achieve state-of-the-art results
            in personality classification from text as part of my final year
            project.
          </Paragraph>
          <Paragraph>
            I’ve worked on many more projects since through hackathons,
            self-interests and more. If you’re reading this, I’m probably
            working on something else. When I’m not programming, I love
            powerlifting, playing board games and listening to music.
          </Paragraph>
          <Paragraph>
            As of now, I’ve finished university and have a graduate scheme lined
            up in London. I’m currently really interested in progressive web
            apps and the future of the web. The rest of my story is to be
            continued.
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
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
