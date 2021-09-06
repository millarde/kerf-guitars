import React from "react"
import PostList from "../components/PostList"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

const Index = () => {
  const response = useStaticQuery(getPosts)

  const posts = response.allMdx.edges

  return (
    <Layout>

      <h1>Welcome to kerf guitars</h1>
      <h2>Crafting good guitars for aspiring players in Austin, Texas.</h2>
      <p>
        Kerf guitars are built with the player's success in mind. Every note should be as easy to play and sound as accurate as possible. 
        That may seem obvious, but many inexpensive guitars lack a good setup, even a simple intonation adjustment. This means that what 
        you think you are playing is not what you are hearing and this lack of correct feedback is likely to disappoint and may derail your progress.
      </p>
      <h2>Paying it forward</h2>
      <p>
        We love music and we really love guitar music. Kerf guitars are sold roughly at cost. Really. We source kits and parts and 
        lacquers and paints and turn them into good guitars. It's work we love, so it's not really work. Don't worry, it's not our day job. 
        We think of it as a karma project -- we build them so that you have a better experience playing and you cover our costs so we can build 
        another one for someone else.
      </p>
      <p>
        It actually started as a "service" I used to provide to friends and co-workers. Whenever they mentioned they were thinking of getting a 
        guitar for a friend or child, I'd beg them to let me help. "Please don't go to the big box store and get a starter guitar."
      </p>
      <p>
        Because those starter guitars are often barely playable. Even if you pay for a setup (and not many people do), no promises it was done well. 
        So the excited, aspiring guitarist gets a difficult-to-sound-good-on-guitar, no matter how hard they practice. How long will that last?
      </p>
      <p>
        I used to scour craigslist for the area and look for guitars that seemed to match what they were looking for in general and were in good 
        repair and priced well. I'd send them several links in their price range and suggest they buy one of them.
      </p>
      <p>
        And then bring it directly to me. I'd clean it up, put on some new strings, do a good setup on it and make sure that it was 
        ready to delight the new player who was about to receive it. And then I decided to take it to the next level.
      </p>
      
      {/* <PostList posts={posts} /> */}

    </Layout>
  )
}

export default Index
