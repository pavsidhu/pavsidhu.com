import feelingBackground from "./images/feeling/background.svg"
import feelingPreview from "./images/feeling/preview.png"

import asteroid from "./images/rocket-riot/asteroid.svg"
import planet1 from "./images/rocket-riot/planet-1.svg"
import planet2 from "./images/rocket-riot/planet-2.svg"
import rocket1 from "./images/rocket-riot/rocket-1.svg"
import rocket2 from "./images/rocket-riot/rocket-2.svg"
import rocket3 from "./images/rocket-riot/rocket-3.svg"
import rocketRiotStars from "./images/rocket-riot/stars.svg"

import laptop from "./images/revisify/laptop.svg"
import notepad from "./images/revisify/notebook.svg"
import revisifyPreview from "./images/revisify/preview.png"

import copbotPreview from "./images/copbot/preview.png"

import spotipartyPreview from "./images/spotiparty/preview.png"

import moon from "./images/bulb/moon.svg"
import bulbPreview from "./images/bulb/preview.svg"
import bulbStars from "./images/bulb/stars.svg"

import daynotePreview from "./images/daynote/preview.png"

import echoDot from "./images/whats-trending/echo-dot.png"

const images = [
  feelingPreview,
  feelingBackground,

  asteroid,
  planet1,
  planet2,
  rocket1,
  rocket2,
  rocket3,
  rocketRiotStars,

  laptop,
  notepad,
  revisifyPreview,

  copbotPreview,

  spotipartyPreview,

  moon,
  bulbPreview,
  bulbStars,

  daynotePreview,

  echoDot
]

export default function preloadImages() {
  images.forEach(src => {
    const image = new Image()
    image.src = src
  })
}
