"use client"

import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import { STATS } from "@/lib/constants/site-data"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function HeroSection() {
  const logoRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const ratingRef = useRef<HTMLDivElement>(null)
  const starsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state to visible
      if (logoRef.current) gsap.set(logoRef.current, { opacity: 1 })
      if (badgeRef.current) gsap.set(badgeRef.current, { opacity: 1 })
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1 })
      if (subtitleRef.current) gsap.set(subtitleRef.current, { opacity: 1 })
      if (statsRef.current?.children) gsap.set(statsRef.current.children, { opacity: 1 })
      if (ratingRef.current) gsap.set(ratingRef.current, { opacity: 1 })
      if (starsRef.current?.children) gsap.set(starsRef.current.children, { opacity: 1 })
      if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 1 })

      // Logo animation
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
      })

      // Badge animation
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "back.out(1.7)"
      })

      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.4,
        ease: "power3.out"
      })

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out"
      })

      // Stats cards stagger animation
      gsap.from(statsRef.current?.children || [], {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)"
      })

      // Rating animation
      gsap.from(ratingRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 1.2,
        ease: "elastic.out(1, 0.5)"
      })

      // Stars individual animation with stagger
      gsap.from(starsRef.current?.children || [], {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 0.5,
        delay: 1.3,
        stagger: 0.1,
        ease: "back.out(2)"
      })

      // CTA button animation
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.8,
        delay: 1.4,
        ease: "back.out(1.5)"
      })

      // Hover effect on CTA
      const button = ctaRef.current?.querySelector("button")
      if (button) {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          })
        })
        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative overflow-hidden min-h-screen px-4 sm:px-6 lg:px-8 flex items-center py-20 sm:py-0">
      <div className="max-w-7xl mx-auto w-full">
        {/* Logo top left - optimisé mobile */}
        <div ref={logoRef} className="absolute top-4 left-4 sm:top-8 sm:left-6 lg:left-8 z-10">
          <Image
            src="/logo.png"
            alt="La Solution en Énergie"
            width={80}
            height={27}
            className="object-contain w-[80px] h-auto sm:w-[100px] md:w-[110px] lg:w-[120px]"
          />
        </div>

        {/* Centered content */}
        <div className="text-center space-y-4 sm:space-y-6 max-w-5xl mx-auto pt-16 sm:pt-0">
          {/* Top badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-xs sm:text-sm font-medium text-foreground text-center">
              Participez à la révolution du courtage en énergie
            </span>
          </div>

          {/* Main headline */}
          <h1 ref={titleRef} className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight px-2">
            Devenez courtier en{" "}
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
              énergie
            </span>{" "}
            indépendant
          </h1>

          {/* Subtitle */}
          <p ref={subtitleRef} className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto px-2">
            Rejoignez <strong className="text-foreground">La Solution en Énergie</strong>, expert de la mise en concurrence des fournisseurs
            d'électricité et de gaz pour les professionnels. Le réseau qui transforme un marché en pleine
            explosion grâce à l'intelligence artificielle et la performance commerciale.
          </p>

          {/* Stats cards */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 pt-2 sm:pt-4 max-w-4xl mx-auto">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center bg-card/50 rounded-2xl p-4 sm:p-0 sm:bg-transparent">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 sm:mb-3">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Rating */}
          <div ref={ratingRef} className="pt-2 sm:pt-4">
            <div ref={starsRef} className="flex gap-1 justify-center mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-500 text-amber-500"
                />
              ))}
            </div>
            <p className="text-sm sm:text-base font-semibold">
              <span className="text-accent-foreground">98%</span>{" "}
              <span className="text-foreground">CLIENTS SATISFAITS</span>
            </p>
          </div>

          {/* CTA button */}
          <div ref={ctaRef} className="pt-2 sm:pt-4">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background text-sm sm:text-base px-8 py-5 sm:px-10 sm:py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 w-full sm:w-auto"
            >
              Nous rejoindre
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
