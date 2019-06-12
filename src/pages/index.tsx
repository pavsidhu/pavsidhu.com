import React from "react"

import Intro from "../components/Intro"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Social from "../components/Social"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Intro />
    <Projects />
    <Social />
  </Layout>
)

export default IndexPage
