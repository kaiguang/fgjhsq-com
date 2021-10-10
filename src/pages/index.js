import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import { link, date } from './index.module.css'

export default function Home({ data }) {
  return (
    <Layout totalPoemCount={data.allMarkdownRemark.totalCount}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link id={node.fields.slug} key={node.fields.slug} to={node.fields.slug} className={link}>
          <span>{node.frontmatter.title}</span>
          <span className={date}>{node.frontmatter.date}</span>
        </Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
          }
        }
      }
      totalCount
    }
  }
`
