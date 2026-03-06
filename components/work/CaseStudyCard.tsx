import Link from "next/link"
import Image from "next/image"
import { MetricBadge } from "./MetricBadge"
import { Tag } from "@/components/ui/Tag"
import type { CaseStudy } from "@/types"

interface CaseStudyCardProps {
  study: CaseStudy
  className?: string
}

export function CaseStudyCard({ study, className = "" }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-600 ${className}`}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {study.heroImage ? (
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-zinc-300 dark:text-zinc-600">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="m9 9 6 6M9 15l6-6" />
              </svg>
            </div>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/8 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white text-zinc-900 text-sm font-medium px-4 py-2 rounded-full shadow">
            Read case study →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Company tag */}
        <p className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
          {study.company}
        </p>

        {/* Title */}
        <h3 className="font-serif text-lg font-normal text-zinc-900 dark:text-zinc-50 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {study.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
          {study.description}
        </p>

        {/* Footer: metric + tags */}
        <div className="mt-auto pt-3 flex flex-wrap items-center gap-2">
          <MetricBadge {...study.keyMetric} />
          {study.tags.slice(0, 3).map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </Link>
  )
}
