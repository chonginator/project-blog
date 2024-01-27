import React from 'react';
import styles from './homepage.module.css';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import { getBlogPostList } from '@/helpers/file-helpers';

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>
      <BlogPostList />
    </div>
  );
}

async function BlogPostList() {
  const blogPosts = await getBlogPostList();

  return blogPosts.map(({
    slug,
    ...delegated
  }) => (
    <BlogSummaryCard 
      key={slug}
      {...delegated}
    />
  ))
}

export default Home;
