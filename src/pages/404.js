import * as React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <main>
      <SEO
        title="Page introuvable"
      />
      <h1>Page introuvable</h1>
      <Link to="/">Accueil</Link>.
    </main>
  )
}

export default NotFoundPage
