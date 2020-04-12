import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import HomeGrid from "../components/Home/grid-container"
import HeroSection from "../components/Home/hero-section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <MainSection>
      <h1 style={{ marginTop: `0px` }}>Home Page</h1>
      <p>Home page content</p>
      <HomeGrid />
    </MainSection>
  </Layout>
)

export default IndexPage

const MainSection = styled.main`
  background-color:#ededed;
`

  