import React from "react"
import { styled } from "linaria/react"
import { Link } from "gatsby"

import { Button, Input, Seo, SocialList } from "../components"

const Container = styled.article`
  width: 100%;
  display: grid;
  grid-template-areas:
    "title"
    "paragraph"
    "social"
    "form";
  justify-content: center;
  padding: var(--space-m);
  padding-top: var(--space-xl);
  row-gap: var(--space-s);
  font-size: var(--font-s);

  @media (min-width: 600px) {
    grid-template-areas:
      "title     title"
      "paragraph form"
      "social    form";
    grid-template-columns: minmax(auto, 30ch) minmax(auto, 40ch);
    grid-template-rows: auto min-content 1fr;
    gap: var(--space-m);
  }
`

const Title = styled.h1`
  grid-area: title;
  font-size: var(--font-xxl);
`

const Paragraph = styled.p`
  grid-area: paragraph;
  font-size: var(--font-s);
  line-height: 3.2rem;

  a {
    font-weight: 600;
  }
`

const Form = styled.form`
  grid-area: form;
  display: grid;
  grid-auto-flow: row;
  justify-items: start;
  row-gap: var(--space-m);
  column-gap: var(--space-s);
`

const SubmitButton = styled(Button)`
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

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-m);

  *:not(:last-child) {
    margin-bottom: var(--space-s);
  }
`

const HomeLink = styled((props) => <Link {...props} />)`
  font-size: var(--font-m);
  color: var(--primary-color);
  padding: var(--space-xs);
  padding-top: calc(var(--font-padding) + var(--space-xs));
`

export default function ContactPage({ location }: { location: Location }) {
  const params = new URLSearchParams(location.search)
  const success = params.get("success") === "true"

  if (success) {
    return (
      <SuccessContainer>
        <Title>Thanks</Title>
        <Paragraph>
          I got your message, I'll get back to you as soon as I can!
        </Paragraph>
        <HomeLink to="/" data-clickable="default">
          Go To Home
        </HomeLink>
      </SuccessContainer>
    )
  }

  return (
    <Container>
      <Seo title="Contact" />

      <Title>Contact</Title>

      <Paragraph>
        Feel free to get in touch if you want a chat. Pop me an email at{" "}
        <a href="mailto:pav@pavsidhu.com?subject=Hello%20Pav!">
          pav@pavsidhu.com
        </a>{" "}
        or come say hello on social media.
      </Paragraph>

      <SocialList />

      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/contact?success=true"
      >
        <Input label="Name" placeholder="Michael Lee" required={true} />

        <Input
          label="Email"
          placeholder="hello@example.com"
          required={true}
          type="email"
        />

        <Input
          label="Message"
          placeholder="I wanted to talk about..."
          required={true}
          textarea={true}
        />

        <input type="hidden" name="form-name" value="contact" />

        <SubmitButton type="submit" data-clickable="default">
          Send Message
        </SubmitButton>
      </Form>
    </Container>
  )
}
