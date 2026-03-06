export interface CaseStudy {
  slug: string
  title: string
  company: string
  description: string
  heroImage: string
  tags: string[]
  featured: boolean
  publishedAt: string
  keyMetric: {
    value: string
    label: string
    direction: "up" | "down" | "neutral"
  }
  role?: string
  team?: string
  timeline?: string
  tools?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  publishedAt: string
  readingTime: string
  tags?: string[]
  coverImage?: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  logo?: string
  type: "work" | "education"
}

export interface SkillCategory {
  title: string
  skills: string[]
  icon: string
}
