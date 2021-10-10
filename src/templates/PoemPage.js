import React from 'react'
import { graphql, Link } from 'gatsby'
import { container, title, author, poem, date, markdownBody, link } from './PoemPage.module.css'
import Layout from '../components/Layout.js'

export default function PoemPage({ data, pageContext }) {
  const md = data.markdownRemark
  const next = pageContext.next
  const previous = pageContext.previous

  return (
    <Layout>
      <div className={container}>
        <h1 className={title}>{md.frontmatter.title}</h1>
        <div className={author}>{md.frontmatter.author}</div>
        <div className={poem}>{md.frontmatter.poem}</div>
        <hr />
        <p className={date}>{`创作于 ${md.frontmatter.date}`}</p>
        <div className={markdownBody} dangerouslySetInnerHTML={{ __html: md.html }} />

        <Link className={link} to={`/#${md.fields.slug}`}>
          返回列表
        </Link>
        {previous ? (
          <Link className={link} to={previous.fields.slug}>
            <span>更近：</span>
            <span>{previous.frontmatter.title}</span>
            <span>{previous.frontmatter.date}</span>
          </Link>
        ) : null}
        {next ? (
          <Link className={link} to={next.fields.slug}>
            <span>更早：</span>
            <span>{next.frontmatter.title}</span>
            <span>{next.frontmatter.date}</span>
          </Link>
        ) : null}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        poem
        date(formatString: "YYYY-M-D")
        author
      }
      fields {
        slug
      }
    }
  }
`
