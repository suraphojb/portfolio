"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CaseStudyCard } from "./CaseStudyCard"
import type { CaseStudy } from "@/types"

interface CaseStudyGridProps {
  studies: CaseStudy[]
}

export function CaseStudyGrid({ studies }: CaseStudyGridProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  if (!studies.length) return null

  const [primary, ...rest] = studies

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-12 gap-4"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {/* Primary large card */}
      <motion.div
        className="md:col-span-8"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <CaseStudyCard study={primary} className="h-full" />
      </motion.div>

      {/* Secondary cards */}
      <div className="md:col-span-4 grid grid-cols-1 gap-4">
        {rest.slice(0, 2).map((study) => (
          <motion.div
            key={study.slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <CaseStudyCard study={study} className="h-full" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
