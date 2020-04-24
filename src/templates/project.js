import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
// import styled from "styled-components"
import Layout from "../components/layout"

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
  console.log("jljsdflakdjf")
// console.log(typeof project)
  
  

  return (
    <Layout>
      <h1>Projects</h1>
       
        {project.map(proj => {
          return (
            <>
              <h1>{RichText.render(proj.node.title)}</h1>
              <p>{proj.node._meta.uid}</p>
              <p>{proj.node.location}</p>
              <p>{proj.node.body.__typename}</p>
              {proj.node.body.map(({ fields }) => {
                return (
                  <>
                  <p>{fields.length}</p>
                  <p>{console.log(JSON.stringify(fields))}</p>

                  {fields.map(field => {
                    return (
                        <img src={field.imageSharp.childImageSharp.fluid.srcWebp} alt={field.image.alt} />
                      )
                  })}
                  

                  </>

                  
                )
              })}
            </>
          )
        })}
      
    </Layout>
  )
}

export default Project
