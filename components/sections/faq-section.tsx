"use client"

import { Accordion } from "@/components/ui/accordion"
import { FaqItem } from "@/components/faq-item"
import { FAQ_ITEMS } from "@/lib/constants/site-data"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function FaqSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const accordionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1 })

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

      // FAQ items stagger animation - simplified
      if (accordionRef.current) {
        const items = accordionRef.current.querySelectorAll("[data-faq-item]")
        if (items && items.length > 0) {
          gsap.set(items, { opacity: 1 })
          gsap.from(items, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: accordionRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            }
          })
        }
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto lg:w-full">
        <div ref={titleRef} className="text-center mb-6 sm:mb-8 lg:mb-6 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            Questions
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
              {" "}Fréquentes
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Rejoindre La Solution en Énergie en tant qu'Apporteur d'Affaires
          </p>
        </div>

        <Accordion ref={accordionRef} type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const answerLines = item.answer.split("\n\n")
            return (
              <FaqItem
                key={item.value}
                value={item.value}
                question={item.question}
                answer={
                  <>
                    {answerLines.map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < answerLines.length - 1 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </span>
                    ))}
                  </>
                }
              />
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}
