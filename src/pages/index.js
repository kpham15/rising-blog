import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import RisingLogo from "../images/risinglogo.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is the Home page</h1>
    <img src={RisingLogo} alt=""></img>
  </Layout>
)

export default IndexPage
