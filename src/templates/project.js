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
          }
        }
      }
    }
  }
`

const Project = ({ data }) => {
  console.log(data)
  const project = data.prismic.allProjects.edges

  return (
    <Layout>
      <h1>Projects</h1>
       
        {project.map(proj => {
          return (
            <>
              <h1>{RichText.render(proj.node.title)}</h1>
              <p>{proj.node._meta.uid}</p>
            </>
          )
        })}
      
    </Layout>
  )
}

export default Project
