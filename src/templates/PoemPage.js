import React from "react";
import { graphql, Link } from "gatsby";
import {
  title,
  author,
  poem,
  date,
  markdownBody,
  link,
} from "./PoemPage.module.css";
import Layout from "../components/Layout.js";

export default function PoemPage({ data, pageContext }) {
  const md = data.markdownRemark;
  const next = pageContext.next;
  const previous = pageContext.previous;

  return (
    <Layout>
      <h1 className={title}>{md.frontmatter.title}</h1>
      <div className={author}>{md.frontmatter.author}</div>
      <div className={poem}>{md.frontmatter.poem}</div>
      <hr />
      <p className={date}>{`创作于 ${md.frontmatter.date}`}</p>
      <div
        className={markdownBody}
        dangerouslySetInnerHTML={{ __html: md.html }}
      />

      <Link className={link} to={`/#${md.fields.slug}`}>
        返回列表
      </Link>
      {previous ? (
        <Link
          className={link}
          to={previous.fields.slug}
        >{`更近：${previous.frontmatter.title} ${previous.frontmatter.date}`}</Link>
      ) : null}
      {next ? (
        <Link
          className={link}
          to={next.fields.slug}
        >{`更早：${next.frontmatter.title} ${next.frontmatter.date}`}</Link>
      ) : null}
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
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
`;
