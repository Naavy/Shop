import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: string
  lang?: string
  meta?: Object[]
  title: string
}

function Seo({ description, lang, meta, title }:Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )


  return (
    <div>
      {title}
    </div>
  )
}

export default Seo
