import Link from "next/link"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { BlogCard } from "@/components/blog/BlogCard"
import { getAllBlogPosts } from "@/lib/mdx"

export function BlogPreview() {
  const posts = getAllBlogPosts().slice(0, 3)

  return (
    <section id="blog" className="py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Thinking Out Loud"
            title="Writing & Insights"
            subtitle="Product strategy, business frameworks, and lessons from the MBA journey."
          />
          <Link
            href="/blog"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
          >
            View all posts
            <span aria-hidden="true">→</span>
          </Link>
        </AnimatedSection>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <BlogCard post={post} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-700 p-12 text-center">
            <p className="text-zinc-400 dark:text-zinc-500 text-sm mb-2">No posts yet</p>
            <p className="text-zinc-400 dark:text-zinc-500 text-xs">
              Add <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">content/blog/*.mdx</code> files to populate this section
            </p>
          </div>
        )}

      </div>
    </section>
  )
}
