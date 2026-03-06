import type { ExperienceItem, SkillCategory } from "@/types"

export const experience: ExperienceItem[] = [
  {
    company: "Columbia Business School",
    role: "MBA Candidate — Product Management & Technology Strategy",
    period: "2026 – 2027",
    location: "New York, NY",
    type: "education",
    bullets: [
      "Clubs: Technology, Artificial Intelligence, Columbia Innovation & Design, Southeast Asian Business",
      "Coursework: Product Management Lab, Artificial Intelligence, Foundation of Product Innovation",
    ],
  },
  {
    company: "LINE BK",
    role: "Senior Product Owner",
    period: "2022 – 2025",
    location: "Bangkok, Thailand",
    type: "work",
    bullets: [
      "Led 0-to-1 Fraud Pattern Detection — combining local scam data with LINE's global intelligence to eliminate $1M in losses across 800+ prior cases, down to zero post-launch",
      "Defined security roadmap with 15+ cross-functional stakeholders (compliance, cybersecurity, Bank of Thailand) — met all core Bank of Thailand's requirements on time while avoiding 4x cost increase",
    ],
  },
  {
    company: "KUBCHAIN",
    role: "Product Manager",
    period: "2021 – 2022",
    location: "Bangkok, Thailand",
    type: "work",
    bullets: [
      "Launched NFT platform with Football Association of Thailand & Bacon Time Esports — grew user base from 1K to 40K+ in 6 months",
      "Prototyped blockchain-based medical tourism platform with NIDA and Tourism Authority of Thailand, receiving 90% positive stakeholder feedback",
      "Drove ~20% user growth through system optimization; built developer tools (KUBchain Bridge, SDKs, BKCscan 2.0) driving 40% increase in platform projects and $300K in strategic partnerships",
    ],
  },
  {
    company: "Bluebik Group PLC",
    role: "Software Engineer & Acting Project Manager",
    period: "2017 – 2020",
    location: "Bangkok, Thailand",
    type: "work",
    bullets: [
      "Delivered back-office tools for Robinhood (Thailand's #1 food delivery platform), cutting processing time by 50% and securing follow-up engagement for Phases 2–3",
      "Built enterprise internal tools for AIS telco (increase sales efficiency) and SCB Bank (branch communication platform)",
    ],
  },
  {
    company: "Chulalongkorn University",
    role: "Bachelor of Engineering, Computer Engineering",
    period: "2014 – 2017",
    location: "Bangkok, Thailand",
    type: "education",
    bullets: [
      "Semi-Finalist in National Software Contests",
    ],
  },
]

export const skills: SkillCategory[] = [
  {
    title: "Product",
    icon: "◆",
    skills: ["Product development", "Roadmapping", "User Research", "A/B Testing", "PRD Writing", "Agile/Scrum", "SDLC Management"],
  },
  {
    title: "AI & Data",
    icon: "◈",
    skills: ["Claude Code", "Python", "RAG", "LlamaIndex", "OpenAI/Claude APIs", "Pinecone", "ChromaDB", "Streamlit", "SQL"],
  },
  {
    title: "Engineering",
    icon: "◇",
    skills: ["JavaScript", "Java", "REST APIs", "MEAN Stack", "Semantic Search", "Git"],
  },
  {
    title: "Tools",
    icon: "◉",
    skills: ["Figma", "Jira", "Notion", "Monday.com", "Miro", "A/B Testing"],
  },
]

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/suraphojb/",
  github: "https://github.com/suraphojb",
  email: "sboonyayoi27@gsb.columbia.edu",
  resume: "/resume.pdf",
}
