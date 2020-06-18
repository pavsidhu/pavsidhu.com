import React from "react"
import { styled } from "linaria/react"
import { Link } from "gatsby"

const Container = styled.article`
  display: grid;
  justify-items: center;
  align-content: center;
  gap: var(--space-s);
  padding: var(--space-m);
`

const Title = styled.h1`
  font-size: var(--font-xxl);
`

const Paragraph = styled.p`
  font-size: var(--font-m);
  line-height: 3.2rem;
`

const HomeLink = styled((props) => <Link {...props} />)`
  font-size: var(--font-m);
  color: var(--primary-color);
`
export default function ContactPage() {
  return (
    <Container>
      <Title>Thanks!</Title>
      <Paragraph>
        There's nothing here, perhaps you'll find what you're looking for back
        home.
      </Paragraph>
      <HomeLink to="/" data-clickable="default">
        Go To Home
      </HomeLink>
    </Container>
  )
}