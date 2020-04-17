import React from 'react'
import styled from "styled-components"
import Layout from "./layout"
import { device } from "./media-queries"
import MainSubnav from "./Subnavs/main-subnav"

const L2PagesLayout = (props) => (

  <Layout>
    <ContentWrapper>
      <Content>

        <MainContent>
        <h1>{ props.title }</h1>
          <div dangerouslySetInnerHTML={{ __html: props.content}} />
        </MainContent>
        
        <MainSubnav subnav={props.subnav} />
      </Content>
    </ContentWrapper>
  </Layout>
)

export default L2PagesLayout


const ContentWrapper = styled.div`
  // border:1px solid red;
  
`

const Content = styled.section`
display:grid;
grid-template-columns:1fr;
grid-gap:20px;


padding:1.5rem;
 
  @media ${device.tablet} {
    margin:0 auto;
    // border:1px solid green;
    max-width:768px;
    grid-template-columns:2fr 1fr;
  }

  @media ${device.laptop} {
    
    max-width:960px;
    grid-template-columns:3fr 1fr;
  }

  @media ${device.laptopL} {
    // border:1px solid black;
    max-width:1200px;
  }

`

const MainContent = styled.main``

const L2Navigation = styled.aside`
`

