"use client"

import Image from "next/image"
import { FOOTER_LINKS } from "@/lib/constants/site-data"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function FooterSection() {
  const gridRef = useRef<HTMLDivElement>(null)
  const copyrightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grid columns animation
      if (gridRef.current) {
        const columns = gridRef.current.children
        if (columns && columns.length > 0) {
          gsap.set(columns, { opacity: 1 })
          gsap.from(columns, {
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          })
        }
      }

      // Copyright section animation
      if (copyrightRef.current) {
        gsap.set(copyrightRef.current, { opacity: 1 })
        gsap.from(copyrightRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: copyrightRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Logo et description */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Image
                src="/logo.png"
                alt="La Solution en Énergie"
                width={32}
                height={32}
                className="object-contain sm:w-[40px] sm:h-[40px]"
              />
              <span className="text-lg sm:text-xl font-bold text-foreground">La Solution en Énergie</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md">
              Votre partenaire de confiance pour optimiser les contrats énergétiques des entreprises et développer vos
              revenus récurrents.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm sm:text-base text-muted-foreground">
                  17 rue Louise Michel<br />
                  92300 Levallois-Perret
                </span>
              </div>
              <a
                href="tel:0189705632"
                className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm sm:text-base text-muted-foreground hover:text-foreground">01 89 70 56 32</span>
              </a>
              <a
                href="mailto:recrutement@lasolutionenenergie.fr"
                className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm sm:text-base text-muted-foreground hover:text-foreground break-words">recrutement@lasolutionenenergie.fr</span>
              </a>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm sm:text-base text-muted-foreground">Lun-Ven 9h-18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div ref={copyrightRef} className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 mb-3">
            <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-left">© 2025 La Solution en Énergie. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              {FOOTER_LINKS.legal.map((link, index) => (
                <a key={index} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground/60 text-[10px] sm:text-xs">
              Développé par{" "}
              <a
                href="https://viratec.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/70 hover:text-muted-foreground transition-colors"
              >
                Viratec
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
