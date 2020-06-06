import React from "react"
import styled from "styled-components"
import TextareaAutosize from "react-textarea-autosize"

import { Seo } from "../components"

const Container = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns:
    minmax(var(--space-m), 1fr)
    minmax(auto, 600px)
    minmax(var(--space-m), 1fr);
  grid-template-rows:
    var(--space-m)
    repeat(3, auto)
    var(--space-m);
  grid-template-areas:
    ". .         ."
    ". title     ."
    ". paragraph ."
    ". form      ."
    ". .         .";
  justify-content: center;
  gap: var(--space-s);
`

const Title = styled.h1`
  grid-area: title;
  font-size: 5.6rem;
`

const Paragraph = styled.p`
  grid-area: paragraph;
  font-size: 1.6rem;
`

const Form = styled.form`
  grid-area: form;
  display: grid;
  grid-template-areas:
    "name   "
    "email  "
    "message"
    "submit ";
  gap: var(--space-s);

  @media (min-width: 600px) {
    width: 100%;
    grid-template-areas:
      "name    email  "
      "message message"
      "submit  submit ";
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  color: #818181;

  &:focus-within {
    color: var(--orange);
  }
`

const NameLabel = styled(Label)`
  grid-area: name;
`
const EmailLabel = styled(Label)`
  grid-area: email;
`

const MessageLabel = styled(Label)`
  grid-area: message;
`

const Input = styled.input`
  margin-top: 4px;
  padding: var(--space-s);
  background: var(--light-grey);
  border-radius: 4px;
  border: none;
  font-size: 1.6rem;
`

const MessageInput = styled(TextareaAutosize)`
  margin-top: 4px;
  padding: var(--space-s);
  background: var(--light-grey);
  border-radius: 4px;
  border: none;
  resize: none;
  font-size: 1.6rem;
`

const SubmitButton = styled.button`
  grid-area: submit;
  justify-self: center;
  padding: var(--space-s);
  padding-top: calc(var(--font-padding) + var(--space-s));
  border-radius: 32px;
  background: var(--light-orange);
  color: var(--orange);
  font: inherit;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
`

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact" />
      <Container>
        <Title>Contact</Title>
        <Paragraph>
          My email is always open if you want a chat. I'll respond as soon as
          possible!
        </Paragraph>

        <Form name="contact" method="POST" data-netlify="true">
          <NameLabel>
            <p>Name*</p>
            <Input type="text" name="name" required={true} />
          </NameLabel>

          <EmailLabel>
            <p>Email*</p>
            <Input type="email" name="email" required={true} />
          </EmailLabel>

          <MessageLabel>
            <p>Message*</p>
            <MessageInput name="Message" required={true} minRows={3} />
          </MessageLabel>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </Container>
    </>
  )
}
