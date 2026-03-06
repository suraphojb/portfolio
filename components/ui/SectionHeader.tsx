interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-900 dark:text-zinc-50 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
