import React from "react"
import { Link } from "gatsby"

const NavbarLinks = ({ menuLinks }) => (
  <>
    <ul>
      {console.log(menuLinks)}
      {menuLinks.map((link, i) => (
        <li key={i}><Link to={link.link}>{link.name}</Link></li>
      ))}
    </ul>
  </>
)

export default NavbarLinks