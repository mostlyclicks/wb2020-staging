import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import HeroBG from "../images/hero_8918-bg3.jpg"
import { device } from "../components/media-queries"


// <iframe
      //   // width="70%"
      //   // height="100%"
      //   src="https://www.youtube.com/embed/gYLQThUxpvQ"
      //   frameborder="0"
      //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      //   allowfullscreen
      // ></iframe>

const IndexPage = () => (
  <Layout>
    <HeroSection>
      <SEO title="Home" />
      <VideoContainer>
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/bC9ipWcYnQc"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </VideoContainer>
    </HeroSection>
    <section>
      <h1 style={{ marginTop: `0px` }}>Home Page</h1>
      <p>Home page content</p>
    </section>
  </Layout>
)

export default IndexPage


const HeroSection = styled.div`
  display: flex;
  justify-content: space-around;
  height: 50vh;
  background-image: url(${HeroBG});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-color: #00573c;

  @media ${device.tablet} {
    background-position-y: 100%;
    font-size: 12px;
    height: 55vh;
  }

  @media ${device.laptop} {
    background-position-y: 10%;
    height: 65vh;
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
  
  border: 1px solid red;

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
    border: 1px solid pink;
    width: 80%;
    height: 0;
    iframe,
    object,
    embed {
      height: 80%;
    }
  }

  @media ${device.laptop} {
    border: 1px solid white;
    width:60%;
    iframe,
    object,
    embed {
      height: 60%;
    }
  }
`

  