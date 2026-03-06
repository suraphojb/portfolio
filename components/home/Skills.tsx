import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { skills } from "@/lib/data"

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-indigo-50 dark:bg-indigo-950/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="mb-12">
          <SectionHeader
            eyebrow="Skills & Toolbox"
            title="What I bring to the table."
            subtitle="A mix of analytical rigor, product instinct, and cross-functional communication."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.08}>
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-indigo-600 dark:text-indigo-400 text-lg">{category.icon}</span>
                  <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 tracking-wide uppercase">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-medium px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  )
}
