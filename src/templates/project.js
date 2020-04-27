import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
import Layout from "../components/layout"
import { device } from "../components/media-queries"

export const query = graphql`
         query ProjectQuery($uid: String) {
           prismic {
             allProjects(uid: $uid) {
               edges {
                 node {
                   _meta {
                     uid
                     id
                   }
                   title
                   location
                   long_description
                   body {
                     __typename
                     ... on PRISMIC_ProjectBodyImage {
                       fields {
                         image 
                         imageSharp {
                           internal {
                             content
                             description
                             ignoreType
                             mediaType
                           }
                           childImageSharp {
                             fluid(quality: 80) {
                               srcWebp
                             }
                           }
                         }
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `

const Project = ({ data }) => {
  
  const project = data.prismic.allProjects.edges

  
  
  return (
    <Layout>
      <h1>Projects</h1>
       <StyledProjectGrid>
        {project.map(proj => {

          return (
            <MainDiv>
              <div id="project-title-location" className="box">
                <h1>{RichText.asText(proj.node.title)}</h1>
                {/*proj.node._meta.uid*/}
                <h3>{proj.node.location}</h3>
              </div>

              <div id="project-description" className="box">
                {RichText.render(proj.node.long_description)}
              </div>

              {proj.node.body.map(({ fields }) => {

                // const bgImg = {
                //   backgroundImage: 'url(" + {field.imageSharp.childImageSharp.fluid.srcWebp + ")'
                // }
                
                return (
                  <>
                    {fields.map((field, index) => {
                      return (
                        <div id={index} className="box"
                          style={{ 
                            backgroundImage: 'url(' + field.imageSharp.childImageSharp.fluid.srcWebp + ')'
                          }}>
                          {/*<img src={field.imageSharp.childImageSharp.fluid.srcWebp}  alt={field.image.alt}/>*/}
                        </div>
                        )
                    })}            

                  </>
                )
              })}
            </MainDiv>
          )
        })}
      </StyledProjectGrid>

       


    </Layout>
  )
}

export default Project

const MainDiv = styled.div`
  display:inline-grid;
  width:100%;
  
  margin:0 auto;
  grid-gap:3px; 
  
  
  div:nth-child(n+3) {
    height:350px;
    background-position:center;
    background-repeat:no-repeat;
  }
  
  .box {
    padding:1rem;
  }


  @media ${device.tablet} {
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:2fr 1fr 2fr 4fr;
    grid-gap:1rem;
      
    div:nth-child(n+3) {
      height:auto;
    }

    div:nth-child(1) {
      grid-area:1 / 3 / 2 / 4;
      background-color:#efefef;
    }
    div:nth-child(2) {
      grid-area:2 / 1 / 3 / 2;
    }
    div:nth-child(3) {
      grid-area:1 / 1 / 2 / 3;
      background-size:cover;
      background-position:center;
    }
    div:nth-child(4) {
      background-color:green;
      grid-area:2 / 2 / 4 / 4;
      background-size:cover;
    }
    div:nth-child(5) {
      background-color:gray;
      grid-area: 3 / 1 / 4 / 2;
      background-size:cover;
      background-position:center;
    }
    div:nth-child(6) {
      background-color:violet;
      grid-area: 4 / 2 / 6 / 4;
      background-size:cover;
      background-position:center;
    }
    div:nth-child(7) {
      background-color:violet;
      grid-area: 4 / 1 / 6 / 3;
      background-size:cover;
      background-position:center;
    }

  }

  @media ${device.laptop} {
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:2fr 1fr 2fr 1fr;
  }1
`


const StyledProjectGrid = styled.section`
  width:100%;
  margin:40px auto;
  div {
    img {width:100%;}
  }

  @media ${device.tablet} {
    max-width:768px;
  }
  @media ${device.laptop} {
    max-width:960px;
  }

  @media ${device.laptopL} {
    max-width:1200px;
  }
  
 
`