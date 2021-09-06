// Logo.js
import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 136px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 99px;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "kerfguitars-logo" }, extension: { eq: "png" }) {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 169
          )
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="logo" />
    </LogoWrap>
  )
}

export default Logo