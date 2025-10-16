"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right" | "scale" | "stagger"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  animation = "fade",
  delay = 0,
  duration = 0.8,
  className = ""
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const animations = {
      fade: {
        opacity: 0
      },
      "slide-up": {
        opacity: 0,
        y: 60
      },
      "slide-left": {
        opacity: 0,
        x: 60
      },
      "slide-right": {
        opacity: 0,
        x: -60
      },
      scale: {
        opacity: 0,
        scale: 0.8
      },
      stagger: {
        opacity: 0,
        y: 40
      }
    }

    const ctx = gsap.context(() => {
      if (animation === "stagger") {
        gsap.from(element.children, {
          ...animations.stagger,
          duration,
          delay,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none none"
          }
        })
      } else {
        gsap.from(element, {
          ...animations[animation],
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none none"
          }
        })
      }
    })

    return () => ctx.revert()
  }, [animation, delay, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
