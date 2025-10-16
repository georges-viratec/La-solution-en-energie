import { HeroSection } from "@/components/sections/hero-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { ProcessSection } from "@/components/sections/process-section"
import { VideoCtaSection } from "@/components/sections/video-cta-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CaseStudySection } from "@/components/sections/case-study-section"
import { FaqSection } from "@/components/sections/faq-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <>
      <main className="min-h-screen ">
        <HeroSection />
        <PillarsSection />
        <ProcessSection />
        <VideoCtaSection />
        <TestimonialsSection />
        <CaseStudySection />
        <FaqSection />
      </main>
      <FooterSection />
    </>
  )
}
