import React from "react"
import ProdList from "../components/ProdList"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    allMdx(
        filter: { frontmatter: { kind: { eq: "product" } } }        
        sort: { fields: frontmatter___date, order: DESC }
        ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

const ProductPage = () => {
  const response = useStaticQuery(getProducts)

  const products = response.allMdx.edges

  return (
    <Layout>
      <ProdList products={products} />
    </Layout>
  )
}

export default ProductPage
