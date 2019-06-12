import React from "react"
import styled from "styled-components"

import { size } from "../styles"

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  padding: 24px;
  font-size: 1.6rem;
  color: #141414;
  width: 100%;

  @media (max-width: ${size.medium}) {
    flex-direction: column;
    align-items: center;
    font-size: 1.4rem;
    padding: 16px;
  }
`

const Source = styled.a`
  flex: 1;

  @media (max-width: ${size.medium}) {
    margin-bottom: 8px;
    text-align: center;
  }
`

const Credit = styled.p``

const Footer = () => (
  <Container>
    <Source href="https://github.com/pavsidhu/pavsidhu.com">
      👨🏼‍💻 Source code is available on GitHub
    </Source>
    <Credit>Made with 💛 by Pav Sidhu</Credit>
  </Container>
)

export default Footer
