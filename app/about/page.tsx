import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { experience, socialLinks } from "@/lib/data"

export const metadata: Metadata = {
  title: "About",
  description: "Thai engineer turned product leader. 7+ years in fintech and blockchain. Now at Columbia Business School, targeting PM and AI Product roles.",
  keywords: [
    "Suraphoj Boonyayoi",
    "Todd Boonyayoi",
    "Columbia MBA",
    "Product Manager Thailand",
    "fintech product manager",
    "LINE BK product manager",
  ],
  openGraph: {
    title: "About Todd Boonyayoi (Suraphoj Boonyayoi)",
    description: "Thai engineer turned product leader. 7+ years in fintech and blockchain. Now at Columbia Business School, targeting PM and AI Product roles.",
    images: [{ url: "/images/profile-2.jpg", alt: "Todd Boonyayoi" }],
  },
}

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="mb-12">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8">
            ← Back home
          </Link>

          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-3">
            About
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-zinc-900 dark:text-zinc-50 mb-8">
            The story so far.
          </h1>

          {/* Profile photo */}
          <div className="mb-10 w-48">
            <Image
              src="/images/profile-2.jpg"
              alt="Todd Boonyayoi"
              width={0}
              height={0}
              sizes="200px"
              className="w-full h-auto"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="prose prose-zinc dark:prose-invert max-w-none
          prose-headings:font-serif prose-headings:font-normal
          prose-p:text-zinc-600 prose-p:dark:text-zinc-400 prose-p:leading-relaxed
          prose-strong:text-zinc-900 prose-strong:dark:text-zinc-50">

          <p>
            I grew up in Bangkok and studied Computer Engineering at Chulalongkorn University. After
            graduating, I joined <strong>Bluebik Group</strong>, a Thai management and technology
            consultancy — writing code, leading sprints, and building internal tools for some of
            Thailand&apos;s largest enterprises. It was there I first understood the gap between
            shipping software and solving a real business problem.
          </p>

          <p>
            That gap led me toward product. I moved into a PM role at <strong>KUBCHAIN</strong>, a
            blockchain startup, where I launched an NFT platform in partnership with the Football
            Association of Thailand and grew it from 1K to 40K+ users in six months. The speed of
            blockchain-native products — and their unforgiving UX — sharpened my instinct for
            prioritization fast.
          </p>

          <p>
            Then came <strong>LINE BK</strong>, the digital banking arm of LINE Corporation in Thailand.
            As Senior Product Owner, I led the 0-to-1 build of a fraud pattern detection system that
            eliminated over $1M in losses within its first launch cycle. I also worked closely with
            the Bank of Thailand to define a security roadmap that met regulatory requirements without
            bloating the engineering scope. That experience taught me how to operate at the intersection
            of user trust, compliance, and business velocity.
          </p>

          <h2>Why Columbia? Why now?</h2>
          <p>
            After seven years in the market, I kept encountering the same ceiling: the most impactful
            product decisions weren&apos;t purely technical or purely user-driven — they required
            business model clarity, cross-market perspective, and stakeholder fluency that I wanted
            to build more deliberately. Columbia Business School felt like the right place to do that,
            with its proximity to New York&apos;s product and AI ecosystem and its rigorous mix of
            strategy and innovation coursework.
          </p>

          <h2>What I&apos;m looking for</h2>
          <p>
            I&apos;m targeting <strong>PM and AI Product roles</strong> at product-led technology
            companies — particularly those building in fintech, AI tooling, or platforms where
            data is core to the product experience. I&apos;m drawn to teams where technical depth
            is respected and where the PM role sits close to both users and engineers.
          </p>
          <p>
            Company stage: Series B through large-cap. Geography: US, open to remote or hybrid.
          </p>

          <h2>Outside of work</h2>
          <p>
            I eat my way through every city I visit — Bangkok night markets, New York ramen shops,
            whatever&apos;s obscure and excellent. I&apos;m also genuinely into niche fragrances
            (Le Labo, Diptyque, Maison Francis Kurkdjian — scent as product design is a rabbit hole
            I&apos;m happy to go down). If you want to talk about PM craft, AI product strategy,
            or where to eat in either city, reach out.
          </p>

        </AnimatedSection>

        {/* Connect CTA */}
        <AnimatedSection delay={0.2} className="mt-16 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-50 mb-1">Want to connect?</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Always happy to chat about product, strategy, or anything interesting.</p>
          </div>
          <a
            href={`mailto:${socialLinks.email}`}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-zinc-50 px-5 py-2.5 text-sm font-medium text-white dark:text-zinc-900 hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors"
          >
            Say hello →
          </a>
        </AnimatedSection>

        {/* Timeline summary */}
        <AnimatedSection delay={0.3} className="mt-12">
          <h2 className="font-serif text-xl font-normal text-zinc-900 dark:text-zinc-50 mb-6">Timeline</h2>
          <div className="space-y-4">
            {experience.map((item, i) => (
              <div key={i} className="flex gap-4 text-sm">
                <span className="text-zinc-400 dark:text-zinc-500 shrink-0 w-20 text-right">{item.period.split("–")[0].trim()}</span>
                <span className="text-zinc-300 dark:text-zinc-700">—</span>
                <div>
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">{item.role}</span>
                  <span className="text-zinc-400 dark:text-zinc-500"> at {item.company}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}
