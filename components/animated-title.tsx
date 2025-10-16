"use client"

import { useEffect, useRef, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

// Note: SplitText is a premium GSAP plugin. Using a simpler approach instead.

interface AnimatedTitleProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedTitle({ children, className = "", delay = 0 }: AnimatedTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return

    const element = titleRef.current
    const words = element.innerText.split(" ")

    // Wrap each word in a span
    element.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`)
      .join(" ")

    const wordElements = element.querySelectorAll("span > span")

    gsap.set(wordElements, { yPercent: 100, opacity: 0 })

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(wordElements, {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: "power3.out",
          delay,
        })
      },
      once: true,
    })

    return () => {
      trigger.kill()
    }
  }, [delay])

  return (
    <h2 ref={titleRef} className={className}>
      {children}
    </h2>
  )
}
