import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
// import styled from "styled-components"
import Layout from "../components/layout"


const Projects = ( {data} ) => {

  const projects = data.prismic.allProjects.edges

  


  return (
    <Layout>
      <h1>Projects</h1>
      {projects.map(project => {
        return (
          <h3>
            <Link to={`/projects/${project.node._meta.uid}`}>
              {RichText.asText(project.node.title)}
              
            </Link>
          </h3>
        )
      })}
    </Layout>
  )

}

export default Projects


// get list of all projects

export const query = graphql`
         {
           prismic {
             allProjects {
               edges {
                 node {
                   title
                   _meta {
                     uid
                   }
                   
                 }
               }
             }
           }
         }
       `