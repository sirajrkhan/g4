import React from "react"
import { Link } from "gatsby"
import 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Button from 'react-bootstrap/Button';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cards from "../components/cards"
import Navs from "../components/navs"
// import Buttons from "../components/buttons"
// import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <Navs/>
    <SEO title="Home" />
    {/* <h1>Hello Mr. Siraj!!</h1> */}
    {/* <p>Now go build something great.</p> */}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>

    {/* <Buttons/> */}
    <Cards/>

    <Button variant="dark">
      <Link to="/page-2/">Page 2</Link>  
      </Button> | 
    | <Button variant="dark">
      <Link to="/page-3/">Page 3</Link>  
      </Button>
  </Layout>
)

export default IndexPage
