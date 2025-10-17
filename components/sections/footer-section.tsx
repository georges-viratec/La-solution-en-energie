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
    <footer className="relative border-t border-border overflow-hidden bg-background">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
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
                href="https://www.instagram.com/lasolutionenenergie?igsh=ZHl5eXVncnh0cXg0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
