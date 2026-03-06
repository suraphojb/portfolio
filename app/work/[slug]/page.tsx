import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/mdx"
import { mdxComponents } from "@/components/mdx/MDXComponents"
import { MetricBadge } from "@/components/work/MetricBadge"
import { Tag } from "@/components/ui/Tag"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCaseStudies().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = getCaseStudyBySlug(slug)
  if (!data) return {}
  return {
    title: data.frontmatter.title,
    description: data.frontmatter.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const data = getCaseStudyBySlug(slug)
  if (!data) notFound()

  const { frontmatter: fm, content } = data
  const allStudies = getAllCaseStudies()
  const currentIdx = allStudies.findIndex((s) => s.slug === slug)
  const prev = allStudies[currentIdx + 1] ?? null
  const next = allStudies[currentIdx - 1] ?? null

  const formattedDate = new Date(fm.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

  return (
    <div className="pt-24 pb-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-10 mt-4"
        >
          ← Back to Work
        </Link>

        {/* Header */}
        <header className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            {fm.company}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-zinc-900 dark:text-zinc-50 leading-tight mb-6">
            {fm.title}
          </h1>

          {/* Metadata row */}
          <div className="flex flex-wrap gap-4 py-4 border-y border-zinc-200 dark:border-zinc-800 mb-6">
            {fm.role && (
              <div className="text-sm">
                <span className="text-xs text-zinc-400 dark:text-zinc-500 block">Role</span>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">{fm.role}</span>
              </div>
            )}
            {fm.team && (
              <div className="text-sm">
                <span className="text-xs text-zinc-400 dark:text-zinc-500 block">Team</span>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">{fm.team}</span>
              </div>
            )}
            {fm.timeline && (
              <div className="text-sm">
                <span className="text-xs text-zinc-400 dark:text-zinc-500 block">Timeline</span>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">{fm.timeline}</span>
              </div>
            )}
            <div className="text-sm">
              <span className="text-xs text-zinc-400 dark:text-zinc-500 block">Published</span>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">{formattedDate}</span>
            </div>
          </div>

          {/* Tags + metric */}
          <div className="flex flex-wrap items-center gap-2">
            <MetricBadge {...fm.keyMetric} />
            {fm.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </header>

        {/* MDX Content */}
        <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none
          prose-headings:font-serif prose-headings:font-normal
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-p:text-zinc-600 prose-p:dark:text-zinc-400 prose-p:leading-relaxed
          prose-strong:text-zinc-900 prose-strong:dark:text-zinc-50
          prose-a:text-indigo-600 prose-a:dark:text-indigo-400 prose-a:no-underline hover:prose-a:underline">
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

        {/* Prev / Next navigation */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row gap-4 justify-between">
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex flex-col gap-1 text-sm"
            >
              <span className="text-zinc-400 dark:text-zinc-500 text-xs">← Previous</span>
              <span className="font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {prev.title}
              </span>
            </Link>
          ) : <div />}
          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col gap-1 text-sm sm:text-right"
            >
              <span className="text-zinc-400 dark:text-zinc-500 text-xs">Next →</span>
              <span className="font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {next.title}
              </span>
            </Link>
          )}
        </div>

      </article>
    </div>
  )
}
