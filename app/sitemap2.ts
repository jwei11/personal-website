import { getBlogPosts } from 'app/spiritual/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/spiritual/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/spiritual'].map((route2) => ({
    url: `${baseUrl}${route2}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
