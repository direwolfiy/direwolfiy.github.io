
const blogFloderName = 'post'
const blogName = process.env.BLOG_NAME ? decodeURI(process.env.BLOG_NAME) : 'SIMONSAYS';
const blogTitle = process.env.BLOG_TITLE ? decodeURI(process.env.BLOG_TITLE) : 'Blog Title';
const footerText = process.env.BLOG_FOOTER_TEXT ? decodeURI(process.env.BLOG_FOOTER_TEXT) : 'Based on Next.js';
const locale = 'en-US'

export const globalData = {
  blogName,
  blogTitle,
  footerText,
  blogFloderName,
  locale
}