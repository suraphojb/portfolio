import { Hero } from "@/components/home/Hero"
import { About } from "@/components/home/About"
import { FeaturedWork } from "@/components/home/FeaturedWork"
import { Experience } from "@/components/home/Experience"
import { Skills } from "@/components/home/Skills"
import { BlogPreview } from "@/components/home/BlogPreview"
import { Contact } from "@/components/home/Contact"

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedWork />
      <Experience />
      <Skills />
      <BlogPreview />
      <Contact />
    </>
  )
}
