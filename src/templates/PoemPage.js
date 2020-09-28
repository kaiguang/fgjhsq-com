import React from "react";
import { graphql, Link } from "gatsby";
import styles from "./PoemPage.module.css";
import Layout from "../components/Layout.js";

export default function PoemPage({ data, pageContext }) {
  const md = data.markdownRemark;
  const next = pageContext.next;
  const previous = pageContext.previous;

  return (
    <Layout>
      <h1 className={styles.title}>{md.frontmatter.title}</h1>
      <div className={styles.author}>{md.frontmatter.author}</div>
      <div className={styles.poem}>{md.frontmatter.poem}</div>
      <hr />
      <p className={styles.date}>{`创作于 ${md.frontmatter.date}`}</p>
      <div
        className={styles.markdownBody}
        dangerouslySetInnerHTML={{ __html: md.html }}
      />

      <Link className={styles.link} to={`/#${md.fields.slug}`}>
        返回列表
      </Link>
      {previous ? (
        <Link
          className={styles.link}
          to={previous.fields.slug}
        >{`更近：${previous.frontmatter.title} ${previous.frontmatter.date}`}</Link>
      ) : null}
      {next ? (
        <Link
          className={styles.link}
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
