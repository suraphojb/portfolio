import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/mdx"
import { mdxComponents } from "@/components/mdx/MDXComponents"
import { Tag } from "@/components/ui/Tag"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = getBlogPostBySlug(slug)
  if (!data) return {}
  return {
    title: data.frontmatter.title,
    description: data.frontmatter.description,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const data = getBlogPostBySlug(slug)
  if (!data) notFound()

  const { frontmatter: fm, content } = data

  const formattedDate = new Date(fm.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="pt-24 pb-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <article className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-10 mt-4"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          {fm.tags && fm.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {fm.tags.map((tag) => (
                <Tag key={tag} label={tag} variant="indigo" />
              ))}
            </div>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-900 dark:text-zinc-50 leading-tight mb-4">
            {fm.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500">
            <time dateTime={fm.publishedAt}>{formattedDate}</time>
            <span>·</span>
            <span>{fm.readingTime}</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none
          prose-headings:font-serif prose-headings:font-normal
          prose-p:text-zinc-600 prose-p:dark:text-zinc-400 prose-p:leading-relaxed
          prose-strong:text-zinc-900 prose-strong:dark:text-zinc-50
          prose-a:text-indigo-600 prose-a:dark:text-indigo-400 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-indigo-500 prose-blockquote:text-zinc-500">
          <MDXRemote
            source={content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:gap-2.5 transition-all"
          >
            ← All posts
          </Link>
        </div>

      </article>
    </div>
  )
}
