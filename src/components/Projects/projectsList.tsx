import React from "react"

import Bulb from "./Bulb"
import CopBot from "./CopBot"
import DayNote from "./DayNote"
import Revisify from "./Revisify"
import RocketRiot from "./RocketRiot"
import SpotiParty from "./SpotiParty"
import TeaBot from "./TeaBot"
import WhatsTrending from "./WhatsTrending"

const projectsList: IProject[] = [
  {
    id: 0,
    name: "Rocket Riot",
    description: "Turn by turn space game with real time minigames 🚀",
    fullDescription: [
      "As part of a university project, I worked in a team of 6 to build a Java based multiplayer game."
    ],
    link: "https://github.com/rocketriot/game",
    theme: {
      background: "linear-gradient(115deg, #001536 0%, #012661 100%)"
    },
    render: project => <RocketRiot project={project} />
  },
  {
    id: 1,
    name: "Revisify",
    description: "A simple online revision tool 🎓",
    fullDescription: [
      "Labore et consectetur dolore cupidatat laborum ullamco dolore elit veniam non commodo est dolore commodo."
    ],
    link: "https://github.com/pavsidhu/revisify",
    theme: {
      background: "#253239"
    },
    render: project => <Revisify project={project} />
  },
  {
    id: 2,
    name: "Cop Bot",
    description: "Supreme bot for Chrome 🛒",
    fullDescription: [
      "Labore et consectetur dolore cupidatat laborum ullamco dolore elit veniam non commodo est dolore commodo."
    ],
    link: "https://github.com/pavsidhu/cop-bot",
    theme: {
      background: "linear-gradient(to right, #ed6ea0 0%,#ec8c69 100%)"
    },
    render: project => <CopBot project={project} />
  },
  {
    id: 3,
    name: "SpotiParty",
    description: "Queue songs on Spotify with your friends 🎵",
    fullDescription: [
      "Labore et consectetur dolore cupidatat laborum ullamco dolore elit veniam non commodo est dolore commodo."
    ],
    link: "https://github.com/aledjackson/Hackference-2018",
    theme: {
      background: "#39D772"
    },
    render: project => <SpotiParty project={project} />
  },
  {
    id: 4,
    name: "Bulb",
    description: "An alarm app for Android that works with LIFX 💡",
    fullDescription: [
      "Labore et consectetur dolore cupidatat laborum ullamco dolore elit veniam non commodo est dolore commodo."
    ],
    link: "https://github.com/pavsidhu/bulb",
    theme: {
      background: "#180652"
    },
    render: project => <Bulb project={project} />
  },
  {
    id: 5,
    name: "Tea Bot",
    description: "Tea, made simple 🍵",
    fullDescription: [
      "Labore et consectetur dolore cupidatat laborum ullamco dolore elit veniam non commodo est dolore commodo."
    ],
    link: "https://github.com/pavsidhu/tea-bot",
    theme: {
      background: "#16A1A5"
    },
    render: project => <TeaBot project={project} />
  },
  {
    id: 6,
    name: "DayNote",
    description: "Your personal development journal ✏️",
    fullDescription: [
      "Labore et consectetur dolore cupidatat laborum ullamco dolore elit veniam non commodo est dolore commodo."
    ],
    link: "https://github.com/pavsidhu/daynote",
    theme: {
      background: "#FF785A"
    },
    render: project => <DayNote project={project} />
  },
  {
    id: 7,
    name: "What's Trending",
    description: "See what's trending on Twitter via Alexa 🐦",
    fullDescription: [""],
    link: "https://github.com/pavsidhu/whats-trending",
    theme: {
      background: "#00C9FF"
    },
    render: project => <WhatsTrending project={project} />
  }
]

export default projectsList
