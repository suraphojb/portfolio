import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { SectionHeader } from "@/components/ui/SectionHeader"

const highlights = [
  "0→1 product builder: launched fraud detection eliminating $1M in losses at LINE BK",
  "Technical depth: CS engineering background + Python, AI APIs, and full-stack experience",
  "Cross-cultural operator: led enterprise products across fintech, blockchain, and consulting in Thailand",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <AnimatedSection>
            <div className="mx-auto lg:mx-0 max-w-sm">
              <Image
                src="/images/profile-2.jpg"
                alt="Todd Boonyayoi"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={0.15}>
            <SectionHeader
              eyebrow="About Me"
              title="Engineer turned product leader."
            />
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              After 7+ years building products in Bangkok — from software engineer at Bluebik to launching
              fintech features at LINE BK — I kept asking the same question: why do some products
              create genuine behavior change while others don&apos;t? That question led me to
              Columbia Business School.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
              I&apos;m a computer engineer by training and a product thinker by choice, equally
              comfortable in a user interview and a SQL query. I&apos;m particularly drawn to
              AI-native products — where the design of the intelligence layer is as important
              as the interface itself.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0">◆</span>
                  {h}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:gap-3 transition-all"
            >
              Read full story
              <span aria-hidden="true">→</span>
            </Link>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
