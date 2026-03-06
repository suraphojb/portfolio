import Link from "next/link"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { CaseStudyGrid } from "@/components/work/CaseStudyGrid"
import { getFeaturedCaseStudies } from "@/lib/mdx"

export function FeaturedWork() {
  const featured = getFeaturedCaseStudies()

  return (
    <section id="work" className="py-24 bg-indigo-50 dark:bg-indigo-950/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Featured Work"
            title="Projects & Case Studies"
            subtitle="A selection of work showcasing product thinking, analytical rigor, and business impact."
          />
          <Link
            href="/work"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
          >
            View all work
            <span aria-hidden="true">→</span>
          </Link>
        </AnimatedSection>

        {featured.length > 0 ? (
          <CaseStudyGrid studies={featured} />
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-700 p-12 text-center">
            <p className="text-zinc-400 dark:text-zinc-500 text-sm mb-2">No case studies yet</p>
            <p className="text-zinc-400 dark:text-zinc-500 text-xs">
              Add <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">content/work/*.mdx</code> files to populate this section
            </p>
          </div>
        )}

      </div>
    </section>
  )
}
