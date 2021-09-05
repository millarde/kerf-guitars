exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const {
    data: {
      allMdx: { edges: posts },
    },
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
              kind
            }
          }
        }
      }
    }
  `)
  posts.forEach(({ node }) => {
    const { slug, kind } = node.frontmatter
    if (kind == "blog") {
      createPage({
        path: `/blog/` + slug,
        component: require.resolve("./src/templates/post-template.js"),
        context: {
          slug: slug,
        },
      })
    }
    if (kind == "product") {
      createPage({
        path: `/products/` + slug,
        component: require.resolve("./src/templates/prod-template.js"),
        context: {
          slug: slug,
        },
      })
    }
  })
}
