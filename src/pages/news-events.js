import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"


const NewsEvents = ( {data} ) => {

  const newsEvents = data.prismic.allNews_and_eventss.edges

  return (
    <Layout>
      <h1>News & Events</h1>
      {newsEvents.map(article => {
        return (
          <h3>{RichText.asText(article.node.title)}</h3>
        )
      })}
    </Layout>
  )
}

export default NewsEvents


// get list of all news-events

export const query = graphql`
{
  prismic {
    allNews_and_eventss {
      edges {
        node {
          title
        }
      }
    }
  }
}

`