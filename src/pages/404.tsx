import React from "react"
import { styled } from "linaria/react"

import { Seo } from "../components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fefefe;
  padding: 24px;
`

const Emoji = styled.p`
  font-size: 8rem;
  line-height: 8rem;
  margin-bottom: 0;
`

const Title = styled.h1`
  font-size: 4.8rem;
  color: #1b1b1b;
  margin-bottom: 16px;
`

const Text = styled.p`
  font-size: var(--font-m);
  color: #1b1b1b;
  text-align: center;
`

export default function NotFoundPage() {
  return (
    <Container>
      <Seo title="404 Are you lost?" />
      <Emoji>️☹️</Emoji>️<Title>Are you lost?</Title>
      <Text>There's nothing here, go back home.</Text>
    </Container>
  )
}
