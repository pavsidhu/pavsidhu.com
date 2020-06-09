import React from "react"
import styled from "styled-components"
import TextareaAutosize from "react-textarea-autosize"

const Container = styled.div`
  display: grid;
  color: var(--dark-grey);

  * {
    grid-row: -1 / 1;
    grid-column: -1 / 1;
    line-height: 1;
    padding: 1.5rem;
    height: 5rem;
    font-size: 1.6rem;
  }
`

const Field = styled.input`
  border: none;
  border-bottom: 1px solid var(--dark-grey);

  /* If the field is a textarea */
  font-family: inherit;
  resize: none;

  &::placeholder {
    color: transparent;
    user-select: none;
  }

  &:focus {
    box-shadow: none;
    border-color: var(--orange);
    border-width: 1px;

    & + label {
      color: var(--orange);
    }
  }

  &:focus,
  &:not(:placeholder-shown) {
    & + label {
      transform: translate(0.2rem, -30%) scale(0.8);
    }
  }
`

const Label = styled.label`
  z-index: 1;
  transform-origin: 0 0;
  transition: transform 100ms;
  user-select: none;
  pointer-events: none;
`

interface Props {
  name: string
  type?: string
  required?: boolean
  textarea?: boolean
  style: object
}

export default function Input(props: Props) {
  return (
    <Container style={props.style}>
      <Field
        name={props.name}
        placeholder={props.name}
        type={props.type ? props.name : "text"}
        required={props.required === true}
        as={props.textarea === true ? TextareaAutosize : Field}
      />
      <Label>{props.required === true ? `${props.name}*` : props.name}</Label>
    </Container>
  )
}
