import React from 'react'
import styled from "styled-components"

// import HeroBG from "../../images/hero_8918-bg3.jpg"
import { device } from "../media-queries"

const HeroSection = () =>(
  <StyledHeroSection>
    <h1>Welcome to Wieser Brothers</h1>
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
  </StyledHeroSection>
)

export default HeroSection

const StyledHeroSection = styled.section`
  display:grid;
  grid-columns:1fr 1fr;
  background-color: #00573c;
  height: 400px;
  h1 {
    display: block;
    color: #fff;
    
  }
  @media ${device.tablet} {
    
    h1 {

    }
  }
`

const VideoContainer = styled.div`
  display:none;

`




// const StyledHeroSection = styled.div`
//   display: flex;
//   flex-direction:column;
//   justify-content: space-around;
//   height: 500px;
//   background-image: url(${HeroBG});
//   background-size: 100%;
//   background-repeat: no-repeat;
//   background-position-y: bottom;
//   background-color: #00573c;
//   h1 {
//     color:#fff;
//     flex
//   }
//   @media ${device.tablet} {
//     background-position-y: 100%;
//     font-size: 12px;
//   }
//   @media ${device.laptop} {
//     background-position-y: 10%;
//   }
// `
// const VideoContainer = styled.div`
//   display: block;
//   margin-top: 50px;
//   width: 90%;
//   position: relative;
//   padding-bottom: 56.25%;
//   padding-top: 30px;
//   height: 0;
//   overflow: hidden;
//   // border: 1px solid red;
//   iframe,
//   object,
//   embed {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
//   @media ${device.tablet} {
//     // border: 1px solid pink;
//     margin-top: 20px;
//     width: 80%;
//     height: 0;
//     iframe,
//     object,
//     embed {
//       height: 80%;
//     }
//   }
//   @media ${device.laptop} {
//     // border: 1px solid white;
//     width: 60%;
//     iframe,
//     object,
//     embed {
//       height: 60%;
//     }
//   }
// `
