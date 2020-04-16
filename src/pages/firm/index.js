import React from 'react'
import styled from "styled-components"
import Layout from "../../components/layout"
import { device } from "../../components/media-queries"
import L2PagesLayout from "./firm-index-content-test"

const OurFirmIndex = () => {
  return (
    <Layout>
      <ContentWrapper>
        <Content>
          
          <MainContent>
            <L2PagesLayout
              title={"Our Firm"}
              content={"Pass Content through here"} 
              body={"Put styled-components in L2PagesLayout"} 
              //dangerouslySetInnerHTML={{ __html: this.props.body }}
              todos={"Move L2Layout to src/components/pages for universal use of layout"} />


            // https://github.com/gatsbyjs/gatsby/issues/1121 -- pass HTML for body??

          <h1></h1>
          <p>As a family-owned business, Wieser Brothers promotes these deeply-held values among our team.</p>

          <ul>
            <li>Expert craftsmanship and excellence in design/build project delivery.</li>
            <li>Creating relationships based on honesty and integrity</li>
            <li>Commitment to the highest standards of safety in the industry.</li>
            <li>Innovation to meet our client's future needs</li>
          </ul>

          <p>Wieser Brothers General Contractor, Inc. is a family-owned and operated firm based in La Crescent, MN.  Founded in 1994 by Jeff and Brian Wieser, the company has grown into a full-service, integrated 130 plus person team that includes journeyman carpenters, certified concrete finishers, trained steel erectors, skilled field superintendents and professional project managers, all dedicated to delivering quality construction services.  Wieser Brothers is the leader in design/build services, partnering closely with clients to meet current and future building needs with intelligence and efficiency.  TRUST is the cornerstone of any Wieser Brothers project.  Over 60% of annual sales are in repeat business from satisfied customers.</p>
          </MainContent>
          <L2Navigation>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 5</li>
            </ul>
          </L2Navigation>
          </Content>
        </ContentWrapper>
      </Layout>
  )
}

export default OurFirmIndex

const ContentWrapper = styled.div`
  border:1px solid red;
  
`

const Content = styled.section`
display:grid;
grid-template-columns:1fr;
grid-gap:20px;


padding:1.5rem;
 
  @media ${device.tablet} {
    margin:0 auto;
    border:1px solid green;
    max-width:768px;
    grid-template-columns:2fr 1fr;
  }

  @media ${device.laptop} {
    border:1px solid green;
    max-width:960px;
    grid-template-columns:3fr 1fr;
  }

  @media ${device.laptopL} {
    border:1px solid black;
    max-width:1200px;
  }

`

const MainContent = styled.main``

const L2Navigation = styled.aside`
`