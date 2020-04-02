import { Link } from "gatsby"
import styled from 'styled-components'

import PropTypes from "prop-types"
import React from "react"
import { device } from "./media-queries"


//TODO 
//1. Make mobile nav
//2. hamburger
//3. media queries
//4. Onclick to show mobile nav

const Header = ({ siteTitle, menuLinks }) => (
  <HeaderWrapper>
    <StyledHeader>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <ul>
        {console.log(menuLinks)}
        {menuLinks.map((link, i) => (
          <li key={i}><Link to={link.link}>{link.name}</Link></li>
        ))}
      </ul>
    </StyledHeader>
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
    background-color: yellow;
   
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

const StyledHeader = styled.header`
  display:flex;
  justify-content:space-between;

  ul {
    display:flex;
    align-items:center;
    margin:0;
    padding:0;
    list-style:none;
    li {
      margin:.35rem;
      font-size:12px;
      a {
        text-decoration:none;
        color:#ffffff;
        text-transform:uppercase;
        padding:.25rem .35rem;
        &:hover {
          background-color:rgba(0,0,0,.25);
          transition:.6s;
        }
        

      }
    }
  }
 


`


