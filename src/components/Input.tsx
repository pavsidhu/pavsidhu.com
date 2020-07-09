import React from "react"
import { styled } from "linaria/react"
import TextareaAutosize from "react-textarea-autosize"

const Container = styled.div`
  width: 100%;
  color: var(--secondary-text-color);
  display: grid;
  grid-auto-flow: row;
  gap: var(--space-xxs);

  &:hover,
  &:focus-within {
    color: var(--primary-text-color);
  }
`

const Label = styled.label`
  user-select: none;
  pointer-events: none;
  font-size: var(--font-xs);
  font-weight: 500;
  transition: color 80ms ease-in-out;
`

const Field = styled.input`
  border: none;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.05);
  color: var(--default-text-color);
  padding: var(--space-s);
  font-family: var(--font-family);
  font-size: var(--font-s);

  /* If the field is a textarea */
  resize: none;
`

interface Props {
  label: string
  placeholder: string
  type?: string
  required?: boolean
  textarea?: boolean
  style?: object
}

export default function Input(props: Props) {
  return (
    <Container style={props.style}>
      <Label htmlFor={props.label}>
        {props.label + (props.required === true ? "*" : "")}
      </Label>

      <Field
        name={props.label}
        placeholder={props.placeholder}
        type={props.type || "text"}
        required={props.required === true}
        as={props.textarea === true ? TextareaAutosize : Field}
        id={props.label}
      />
    </Container>
  )
}
