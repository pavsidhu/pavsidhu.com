import React, { useEffect, useState, RefObject } from "react"
import { styled } from "linaria/react"

const ProgressBar = styled.div`
  grid-row: -1 / 1;
  grid-column: -1 / 1;
  z-index: 5;
  height: 4px;
  position: sticky;
  top: 0;
  transform-origin: 0;
  transform: scaleX(0);
  will-change: transform;
  background: var(--primary-color);

  @media (min-width: 800px) {
    top: var(--header-height);
  }
`

interface Props {
  target: RefObject<HTMLElement>
}

export default function ReadingProgress({ target }: Props) {
  const [readingProgress, setReadingProgress] = useState(0)

  function scrollListener() {
    if (!target.current) return

    const totalHeight =
      target.current.clientHeight -
      target.current.offsetTop -
      window.innerHeight
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (windowScrollTop === 0) return setReadingProgress(0)
    if (windowScrollTop > totalHeight) return setReadingProgress(1)

    setReadingProgress(windowScrollTop / totalHeight)
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener)
    return () => window.removeEventListener("scroll", scrollListener)
  }, [])

  return <ProgressBar style={{ transform: `scaleX(${readingProgress})` }} />
}
