import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { socialLinks } from "@/lib/data"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-indigo-50/70 dark:bg-indigo-950/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-xl mx-auto text-center">

          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-900 dark:text-zinc-50 mb-4">
            Open to opportunities.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
            Actively recruiting for <strong className="text-zinc-700 dark:text-zinc-300">Summer 2026 internships</strong> and{" "}
            <strong className="text-zinc-700 dark:text-zinc-300">full-time roles</strong> in Product Management, Growth, and Strategy.
            Always happy to connect, collaborate, or just talk product.
          </p>

          {/* Primary CTA */}
          <a
            href={`mailto:${socialLinks.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-zinc-50 px-8 py-3.5 text-sm font-medium text-white dark:text-zinc-900 transition-all hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:scale-105 mb-8"
          >
            Send me an email
            <span aria-hidden="true">→</span>
          </a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5 pt-2">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              LinkedIn ↗
            </a>
            <span className="text-zinc-200 dark:text-zinc-700">·</span>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              GitHub ↗
            </a>
            {/* Resume link — uncomment when resume.pdf is ready
            <span className="text-zinc-200 dark:text-zinc-700">·</span>
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Resume ↓
            </a>
            */}
          </div>

        </AnimatedSection>
      </div>
    </section>
  )
}
