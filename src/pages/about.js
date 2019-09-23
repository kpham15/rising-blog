import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>This is the About page</h1>
    <p>About the team here</p>
    <Card></Card>
  </Layout>
)

export default About
