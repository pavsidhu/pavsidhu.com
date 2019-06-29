import React from "react"
import styled from "styled-components"

import { size } from "../styles"
import Link from "./Link"

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

const Source = styled.p`
  flex: 1;

  @media (max-width: ${size.medium}) {
    margin-bottom: 8px;
    text-align: center;
  }
`

const Footer = () => (
  <Container>
    <Source>
      👨🏼‍💻 Source code is available on{" "}
      <Link
        href="https://github.com/pavsidhu/pavsidhu.com"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </Link>
    </Source>

    <p>Made with 💛 by Pav Sidhu</p>
  </Container>
)

export default Footer
