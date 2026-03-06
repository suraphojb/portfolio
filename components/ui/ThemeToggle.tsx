"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="w-9 h-9 rounded-md" />
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 12A4 4 0 1 0 8 4a4 4 0 0 0 0 8zm0 1.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 8 13.5zm0-11a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 8 2.5zm5.5 5.5a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75zm-11 0a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1A.75.75 0 0 1 2.5 8zm9.45-3.95a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 1 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0zm-7.78 7.78a.75.75 0 0 1 0 1.06l-.707.707a.75.75 0 1 1-1.06-1.06l.707-.707a.75.75 0 0 1 1.06 0zm7.78.707a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 0 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06zM4.172 4.172a.75.75 0 0 1-1.06 0l-.707-.707a.75.75 0 0 1 1.06-1.06l.707.707a.75.75 0 0 1 0 1.06z" fill="currentColor"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M7.293 1.5a1 1 0 0 1 .99 1.153A5.498 5.498 0 0 0 13.5 8.5a5.476 5.476 0 0 0-1.853.318 1 1 0 0 1-1.297-1.115A5.501 5.501 0 0 0 7.293 1.5zm.5 2.5A3.502 3.502 0 0 1 11 7.706a7.503 7.503 0 0 1 2.5-.206A5.499 5.499 0 0 0 7.793 4z" fill="currentColor"/>
        </svg>
      )}
    </button>
  )
}
