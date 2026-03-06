"use client"

import { motion } from "framer-motion"
import Link from "next/link"
// import { socialLinks } from "@/lib/data" // uncomment when resume is ready

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] } },
}

const logos = [
  { name: "Columbia Business School" },
  { name: "LINE BK" },
  { name: "KUBCHAIN" },
  { name: "Bluebik Group" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-indigo-50/40 dark:bg-indigo-950/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.p variants={item} className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-4">
            MBA Candidate · Columbia Business School
          </motion.p>

          {/* Name */}
          <motion.h1 variants={item} className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-zinc-900 dark:text-zinc-50 leading-tight mb-6">
            Hi, I&apos;m
            <br />
            <span className="italic text-indigo-600 dark:text-indigo-400">Todd Boonyayoi.</span>
          </motion.h1>

          {/* Value prop */}
          <motion.p variants={item} className="text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            Engineer turned product leader. 7+ years building fintech and blockchain
            products in Southeast Asia. Now at{" "}
            <strong className="text-zinc-700 dark:text-zinc-300">Columbia Business School</strong>,
            targeting{" "}
            <strong className="text-zinc-700 dark:text-zinc-300">PM and AI Product roles</strong>{" "}
            at product-led technology companies.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-zinc-50 px-6 py-3 text-sm font-medium text-white dark:text-zinc-900 transition-all hover:bg-indigo-600 dark:hover:bg-indigo-400 hover:scale-105"
            >
              View My Work
              <span aria-hidden="true">→</span>
            </Link>
            {/* Resume download — uncomment when resume.pdf is ready
            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-all hover:border-zinc-400 dark:hover:border-zinc-500 hover:scale-105"
            >
              Download Resume ↓
            </a>
            */}
          </motion.div>

          {/* Social proof */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-zinc-400 dark:text-zinc-500 mr-1">Background at</span>
            {logos.map((logo) => (
              <span
                key={logo.name}
                className="inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400"
              >
                {logo.name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
