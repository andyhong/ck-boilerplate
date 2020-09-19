const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const bulletinTemplate = path.resolve(`src/templates/bulletin.js`)

  return graphql(`
    {
      bulletins: allMarkdownRemark(filter: {frontmatter: {type: {eq: "bulletin"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            id
            frontmatter {
              config
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.bulletins.edges.forEach(({node}) => {
      const id = node.id
      const config = node.frontmatter.config
      createPage({
        path: `/bulletin/${node.frontmatter.date}`,
        component: bulletinTemplate,
        context: { id: id, config: config },
      })
    })
  })
}

exports.createSchemaCustomization = ({ actions, schema, getNode }) => {
  actions.createTypes([
    schema.buildObjectType({
      name: 'MarkdownRemark',
      interfaces: ['Node'],
      fields: {
        isFuture: {
          type: 'Boolean!',
          resolve: (s) => new Date(s.frontmatter.date) > new Date(),
        },
      },
    }),
  ])
}
