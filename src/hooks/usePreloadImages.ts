import { useEffect, useState } from "react"

export default function usePreloadImages(images: string[]) {
  const allPreloaded = images.map(src => {
    const [isPreloaded, setPreloaded] = useState(false)

    useEffect(() => {
      const image = new Image()
      image.src = src
      image.onload = () => setPreloaded(true)
    })

    return isPreloaded
  })

  return allPreloaded.every(isPreloaded => isPreloaded === true)
}
