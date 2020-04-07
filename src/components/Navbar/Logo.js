import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"

const LogoWrap = styled.div`
  margin:auto 0;
  flex: 0 1 130px;

  @media (max-width:768px;) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "wieser-brothers-logo-w" }, extension: { eq: "png"}) {
        childImageSharp {
          fluid(maxWidth: 100, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LogoWrap as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </LogoWrap>
  )
}

export default Logo