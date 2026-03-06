interface TagProps {
  label: string
  variant?: "default" | "indigo" | "zinc"
}

export function Tag({ label, variant = "default" }: TagProps) {
  const variants = {
    default:
      "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300",
    indigo:
      "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    zinc:
      "bg-zinc-200 text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200",
  }
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {label}
    </span>
  )
}
