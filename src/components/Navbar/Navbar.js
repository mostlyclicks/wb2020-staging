import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import NavbarLinks from "./NavbarLinks"
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io";
import { device } from "../media-queries"

const closeWindow = function () {
  console.log('hey this function called')
}



const Navbar = ({ siteTitle, menuLinks }) => {
  
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>

      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
    <StyledMobileNav>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <FaBars size="1.5em" className="hamburger" />
    </StyledMobileNav>

    <StyledSlideOutNav>
      <a href="/" onClick={closeWindow} className="close"><IoMdClose size="3em" /></a>
      <NavbarLinks menuLinks={menuLinks} />
    </StyledSlideOutNav>

    <StyledHeader>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
        <NavbarLinks menuLinks={menuLinks} />
    </StyledHeader>
    </>
  )
}

export default Navbar

// STYLES ––––––––––––––––––––––––– //


const StyledMobileNav = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background-color:light-green;
  .hamburger {padding:0 20px;}
  
  @media ${device.tablet} {
    max-width: 978px;
    display:none;
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

  @media ${device.mobileM} {
    max-width: 768px;
    display:none;
  }
  @media ${device.tablet} {
    max-width: 978px;
    font-size:14px;
    display:flex;
  }
`

const StyledSlideOutNav = styled.div`
  display:flex;
  height:100vh;
  width:100%;
  position:fixed;
  top:0;
  left:0;
  background-color:rgba(0,0,0,.90);
  z-index:1000;
  .close {
    color:#fff;
    position:fixed;
    right:0;
    top:0;
    padding:1rem;
    
  }
  
  ul {
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    width:100%;
    margin:0;
    padding:0;
    margin-top:6rem;

    list-style:none;
    li {
      display:flex;
      font-size:24px;
      a {
        width:100%;
        padding:1rem 2rem;
        color:rgba(255,255,255,.60);
        text-decoration:none;
        border-bottom:1px solid rgba(255,255,255,.10);
        &:hover {
          background-color:rgba(0,0,0,1);
          border-bottom:1px solid rgba(255,255,255,.5);
          color:rgba(255,255,255,1);
          transition:1s;
        }
      }
    }

  }
`

const Toggle = styled.div`
  display:none;
  height:100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width:768px) {
    display:flex;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`