import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { experience } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="mb-12">
          <SectionHeader
            eyebrow="Experience"
            title="Where I&apos;ve been."
          />
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative pl-10 sm:pl-14">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 sm:left-1 top-1.5 w-6 sm:w-7 h-6 sm:h-7 rounded-full border-2 flex items-center justify-center ${
                    item.type === "education"
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30"
                      : "border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-950"
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      item.type === "education"
                        ? "bg-indigo-500"
                        : "bg-zinc-400 dark:bg-zinc-500"
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="font-medium text-zinc-900 dark:text-zinc-50">
                          {item.role}
                        </h3>
                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                          {item.company}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                          {item.period}
                        </p>
                        <p className="text-xs text-zinc-400 dark:text-zinc-500">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {item.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <span className="text-zinc-300 dark:text-zinc-600 mt-0.5 shrink-0">—</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
