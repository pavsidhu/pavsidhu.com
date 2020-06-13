import React from "react"
import { styled } from "linaria/react"

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

export default function YouTube({ link }: { link: string }) {
  const url = new URL(link)
  const searchParams = new URLSearchParams(url.search)
  const id = searchParams.get("v")

  return (
    <Container>
      <Iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        allowFullScreen={true}
      />
    </Container>
  )
}
