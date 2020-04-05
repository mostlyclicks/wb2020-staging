import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import PropTypes from "prop-types"

import Navbar from "./Navbar/Navbar"
import { device } from "./media-queries"



//TODO 
//1. Make mobile nav
//2. hamburger
//3. media queries
//4. Onclick to show mobile nav



const Header = ({ siteTitle, menuLinks }) => (
  <HeaderWrapper>
    <Navbar siteTitle={siteTitle} menuLinks={menuLinks}/>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


// STYLES ––––––––––––––––––––––––– //

const HeaderWrapper = styled.section`
  width:100%;
  margin:0 auto;
  border:1px dotted black;
  @media ${device.mobileM} {
    max-width: 768px;
    background-color: blue;
  }
  @media ${device.tablet} {
    max-width: 978px;
    background-color: #cdcdcd;
    font-size:14px;
  }
  @media ${device.desktop} {
    background-color: green;
    max-width: 1200px;
  }
`