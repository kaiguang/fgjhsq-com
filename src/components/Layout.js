import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { container, header, totalPoemCountText, main, footer } from './Layout.module.css'
import SEO from './SEO'

export default function Layout({ children, totalPoemCount }) {
  const data = useStaticQuery(graphql`
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO />
      <div className={container}>
        <header className={header}>
          <Link to="/">
            <span>{data.site.siteMetadata.title}</span>
          </Link>

          {totalPoemCount ? <span className={totalPoemCountText}>共{totalPoemCount}首</span> : null}
        </header>

        <main className={main}>{children}</main>

        <footer className={footer}>放歌江海山阙 @ {new Date().getFullYear()}</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  totalPoemCount: PropTypes.number,
}
