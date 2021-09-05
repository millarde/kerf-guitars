import React from "react"
import PostList from "../components/PostList"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const getPosts = graphql`
  {
    allMdx(
        filter: { frontmatter: { kind: { eq: "blog" } } }
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

const Blog = () => {
  const response = useStaticQuery(getPosts)

  const posts = response.allMdx.edges

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}

export default Blog
