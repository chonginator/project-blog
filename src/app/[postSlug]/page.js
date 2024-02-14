import { notFound } from 'next/navigation';
import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BlogHero from '@/components/BlogHero';
import CodeSnippet from '@/components/CodeSnippet';

import DivisionGroupsDemo from '@/components/DivisionGroupsDemo';
import CircularColorsDemo from '@/components/CircularColorsDemo';

import { BLOG_TITLE } from '@/constants';
import { loadBlogPost } from '@/helpers/file-helpers';

import styles from './postSlug.module.css';

export async function generateMetadata({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug);

  if (!blogPostData) {
    return null;
  }

  const { frontmatter: { title, abstract } } = blogPostData;

  return {
    title: `${title} • ${BLOG_TITLE}`,
    description: abstract
  }
}

async function BlogPost({ params }) {
  const blogPostData = await loadBlogPost(params.postSlug);

  if (!blogPostData) {
    notFound();
  }

  const {
    frontmatter:
      { title, publishedOn },
    content
  } = blogPostData;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={title}
        publishedOn={publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={{
            DivisionGroupsDemo,
            CircularColorsDemo,
            'pre': CodeSnippet
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
