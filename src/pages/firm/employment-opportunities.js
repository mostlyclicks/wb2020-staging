import React from 'react'
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"

// import L2PagesLayout from "../../components/l2-page-template"
// import bgImage from "../../images/wieser-brothers-employment.jpg"
// import workApp from "../../images/WB-Job-Application-Fillable-Form-12-21-19.pdf"

import Layout from "../../components/layout"
const EmploymentOpportunities = ( {data} ) => {

    const empOpportunites = data.prismic.allEmployment_opportunitys.edges


 return (
   <Layout>
    <h1>Employment Opportunities</h1>
    {empOpportunites.map(job => {
      return (
        <p>{RichText.asText(job.node.title)}</p>
      )
    })}
   </Layout>
 )

}


export default EmploymentOpportunities

export const query = graphql`
{
  prismic {
    allEmployment_opportunitys {
      edges {
        node {
          title
        }
      }
    }
  }
}
`



{/*
// <L2PagesLayout 
//     title = {`Employment Opportunities`}
//     subnav={`firm`}
//     backgroundImage={bgImage}
//     content = {`

//   < section id = "emp-opp-links" >
//     <h3>Current Openings</h3>
//     <a href="%5C%22/our-firm/employment-opportunities/carpenters%5C%22" title='\"Carpenters\"'>Carpenters</a><p><a href="%5C%22/our-firm/employment-opportunities/concrete-workers--2%5C%22" title='\"Concrete' workers>Concrete Workers</a></p>
//             </section >
//   <p>
//     <a href="${workApp}" title="Wieser Brothers Job Application   Fillable Form 12 21 19" class="btn btn-primary">Job Application 2020 PDF</a>
//   </p>
//   <p>Wieser Brothers General Contractor, Inc. is a well-recognized and highly-respected construction company in La Crescent, MN (just minutes away from La Crosse, WI). We credit our dedicated team of employees for 25 plus years of success and are committed to strong core values that are reinforced in everything that we do. If you are interested in joining an organization that rewards individual initiative and promotes career development through life-long learning, please contact Wieser Brothers.</p>
//   <p>Wieser Brothers General Contractor, Inc. offers competitive wages based on education and work experience. We also offer a highly competitive benefits program that includes a 401(k) plan, profit sharing, health and dental insurance, short term and long term disability insurance, paid time off (PTO) and holiday pay.</p>
//   <p>  Wieser Brothers General Contractor, Inc. is an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to status as a protected veteran or a qualified individual with a disability, or other protected status, such as race, religion, color, national origin, sex, age. </p>
//           <p>EOE and Drug-Free Workplace </p>
//               <p><a href="mailto:careers@wieserbrothers.com" title="careers@wieserbrothers.com">careers@wieserbrothers.com</a>
//   <a href="/our-firm/employment-opportunities/safety-director" title="Safety Director"></a>
//   </p>          
//     `}

*/}