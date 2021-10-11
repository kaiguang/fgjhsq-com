/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          next {
            frontmatter {
              title
              date(formatString: "YYYY-M-D")
            }
            fields {
              slug
            }
          }
          node {
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
              date(formatString: "YYYY-M-D")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const poems = result.data.allMarkdownRemark.edges

  // Create poem list pages
  const poemsPerPage = 20
  const numberOfPages = Math.ceil(poems.length / poemsPerPage)
  for (let i = 0; i <= numberOfPages; i++) {
    const poemListPagePath = i === 0 ? `/` : `/poem-lists/${i + 1}`

    createPage({
      path: poemListPagePath,
      component: path.resolve('./src/templates/PoemList.js'),
      context: {
        limit: poemsPerPage,
        skip: i * poemsPerPage,
        numberOfPages,
        currentPage: i + 1,
      },
    })

    // Create poem pages
    poems.slice(i * poemsPerPage, i * poemsPerPage + poemsPerPage).forEach(({ node, next, previous }) => {
      createPage({
        path: `/poems${node.fields.slug}`,
        component: path.resolve('./src/templates/PoemPage.js'),
        context: {
          slug: node.fields.slug,
          next,
          previous,
          poemListPagePath,
        },
      })
    })
  }
}
