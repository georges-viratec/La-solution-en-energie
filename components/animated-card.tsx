"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  index?: number
}

export function AnimatedCard({ children, className = "", delay = 0, index = 0 }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const element = cardRef.current

    gsap.set(element, {
      opacity: 0,
      y: 60,
      scale: 0.95,
    })

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: delay + index * 0.1,
          ease: "power3.out",
        })
      },
      once: true,
    })

    return () => {
      trigger.kill()
    }
  }, [delay, index])

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  )
}
