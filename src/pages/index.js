import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import HomeGrid from "../components/Home/grid-container"
import HeroSection from "../components/Home/hero-section"
import block1 from '../images/1JeffBrian2017.jpeg'
import HeroBG from "../images/hero_8918-bg3.jpg"
import { device } from "../components/media-queries"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <MainSection>

      <WeiserBrothersSection>
        <img src={block1} alt="Wieser Brothers" />
        <p>Wieser Brothers General Contractor, Inc. is a family-owned and operated firm based in La Crescent, MN. Founded in 1994 by Jeff and Brian Wieser, the company has grown into a full-service, integrated 130 plus person team that includes journeyman carpenters, certified concrete finishers, trained steel erectors, skilled field superintendents and professional project managers, all dedicated to delivering quality construction services.</p>
      </WeiserBrothersSection>
      <HomeGrid />
    </MainSection>
  </Layout>
)

export default IndexPage

const MainSection = styled.main`
  width:100%;
  // background-image:url(${HeroBG});
  background-repeat:no-repeat;
  background-size:cover;
  background-position-y:bottom;
  margin-top:380px;
 
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#00573c+0,003813+100 */
background: #00573c; /* Old browsers */
background: -moz-radial-gradient(center, ellipse cover,  #00573c 0%, #003813 100%); /* FF3.6-15 */
background: -webkit-radial-gradient(center, ellipse cover,  #00573c 0%,#003813 100%); /* Chrome10-25,Safari5.1-6 */
background: radial-gradient(ellipse at center,  #00573c 0%,#003813 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00573c', endColorstr='#003813',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  height: 100%;
`
const WeiserBrothersSection = styled.section`
  
  color:#bcbcbc;
  display:flex;
  flex-direction:column;
  padding-top:40px;
  padding-bottom:40px;
  margin-bottom:0px;
  img {
    width:90%;
    margin:0 auto;
    align-items:center;
  }
  p {
    padding:0 20px;
    line-height:1.55rem;
    font-family:'Open Sans';
    font-weight:400;
  }
  
  @media ${device.tablet} {
    width:55%;
    margin:80px auto;
  }
  @media ${device.laptop} {
    width:670px;
    p {
    display:block;
    width:560px;
    padding-top:2rem;
    margin:0px auto;
    }
  }

`

  