import React from 'react'
import styled from "styled-components"
import Layout from "../../components/layout"
import { device } from "../../components/media-queries"

const OurFirmIndex = () => {
  return (
    <Layout>
      <ContentWrapper>
      <MainContent>
      <h1>Our Firm</h1>
      <p>As a family-owned business, Wieser Brothers promotes these deeply-held values among our team.</p>

      <ul>
        <li>Expert craftsmanship and excellence in design/build project delivery.</li>
        <li>Creating relationships based on honesty and integrity</li>
        <li>Commitment to the highest standards of safety in the industry.</li>
        <li>Innovation to meet our client's future needs</li>
      </ul>

      <p>Wieser Brothers General Contractor, Inc. is a family-owned and operated firm based in La Crescent, MN.  Founded in 1994 by Jeff and Brian Wieser, the company has grown into a full-service, integrated 130 plus person team that includes journeyman carpenters, certified concrete finishers, trained steel erectors, skilled field superintendents and professional project managers, all dedicated to delivering quality construction services.  Wieser Brothers is the leader in design/build services, partnering closely with clients to meet current and future building needs with intelligence and efficiency.  TRUST is the cornerstone of any Wieser Brothers project.  Over 60% of annual sales are in repeat business from satisfied customers.</p>
      </MainContent>
      </ContentWrapper>
      </Layout>
    
  )
}

export default OurFirmIndex

const ContentWrapper = styled.div`
  border:1px solid red;
  
`

const MainContent = styled.section`

padding:1.5rem;
 
  @media ${device.tablet} {
    margin:0 auto;
    border:1px solid green;
    max-width:768px;
  }

  @media ${device.laptop} {
    border:1px solid green;
    max-width:960px;
  }

  @media ${device.laptopL} {
    border:1px solid black;
    max-width:1200px;
  }

`