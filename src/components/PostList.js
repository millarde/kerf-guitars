import React from "react"
import PostCard from "./PostCard"
import styled from "styled-components"
import Anim from "./Anim"

const List = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const PostList = ({ posts }) => {
  return (
    <>
      <section>
        <Anim>
          <h1>kerf blog</h1>
          <h2>
            We love tinkering and learning and sharing. Please enjoy and come back soon to see what's new 
            (or just click the GetNotified! link and we'll email you when something new shows up).
          </h2>
        </Anim>

        <List>
          {posts.map(({ node }, index) => {
            return <PostCard key={index} post={node} />
          })}
        </List>
      </section>
    </>
  )
}

export default PostList
