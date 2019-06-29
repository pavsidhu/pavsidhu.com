import { useEffect, useState } from "react"

import moon from "../images/bulb/moon.svg"
import bulbPreview from "../images/bulb/preview.svg"
import bulbStars from "../images/bulb/stars.svg"
import copbotPreview from "../images/copbot/preview.png"
import daynotePreview from "../images/daynote/preview.png"
import laptop from "../images/revisify/laptop.svg"
import notepad from "../images/revisify/notebook.svg"
import revisifyPreview from "../images/revisify/preview.png"
import asteroid from "../images/rocket-riot/asteroid.svg"
import planet1 from "../images/rocket-riot/planet-1.svg"
import planet2 from "../images/rocket-riot/planet-2.svg"
import rocketRiotPreview from "../images/rocket-riot/preview.gif"
import rocket1 from "../images/rocket-riot/rocket-1.svg"
import rocket2 from "../images/rocket-riot/rocket-2.svg"
import rocket3 from "../images/rocket-riot/rocket-3.svg"
import rocketRiotStars from "../images/rocket-riot/stars.svg"

function usePreloadImage(src: string) {
  const [isPreloaded, setPreloaded] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => setPreloaded(true)
  })

  return isPreloaded
}

function usePreloadImages(images: string[]) {
  const allPreloaded = images.map(src => usePreloadImage(src))

  return allPreloaded.every(isPreloaded => isPreloaded === true)
}

export default function usePreloadAllImages() {
  usePreloadImages([
    moon,
    bulbPreview,
    bulbStars,
    copbotPreview,
    daynotePreview,
    laptop,
    notepad,
    revisifyPreview,
    asteroid,
    planet1,
    planet2,
    rocketRiotPreview,
    rocket1,
    rocket2,
    rocket3,
    rocketRiotStars
  ])
}
