import React from "react"

import Bulb from "./Bulb"
import CopBot from "./CopBot"
import Feeling from "./Feeling"
import DayNote from "./DayNote"
import Revisify from "./Revisify"
import RocketRiot from "./RocketRiot"
import SpotiParty from "./SpotiParty"
import WhatsTrending from "./WhatsTrending"
import Project from "../../types/Project"

import rocketRiotBackground from "../../images/rocket-riot/stars.svg"
import bulbBackground from "../../images/bulb/stars.svg"
import feelingBackground from "../../images/feeling/background.svg"

const projectsList: Project[] = [
  {
    id: 0,
    name: "Feeling",
    description: "A smart mood tracking app 🤗",
    fullDescription: [
      "Feeling is a daily journaling app, aiming to increase emotional self-awareness using artificial intelligence.",
      "Users can talk to a chatbot about their day and gain insight into their thoughts and feelings.",
      "Created using Kotlin and Python, Feeling will be available soon."
    ],
    link: "https://github.com/feelingapp",
    theme: {
      background: `url("${feelingBackground}"), #CAEAF8`,
      dark: true
    },
    render: project => <Feeling project={project} />
  },
  {
    id: 1,
    name: "Revisify",
    description: "A simple online revision tool 🎓",
    fullDescription: [
      "Revisify began as a small project to help me prepare for my GCSEs.",
      "Within the space of 2 years it grew into a community of 3000 students and teachers, creating and sharing quizzes with each other."
    ],
    link: "https://github.com/pavsidhu/revisify",
    theme: {
      background: "#253239"
    },
    render: project => <Revisify project={project} />
  },
  {
    id: 2,
    name: "Rocket Riot",
    description: "Turn by turn space game with real time minigames 🚀",
    fullDescription: [
      "As part of a university project, I worked in a team of six to build a Java-based multiplayer game that works over a local network.",
      "Players take in turns moving around a grid with the aim of capturing as many planets as possible through fun minigames."
    ],
    link: "https://github.com/rocketriot/game",
    theme: {
      background: `url("${rocketRiotBackground}"), linear-gradient(115deg, #001536 0%, #012661 100%)`
    },
    render: project => <RocketRiot project={project} />
  },
  {
    id: 3,
    name: "Cop Bot",
    description: "Supreme bot for Chrome 🛒",
    fullDescription: [
      "I built a Chrome extension bot that would automate buying products from Supreme during their weekly drops.",
      "Cop Bot is capable of ordering multiple products in the matter of seconds."
    ],
    link: "https://github.com/pavsidhu/cop-bot",
    theme: {
      background: "linear-gradient(to right, #ed6ea0 0%,#ec8c69 100%)"
    },
    render: project => <CopBot project={project} />
  },
  {
    id: 4,
    name: "SpotiParty",
    description: "Queue songs on Spotify with your friends 🎵",
    fullDescription: [
      "As part of a hackathon project, five friends and I built a tool that lets people collaborate on a Spotify playlist at social events.",
      "Songs can be added to a queue by texting a song name to a mobile number. A server searches for the song and adds it to the playlist."
    ],
    link: "https://github.com/aledjackson/Hackference-2018",
    theme: {
      background: "#39D772"
    },
    render: project => <SpotiParty project={project} />
  },
  {
    id: 5,
    name: "Bulb",
    description: "An alarm app for Android that works with LIFX 💡",
    fullDescription: [
      "In the winter when it’s dark and cold its always harder to get out of bed. I bought a LIFX bulb and discovered their public API.",
      "Using the API, I built an app that gently turns my light on before playing a soothing alarm when I need to get out of bed."
    ],
    link: "https://github.com/pavsidhu/bulb",
    theme: {
      background: `url("${bulbBackground}"), #180652`
    },
    render: project => <Bulb project={project} />
  },
  {
    id: 6,
    name: "DayNote",
    description: "Your personal development journal ✏️",
    fullDescription: [
      "While learning about the benefits of daily journaling I created an app that would keep track of my journal entries.",
      "I built a Google Assistant app that works with the Android app to view and create journal entries as part of competition ran by Google."
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
    fullDescription: [
      "To get a feel for how voice assistants work, I built a small Alexa skill that fetches the latest trending hashtags on Twitter."
    ],
    link: "https://github.com/pavsidhu/whats-trending",
    theme: {
      background: "#00C9FF"
    },
    render: project => <WhatsTrending project={project} />
  }
]

export default projectsList
