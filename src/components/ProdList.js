import React from "react"
import ProdCard from "./ProdCard"
import styled from "styled-components"
import Anim from "./Anim"

const List = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const ProdList = ({ products }) => {
  return (
    <>
      <section>
        <Anim>
          <h1>kerf products</h1>
          <h2>
            The latest & greatest high-perfomance vehicles from around the
            world. Filled with all the information you need to make the right
            choice.
          </h2>
        </Anim>

        <List>
          {products.map(({ node }, index) => {
            return <ProdCard key={index} prod={node} />
          })}
        </List>
      </section>
    </>
  )
}

export default ProdList
