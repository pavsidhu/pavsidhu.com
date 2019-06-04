import React from "react"

import Layout from "../components/layout"
import Seo from "../components/Seo"
import Intro from "../components/Intro"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Intro />
    <Projects />
  </Layout>
)

export default IndexPage
