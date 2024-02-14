import React from 'react';

import { BLOG_TITLE } from '@/constants';

import styles from './not-found.module.css';

export const metadata = {
  title: `404 Not Found • ${BLOG_TITLE}`
}

function NotFound() {
  return (
    <div className={styles.page}>
      <h1>404 Not Found</h1>
      <p>This page does not exist. Please check the URL and try again.</p>
    </div>
  )
}

export default NotFound;