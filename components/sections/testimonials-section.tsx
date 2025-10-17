"use client"

import { TestimonialCard } from "@/components/testimonial-card"
import { ContactCard } from "@/components/contact-card"
import { TESTIMONIALS, CONTACT_METHODS } from "@/lib/constants/site-data"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const contactTitleRef = useRef<HTMLDivElement>(null)
  const contactCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft
      const cardWidth = scrollContainer.scrollWidth / TESTIMONIALS.length
      const index = Math.round(scrollLeft / cardWidth)
      setActiveIndex(index)
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1 })
      if (contactTitleRef.current) gsap.set(contactTitleRef.current, { opacity: 1 })

      // Title animation - simplified
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

      // Cards stagger animation (desktop only, simplified)
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024
      if (isDesktop && cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".testimonial-card")
        if (cards && cards.length > 0) {
          gsap.set(cards, { opacity: 1 })
          gsap.from(cards, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          })
        }
      }

      // Contact section title animation
      gsap.from(contactTitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      })

      // Contact cards animation - simplified
      if (contactCardsRef.current) {
        const contactCards = contactCardsRef.current.querySelectorAll(".contact-card")
        if (contactCards && contactCards.length > 0) {
          gsap.set(contactCards, { opacity: 1 })
          gsap.from(contactCards, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contactCardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          })
        }
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">

      <div className="max-w-7xl mx-auto lg:w-full relative z-10">
        <div ref={titleRef} className="text-center mb-6 sm:mb-8 lg:mb-6 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            Ils nous font confiance et
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
              {" "}partagent leurs résultats
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez les témoignages authentiques de nos clients entreprises et de nos partenaires commerciaux.
          </p>
        </div>

        {/* Mobile: Horizontal scroll with snap */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-4 md:hidden snap-x snap-mandatory scrollbar-hide mb-8 -mx-4"
        >
          <div className="flex gap-4 px-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0"
              >
                <div className="w-[calc(100vw-2rem)] max-w-[400px]">
                  <TestimonialCard {...testimonial} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots - mobile only */}
        <div className="flex justify-center gap-2 mb-8 md:hidden">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const scrollContainer = scrollRef.current
                if (scrollContainer) {
                  const cardWidth = scrollContainer.scrollWidth / TESTIMONIALS.length
                  scrollContainer.scrollTo({ left: cardWidth * index, behavior: "smooth" })
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>

        {/* Desktop: Grid layout */}
        <div ref={cardsRef} className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* SECTION CONTACT INTÉGRÉE */}
        <div ref={contactTitleRef} className="text-center mb-4 sm:mb-6 px-2">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Besoin d'aide ou d'informations
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
              {" "}complémentaires ?
            </span>
          </h3>
        </div>

        <div ref={contactCardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {CONTACT_METHODS.map((method, index) => (
            <ContactCard key={index} {...method} />
          ))}
        </div>
      </div>
    </section>
  )
}
