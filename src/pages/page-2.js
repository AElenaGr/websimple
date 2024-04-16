import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Esta es la pagina sobre ...</h1>
    <p>pagina 2</p>
    <Link to="/">ir a Inicio</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
