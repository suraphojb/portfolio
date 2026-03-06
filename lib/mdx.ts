import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"
import type { CaseStudy, BlogPost } from "@/types"

const CONTENT_DIR = path.join(process.cwd(), "content")

function getFilesFromDir(type: "work" | "blog"): string[] {
  const dir = path.join(CONTENT_DIR, type)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"))
}

export function getAllCaseStudies(): CaseStudy[] {
  const files = getFilesFromDir("work")
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "")
      const raw = fs.readFileSync(path.join(CONTENT_DIR, "work", file), "utf-8")
      const { data } = matter(raw)
      return { slug, ...(data as Omit<CaseStudy, "slug">) }
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter((c) => c.featured)
}

export function getCaseStudyBySlug(slug: string): { frontmatter: Omit<CaseStudy, "slug">; content: string } | null {
  const filePath = path.join(CONTENT_DIR, "work", `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  return { frontmatter: data as Omit<CaseStudy, "slug">, content }
}

export function getAllBlogPosts(): BlogPost[] {
  const files = getFilesFromDir("blog")
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "")
      const raw = fs.readFileSync(path.join(CONTENT_DIR, "blog", file), "utf-8")
      const { data, content } = matter(raw)
      const stats = readingTime(content)
      return { slug, readingTime: stats.text, ...(data as Omit<BlogPost, "slug" | "readingTime">) }
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getBlogPostBySlug(slug: string): { frontmatter: Omit<BlogPost, "slug">; content: string } | null {
  const filePath = path.join(CONTENT_DIR, "blog", `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  const stats = readingTime(content)
  return { frontmatter: { readingTime: stats.text, ...(data as Omit<BlogPost, "slug" | "readingTime">) }, content }
}
