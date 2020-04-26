import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "styled-components"
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
            <>
              <div id="project-title-location">
                <h1>{RichText.asText(proj.node.title)}</h1>
                {/*proj.node._meta.uid*/}
                <h3>{proj.node.location}</h3>
              </div>

              <div id="project-description">
                {RichText.render(proj.node.long_description)}
              </div>

              {proj.node.body.map(({ fields }) => {
                return (
                  <>
                    {fields.map((field, index) => {
                      return (
                        <div id={index}>
                          <img src={field.imageSharp.childImageSharp.fluid.srcWebp}  alt={field.image.alt}/>
                        </div>
                        )
                    })}
                  </>
                )
              })}
            </>
          )
        })}
      </StyledProjectGrid>

        <MainDiv>
          <div id="1" className="box">
            <h1>Project Title</h1>
            <h3>Project location</h3>
          </div>

          <div id="2" className="box">
            <p>I'm baby fashion axe disrupt lyft, freegan gastropub migas retro poutine man bun vape. Kinfolk pinterest yuccie, small batch biodiesel you probably haven't heard of them mumblecore asymmetrical shaman leggings cloud bread +1 XOXO dreamcatcher four loko. Unicorn selfies marfa seitan, williamsburg bushwick ethical schlitz affogato plaid vaporware. Shaman biodiesel blog, air plant portland polaroid tacos glossier helvetica slow-carb kogi farm-to-table asymmetrical truffaut pitchfork. Offal intelligentsia synth humblebrag migas flannel chambray poke lyft. Fanny pack wayfarers stumptown meh, chia vaporware tumblr four loko wolf hexagon tote bag try-hard kinfolk enamel pin fingerstache.</p>
          </div>

          <div id="3" className="box">Box 3</div>
          <div id="4" className="box">box 4</div>
          <div id="5" className="box">Box 5</div>
          <div id="6" className="box">Box 6</div>
        </MainDiv>


    </Layout>
  )
}

export default Project

const MainDiv = styled.div`
  display:grid;
  border:1px solid blue;
  padding:20px;
  grid-template-columns:1fr 1fr 1fr;
  grid-template-rows:2fr 1fr 2fr;
  grid-gap:1rem;

  .box {
    
    padding:1rem;
  }
  div:nth-child(1) {
    grid-area:1 / 3 / 2 / 4;
    background-color:#efefef;
  }
  div:nth-child(2) {
    grid-area:2 / 1 / 3 / 3;
  }
  div:nth-child(3) {
    background-color:blue;
    grid-area:1 / 1 / 2 / 3;
  }
  div:nth-child(4) {
    background-color:green;
    grid-area:2 / 4 / 4 / 3;
  }
  div:nth-child(5) {
    background-color:gray;
    grid-area: 3 / 1 / 4 / 2;

  }
  div:nth-child(6) {
    background-color:violet;
    grid-area: 3 / 2 / 4 / 3;
  }

`


const StyledProjectGrid = styled.section`
  display:none !important;
  div {border:2px solid red;}

  div {
    img {width:100%;}
  }
  display:grid;
  grid-template-columns:2fr 1fr;
  grid-template-rows:1fr;
  // grid-template-rows:1fr 1fr 1fr;
  // grid-auto-flow:row;
  
  #project-title-location {
    grid-row-start:3;
    grid-row-end:4;
    order:1;
  }

  #project-description {

  }
`