import React from 'react'

const MainSubnav = (props) => {

  if (props.subnav === 'firm') {
    return <FirmSubnav />
  } else if (props.subnav === 'services') {
    return <ServicesSubnav />
  } else if (props.subnav === 'commitment') {
    return <CommitmentSubnav />
  }
}

export default MainSubnav


const FirmSubnav = () => (
  <>
    <ul>
      <li>History</li>
      <li>Safety</li>
      <li>Sustainability</li>
      <li>Professional Affiliation</li>
      <li>Awards &amp; Recognition</li>
      <li>Employment Opportunities</li>
    </ul>
  </>
)

const ServicesSubnav = () => (
  <>
    <ul>
      <li>General Contracting</li>  
      <li>Design/Build</li>
      <li>Construction Management</li>
    </ul>
  </>
)

const CommitmentSubnav = () => (
  <>
    <em>No subnav</em>
  </>
)

