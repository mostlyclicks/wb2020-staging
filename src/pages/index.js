import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import HeroBG from "../images/hero_8918-bg3.jpg"
import { device } from "../components/media-queries"
import GridContainer from "../components/Home/grid-container"

const IndexPage = () => (
  <Layout>
    <HeroSection>
      <SEO title="Home" />
      <VideoContainer>
        <iframe
          title="video"
          width="853"
          height="480"
          src="https://www.youtube.com/embed/bC9ipWcYnQc"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </VideoContainer>
    </HeroSection>
    <MainSection>
      <h1 style={{ marginTop: `0px` }}>Home Page</h1>
      <p>Home page content</p>

      <GridContainer />

    </MainSection>
  </Layout>
)

export default IndexPage


const HeroSection = styled.div`
  display: flex;
  justify-content: space-around;
  height: 500px;
  background-image: url(${HeroBG});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-color: #00573c;
  @media ${device.tablet} {
    background-position-y: 100%;
    font-size: 12px;
  }
  @media ${device.laptop} {
    background-position-y: 10%;
  }
`
const VideoContainer = styled.div`
  display: block;
  margin-top:50px;
  width: 90%;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  // border: 1px solid red;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  @media ${device.tablet} {
    // border: 1px solid pink;
    margin-top:20px;
    width: 80%;
    height: 0;
    iframe,
    object,
    embed {
      height: 80%;
    }
  }
  @media ${device.laptop} {
    // border: 1px solid white;
    width:60%;
    iframe,
    object,
    embed {
      height: 60%;
    }
  }
`
const MainSection = styled.main`
  background-color:#ededed;
`

  