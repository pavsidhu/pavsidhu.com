import React from "react"
import { styled } from "linaria/react"

import Seo from "../components/Seo"

const X = styled.p`
  color: Red;
`

export default function IndexPage() {
  return (
    <>
      <Seo title="Home" />
      <X>hello</X>
    </>
  )
}
