import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import Button from 'react-bootstrap/Button';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
// import Buttons from "../components/buttons"
import Cards from "../components/cards"
import Navs from "../components/navs"

const IndexPage = () => (
  <Layout>
    <Navs/>
    <SEO title="Home" />
    {/* <h1>Hello Mr. Siraj!!</h1> */}
    {/* <p>Welcome to your new Gatsby site.</p> */}
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
