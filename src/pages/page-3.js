import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = ({ data }) => (
  <Layout>
    <SEO title="Page Three" />
    <h1>Third page</h1>

  {data.allContentfulBlogPost.edges.map(({ node }, index) => (
    <div className="spacious">
      <h2>{node.title}</h2>
      <p>{node.description.description}</p>
    </div>
  ))}

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          title
          description {
            description
          }
        }
      }
    }
  }
`

export default ThirdPage

