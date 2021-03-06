import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ProdTemplate = ({ data }) => {
  const { title, date, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = getImage(image.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <section>
        <Link className="btn" to="/guitars/">
          Back to all products
        </Link>
        <div>
          <h1>{title}</h1>
          <h4>
            Posted on <span>{date}</span>
          </h4>
        </div>
        <GatsbyImage image={img} alt="kerf guitar for sale" />
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        {/* <h4>
          <span>Written by {author}</span> & Posted on <span>{date}</span>
        </h4> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getProduct($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        author
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`

export default ProdTemplate
