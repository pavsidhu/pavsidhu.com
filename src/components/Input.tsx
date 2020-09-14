import React from "react"
import { styled } from "linaria/react"
import TextareaAutosize from "react-textarea-autosize"

const Container = styled.div`
  width: 100%;
  color: var(--secondary-text-color);
  display: grid;
  grid-auto-flow: row;
  gap: var(--space-xxs);

  &:focus-within {
    color: var(--primary-text-color);

    input,
    textarea {
      box-shadow: var(--focus-box-shadow);
    }
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
  border-radius: var(--border-radius);
  background: #f2f2ef;
  color: var(--default-text-color);
  padding: var(--space-s);
  padding-bottom: calc(var(--space-s) - var(--font-padding));
  font-family: var(--font-family);
  font-size: var(--font-s);
  transition: box-shadow 80ms ease-in-out;

  /* If the field is a textarea */
  resize: none;

  @media (prefers-color-scheme: dark) {
    background: #353535;
  }
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
