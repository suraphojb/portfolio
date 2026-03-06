import type { CaseStudy } from "@/types"

type MetricBadgeProps = CaseStudy["keyMetric"]

export function MetricBadge({ value, label, direction }: MetricBadgeProps) {
  const arrow = direction === "up" ? "↑" : direction === "down" ? "↓" : "→"
  const styles =
    direction === "neutral"
      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
      : "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${styles}`}>
      {arrow} {value} {label}
    </span>
  )
}
