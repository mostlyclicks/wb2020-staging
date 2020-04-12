import React from 'react'
import { Link } from 'gatsby'

import { device } from "../media-queries"
import block1 from '../../images/1JeffBrian2017.jpeg'
import block2 from "../../images/IMG_2273_employment_page-web.jpeg"
import block3 from "../../images/IMG_4870_MOD-2_w.jpeg"



const GridContainer = () => {
  return (
    <GridSection>
      <GridContainerWrapper>
        <GridItem></GridItem>
        <GridItem>
          <GridBox>
            <h1>
              Trust
              <br />
              Partnership
              <br />
              Excellence
            </h1>
            <Link to="/">Learn more</Link>
          </GridBox>
        </GridItem>

        <GridItem>
          <GridBox>
            <h1>News</h1>
            <p>New ABC Company Expansions</p>
            <Link to="/">Read more</Link>
          </GridBox>
        </GridItem>

        <GridItem></GridItem>
        <GridItem></GridItem>
        <GridItem>
          <GridBox>
            <h1>Employment Opportunities</h1>
            <p>See all of our job opportunities</p>
            <Link to="/">Start here</Link>
          </GridBox>
        </GridItem>
      </GridContainerWrapper>
    </GridSection>
  )
}

export default GridContainer


const GridSection = styled.section`
  width: 100%;
  background-size:100%;
  background-repeat:no-repeat;
  background-color:#ededed;
`

const GridContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-gap: 0px;
  margin: 50px auto;
  padding: 20px;

  @media ${device.tablet} {
    grid-template-columns:1fr 1fr; 
    max-width:991px;
    margin:50px auto;
    grid-gap:20px;
  }
`
const GridItem = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  height: 400px;
  display: block;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
  color: var(--orange);
  :nth-child(1) {
    grid-row: 1 / span 2;
    order: 1;
    background-image: url(${block1});
    background-size:cover;
  }
  :nth-child(2) {
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--darkGray);
  }
  :nth-child(3) {
    order: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--darkGray);
  }
  :nth-child(4) {
    order: 3;
    background-image: url(${block2});
  }
  :nth-child(5) {
    order: 5;
    background-image: url(${block3});
  }
  :nth-child(6) {
    order: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--darkGray);
  }

  @media ${device.tablet} {
    height: 300px;
    :nth-child(1) {order: 1;}
    :nth-child(2) {order: 2;}
    :nth-child(3) {order: 3;}
    :nth-child(4) {order: 4;}
    :nth-child(5) {order: 5;}
    :nth-child(6) {order: 6;}
  }

  @media ${device.laptop} {
    height:400px;
  }
`
const GridBox = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  h1 {
    font-size: 36px;
    line-height: 2.45rem;
    margin-top: 1rem;
    font-family: "IBM Plex Serif";
  }
  a {
    color: #fff;
    text-transform:uppercase;
    font-size:18px;
    font-weight:bold;
    text-decoration:none;
    font-family:'Open Sans';
    transition:.5s;
    
    border:1px solid #fff;
    padding:5px 20px;
    :hover {
      color:var(--orange);
    }
  }
`