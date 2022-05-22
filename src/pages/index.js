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
        and sound as accurate as possible. Some would call these "easy play" guitars, but we all 
        know playing guitar well isn't easy. It just won't get much easier than with a kerf.
        Many inexpensive guitars (and some more expensive ones) lack a good setup, 
        even a simple intonation adjustment. At some large online retailers, you have to spend over $400 
        to qualify for their <b>inspection </b> much less an actual setup.
      </p><p>
        This means that the notes and chords  
        you think you are playing, what you are trying hard to play right, is not quite what you should be hearing. This lack of correct feedback 
        is likely derail or slow your progress (at just about any level of playing). We exist with hopes of helping
        more people enjoy learning and playing guitar. The world is better off when there's music, so the more guitar players, the better.
      </p><p>
        <a href="https://kerfguitars.com/blog/on-the-bench">On the bench</a> gives you a peek at the guitars that are almost ready for sale. 
        There's a special, first of its kind kerf guitar on the bench right now. If you sign up for the email list,
        you will get notified whenever we have an update.
      </p>
      <h2>Paying it forward</h2>
      <p>
        We love music and we really love guitar music. Kerf guitars are sold roughly at cost. Really. We source kits and parts and 
        lacquers and paints and turn them into good guitars. It's work we love, so it's not really work. 
        We think of it as a karma project -- we build them so that you have a better experience playing and you cover our costs so we can build 
        another one for someone else. But make no mistake -- we build each one as if we were making it for ourselves.
      </p>
      <p>
        It was inspired by a "service" I used to provide to friends and co-workers. Whenever they mentioned they were thinking of getting a 
        guitar for a friend or child, I'd beg them to let me help. "Please don't go to the big box store and get a starter guitar."
        Because those starter guitars are often barely playable. "Let me help you find something nice online and I'll do the setup on it." 
        This is the next level of that.
      </p>
    
      {/* <PostList posts={posts} /> */}

    </Layout>
  )
}

export default Index
