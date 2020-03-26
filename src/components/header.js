import { Link } from "gatsby"
import styled from 'styled-components'

import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="container">
    <div className="navbar">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
        
      </h1>
      <ul>
        {console.log(menuLinks)}
        {menuLinks.map((link, i) => (
          <li key={i}><Link to={link.link}>{link.name}</Link></li>
        ))}
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


