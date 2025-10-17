"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ContactFormModal } from "@/components/contact-form-modal"

gsap.registerPlugin(ScrollTrigger)

export function VideoCtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1 })
      if (descRef.current) gsap.set(descRef.current, { opacity: 1 })
      if (videoRef.current) gsap.set(videoRef.current, { opacity: 1 })
      if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 1 })

      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })

      // Video container animation (simplified)
      gsap.from(videoRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">

      <div className="max-w-4xl mx-auto text-center lg:w-full px-2 relative z-10">
        <h2 ref={titleRef} className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
          Prêt à développer
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
            {" "}vos revenus ?
          </span>
        </h2>
        <p ref={descRef} className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          Rejoignez notre réseau de partenaires gratuitement et commencez à générer des revenus récurrents dès votre première
          référence validée.
        </p>

        <div ref={videoRef} className="w-full max-w-md mx-auto mb-6 sm:mb-8">
          <video
            className="w-full h-auto rounded-2xl"
            controls
            preload="metadata"
            playsInline
            style={{ maxHeight: '60vh' }}
          >
            <source src="/Multiclip_16_10_2025.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-600 text-foreground text-sm sm:text-base lg:text-lg px-8 py-5 sm:px-10 sm:py-6 lg:py-7 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Devenir Partenaire
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Formation gratuite incluse • Support dédié </span>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
