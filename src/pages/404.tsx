import React from "react"
import { styled } from "linaria/react"
import { Link } from "gatsby"

import { Seo } from "../components"

const Container = styled.article`
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  justify-content: center;
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
  padding: var(--space-s);
  padding-top: calc(var(--font-padding) + var(--space-s));
  border-radius: 40px;
  background: var(--primary-color);
  color: var(--default-text-color);
  font-size: var(--font-s);
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: var(--background-color);
  }
`

export default function NotFoundPage() {
  return (
    <Container>
      <Seo title="404" />
      <Title>Page Not Found</Title>
      <Paragraph>
        There's nothing here, perhaps you'll find what you're looking for back
        home.
      </Paragraph>
      <HomeLink to="/" data-clickable="default">
        Go To Home
      </HomeLink>
      .
    </Container>
  )
}
