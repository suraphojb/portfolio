import type { ComponentPropsWithoutRef } from "react"

type HeadingProps = ComponentPropsWithoutRef<"h2">
type ParagraphProps = ComponentPropsWithoutRef<"p">

function Callout({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "success" | "warning" }) {
  const styles = {
    info: "bg-indigo-50 border-indigo-200 text-indigo-800 dark:bg-indigo-900/20 dark:border-indigo-700 dark:text-indigo-300",
    success: "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-700 dark:text-emerald-300",
    warning: "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-300",
  }
  return (
    <div className={`border-l-4 rounded-r-lg px-5 py-4 my-6 text-sm leading-relaxed ${styles[type]}`}>
      {children}
    </div>
  )
}

function ResultsBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 my-8">
      <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-4">
        Results
      </p>
      {children}
    </div>
  )
}

export const mdxComponents = {
  h2: ({ children, ...props }: HeadingProps) => (
    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-zinc-50 mt-12 mb-4 scroll-mt-20" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="font-sans text-lg font-semibold text-zinc-900 dark:text-zinc-50 mt-8 mb-3 scroll-mt-20" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: ParagraphProps) => (
    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className="space-y-2 mb-5 text-zinc-600 dark:text-zinc-400" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className="flex gap-2 items-start leading-relaxed" {...props}>
      <span className="text-indigo-500 mt-1.5 shrink-0">•</span>
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-indigo-500 pl-5 py-1 my-6 italic text-zinc-500 dark:text-zinc-400"
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-10 border-zinc-200 dark:border-zinc-800" />,
  strong: ({ children, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-zinc-900 dark:text-zinc-50" {...props}>
      {children}
    </strong>
  ),
  // Custom components usable in MDX files
  Callout,
  ResultsBox,
}
