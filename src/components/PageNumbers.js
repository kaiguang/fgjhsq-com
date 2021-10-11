import React from 'react'
import { Link } from 'gatsby'
import * as styles from './PageNumbers.module.css'

export default function PageNumbers({ numberOfPages, currentPage }) {
  return (
    <div className={styles.container}>
      {currentPage === 1 ? null : currentPage === 2 ? (
        <Link className={styles.link} to="/">
          上一页
        </Link>
      ) : (
        <Link className={styles.link} to={`/poem-lists/${currentPage - 1}`}>
          上一页
        </Link>
      )}

      <span>
        {currentPage} / {numberOfPages}
      </span>

      {currentPage === numberOfPages ? null : (
        <Link className={styles.link} to={`/poem-lists/${currentPage + 1}`}>
          下一页
        </Link>
      )}
    </div>
  )
}
