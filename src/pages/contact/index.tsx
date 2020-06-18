import React from "react"
import { styled } from "linaria/react"

import { Input, Seo } from "../../components"

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

export default function ContactPage() {
  return (
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
        <Input name="Name" style={{ gridArea: "name" }} />

        <Input name="Email" type="email" style={{ gridArea: "email" }} />

        <Input name="Message" textarea={true} style={{ gridArea: "message" }} />

        <input type="hidden" name="form-name" value="contact" />

        <SubmitButton type="submit" data-clickable="default">
          Send Message
        </SubmitButton>
      </Form>
    </Container>
  )
}
