import styled, { css } from "styled-components"

interface Props {
  underline?: boolean
}

const Link = styled.a`
  position: relative;
  z-index: 1;
  color: #f05f40;

  ${(props: Props) =>
    props.underline &&
    css`
      &:before {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 0;
        height: 4px;
        z-index: -1;
        transition: width 150ms;
        background-color: #f05f40;
      }

      @media (hover: hover) {
        &:hover:before {
          width: 100%;
        }
      }
    `}
`

Link.defaultProps = {
  underline: true
}

export default Link
