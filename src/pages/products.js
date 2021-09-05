import React from "react"
import PostList from "../components/PostList"
import Layout from "../components/layout"
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

  const posts = response.allMdx.edges

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

export default ProductPage
