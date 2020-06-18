import React from "react"
import { styled } from "linaria/react"
import { Link } from "gatsby"

import { Input, Seo } from "../components"

const Container = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(auto, 600px);
  grid-auto-flow: row;
  justify-content: center;
  padding: var(--space-m);
  row-gap: var(--space-s);
`

const Title = styled.h1`
  font-size: var(--font-xxl);
`

const Paragraph = styled.p`
  font-size: var(--font-s);
  line-height: 3.2rem;
`

const Form = styled.form`
  display: grid;
  grid-template-areas:
    "name   "
    "email  "
    "message"
    "submit ";
  row-gap: var(--space-m);
  column-gap: var(--space-s);

  @media (min-width: 600px) {
    width: 100%;
    grid-template-areas:
      "name    email  "
      "message message"
      "submit  submit ";
  }
`

const SubmitButton = styled.button`
  grid-area: submit;
  justify-self: center;
  padding: var(--space-s);
  padding-top: calc(var(--font-padding) + var(--space-s));
  border-radius: 40px;
  color: var(--primary-color);
  font-size: var(--font-s);
  font-weight: 500;
`

const SuccessContainer = styled.article`
  display: grid;
  justify-items: center;
  align-content: center;
  gap: var(--space-s);
  padding: var(--space-m);
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

  return success ? (
    <SuccessContainer>
      <Title>Thanks</Title>
      <Paragraph>
        I got your message, I'll get back to you as soon as I can!
      </Paragraph>
      <HomeLink to="/" data-clickable="default">
        Go To Home
      </HomeLink>
    </SuccessContainer>
  ) : (
    <Container>
      <Seo title="Contact" />
      <Title>Contact</Title>

      <Paragraph>
        My email is always open if you want a chat. I'll respond as soon as
        possible!
      </Paragraph>

      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/contact/success"
      >
        <Input name="Name" style={{ gridArea: "name" }} required={true} />

        <Input
          name="Email"
          type="email"
          style={{ gridArea: "email" }}
          required={true}
        />

        <Input
          name="Message"
          textarea={true}
          style={{ gridArea: "message" }}
          required={true}
        />

        <input type="hidden" name="form-name" value="contact" />

        <SubmitButton type="submit" data-clickable="default">
          Send Message
        </SubmitButton>
      </Form>
    </Container>
  )
}
