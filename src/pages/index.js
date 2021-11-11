import React from "react"
// import PostList from "../components/PostList"
import Layout from "../components/Layout"
import { /*useStaticQuery,*/ graphql } from "gatsby"

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
//  const response = useStaticQuery(getPosts)

//  const posts = response.allMdx.edges

  return (
    <Layout>

      <h1>Welcome to kerf guitars</h1>
      <h2>Building good guitars for aspiring players.</h2>
      <p>
        We build guitars with the player's success in mind. Every note should be as easy to play 
        and sound as accurate as possible. 
        That may seem obvious, but many inexpensive guitars (and some more expensive ones) lack a good setup, 
        even a simple intonation adjustment. At some large online retailers, you have to spend over $400 to qualify for their <b>inspection </b>
        much less an actual setup.
      </p><p>
        This means that what  
        you think you are playing, what you are trying hard to play right, is not what you are actually hearing. This lack of correct feedback 
        is likely to disappoint and may derail your progress (at just about any level of playing). We exist with hopes of helping
        more people enjoy learning and playing guitar because the world is better off when there's music. The more guitar players, the better.
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
        So the excited, aspiring guitarist gets a difficult-to-sound-good-on guitar. No matter how hard they practice, they'll always sound a bit off. How long will that last?
      </p>
      <p>
        So let's not do that. Buy a decent guitar with a quality setup, even if it's not one of ours.
      </p>

      
      {/* <PostList posts={posts} /> */}

    </Layout>
  )
}

export default Index
