import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";
import SEO from "./SEO.js";

export default function Layout({ children, totalPoemCount }) {
  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <SEO />
      <div className={styles.container}>
        <header className={styles.header}>
          <Link to="/">
            <span>{data.site.siteMetadata.title}</span>
            {totalPoemCount ? <span className={styles.totalPoemCount}>共{totalPoemCount}首</span> : null}
          </Link>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          网站建设{" "}
          <a
            href="https://github.com/Kaiguang"
            target="_blank"
            rel="noreferrer"
          >
            铠光
          </a>{" "}
          @ {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}

Layout.propTypes = {
  totalPoemCount: PropTypes.number,
};
