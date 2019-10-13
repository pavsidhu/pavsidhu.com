import React from "react"

import Intro from "../components/Intro"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Social from "../components/Social"

export default function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />

      <Intro />
      <Projects />
      <Social />
    </Layout>
  )
}
