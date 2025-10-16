"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale"
  delay?: number
  duration?: number
  className?: string
}

export function AnimatedSection({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 1,
  className = "",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const element = sectionRef.current

    let initialState = {}
    let animateState = {}

    switch (animation) {
      case "fadeUp":
        initialState = { opacity: 0, y: 50 }
        animateState = { opacity: 1, y: 0 }
        break
      case "fadeIn":
        initialState = { opacity: 0 }
        animateState = { opacity: 1 }
        break
      case "slideLeft":
        initialState = { opacity: 0, x: 100 }
        animateState = { opacity: 1, x: 0 }
        break
      case "slideRight":
        initialState = { opacity: 0, x: -100 }
        animateState = { opacity: 1, x: 0 }
        break
      case "scale":
        initialState = { opacity: 0, scale: 0.8 }
        animateState = { opacity: 1, scale: 1 }
        break
    }

    gsap.set(element, initialState)

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        gsap.to(element, {
          ...animateState,
          duration,
          delay,
          ease: "power3.out",
        })
      },
      once: true,
    })

    return () => {
      trigger.kill()
    }
  }, [animation, delay, duration])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
