import RSS from "rss";
import { BLOG_TITLE, BLOG_DESCRIPTION } from "@/constants";
import { getBlogPostList } from "@/helpers/file-helpers";

export async function GET() {
  const feedOptions = {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION
  }
  
  const feed = new RSS(feedOptions);

  const blogPostList = await getBlogPostList()
  blogPostList.forEach((blogPost) => {
    feed.item({
      title: blogPost.title,
      description: blogPost.abstract,
      date: blogPost.publishedOn
    })
  })

  const xml = feed.xml();
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}