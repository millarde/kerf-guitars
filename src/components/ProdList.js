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
          <h1>kerf guitars</h1>
          <h2>
            Good guitars for aspiring players. Built and setup with care to give you the best playing experience at a great price.
          </h2>
        </Anim>
        <p>
          The only reason we're here is to build guitars that will help you or whoever you are buying for have a great playing 
          and learning experience. Oh, and the blog -- we love sharing things we learn. Please check it out. 
          After we finish a guitar, we play it for a bit and make sure we're happy with it. We're not going to put it in your hands if we don't 
          like how it plays in ours. As we complete guitars and have them in their break-in period, we'll post them below along with details about them.          
        </p>
        <p>
          We have three "lines" of kerf guitars. The kerf Standard, typically assembled from kits purchased from various providers (always looking for a better value)
          is the most common and available version. Then there's the kerf Custom which happens occasionally if we run across some good parts at good prices.
          These will be a bit more expensive as the components were more expensive. Finally, there is the kerf Rescue series that features guitars we have saved 
          from the dust bin by repairing and refinishing them back into good guitars. All three lines feature the same detailed setup work and are priced to 
          cover our costs.
        </p>
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
