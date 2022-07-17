import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PageNumbers from "../components/PageNumbers";
import { link, date } from "./PoemList.module.css";

export default function PoemList({ data, pageContext }) {
  return (
    <Layout totalPoemCount={data.allMarkdownRemark.totalCount}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link id={node.fields.slug} key={node.fields.slug} to={`/poems${node.fields.slug}`} className={link}>
          <span>{node.frontmatter.title}</span>
          <span className={date}>{node.frontmatter.date}</span>
        </Link>
      ))}

      <PageNumbers currentPage={pageContext.currentPage} numberOfPages={pageContext.numberOfPages} />
    </Layout>
  );
}

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: $limit, skip: $skip) {
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
`;
