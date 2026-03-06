import type { Metadata } from "next"
import Link from "next/link"
import { CaseStudyCard } from "@/components/work/CaseStudyCard"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { getAllCaseStudies } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies and projects showcasing product thinking, analytical rigor, and business impact.",
}

export default function WorkPage() {
  const studies = getAllCaseStudies()

  return (
    <div className="pt-28 pb-24 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="mb-16">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8">
            ← Back home
          </Link>
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            Case Studies
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-zinc-900 dark:text-zinc-50 mb-4">
            Work & Projects
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
            A collection of case studies showing how I approach product problems — from research to execution.
          </p>
        </AnimatedSection>

        {studies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studies.map((study, i) => (
              <AnimatedSection key={study.slug} delay={i * 0.08}>
                <CaseStudyCard study={study} className="h-full" />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-700 p-16 text-center">
            <p className="text-zinc-400 dark:text-zinc-500 text-sm mb-2">No case studies yet</p>
            <p className="text-zinc-400 dark:text-zinc-500 text-xs">
              Add <code className="bg-zinc-100 dark:bg-zinc-800 px-1 rounded">content/work/*.mdx</code> files to get started
            </p>
          </div>
        )}

      </div>
    </div>
  )
}
