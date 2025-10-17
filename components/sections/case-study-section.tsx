"use client"

import { CheckCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ContactFormModal } from "@/components/contact-form-modal"

gsap.registerPlugin(ScrollTrigger)

export function CaseStudySection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      title: "Récupération des documents",
      description: "Le Courtier a récupéré les factures et contrats du client en 2 jours"
    },
    {
      title: "Mise en concurrence de nos fournisseurs partenaires",
      description: "Le Pôle pricing a formulé une offre pour le Courtier sous 24h afin de préparer son rendez-vous"
    },
    {
      title: "Présentation des offres et signature du contrat",
      description: "Le Courtier a présenté une offre à prix fixe jusqu'à fin 2029 garantissant plus de 20 000 € d'économies par an pour le client et une sérénité dans le suivi de son contrat d'énergie"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 1 })
      if (badgeRef.current) gsap.set(badgeRef.current, { opacity: 1 })

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

      // PayFit-style sticky cards animation - toutes les cards (process + results)
      if (stepsRef.current) {
        const cards = stepsRef.current.querySelectorAll(".step-card")

        cards.forEach((card) => {
          // Animation d'entrée : de droite à gauche
          gsap.fromTo(card,
            {
              x: 200,
              opacity: 0
            },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 50%",
                scrub: 1
              }
            }
          )
        })
      }

      // Badge animation
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 leading-tight">
            Exemple de
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
              {" "}cas client
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Grâce à notre mise en concurrence des principaux fournisseurs et à une optimisation fine des profils de consommation,
            un établissement hôtelier a réalisé <strong className="text-foreground">plus de 20 % d'économies</strong> sur un budget
            énergétique annuel supérieur à 100 000 €.
          </p>
        </div>

        {/* Process Steps - Sticky Cards (PayFit style) */}
        <div ref={stepsRef} className="w-full max-w-4xl mx-auto mb-12 sm:mb-16" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card flex items-center justify-center"
            >
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl w-full">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-primary flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Results Cards - ajoutées dans le même conteneur */}
          <div className="step-card flex items-center justify-center">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Résultats Client
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">
                    <strong className="text-primary">Offre fixe et stable</strong> jusqu'en 2029
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">
                    <strong className="text-primary font-bold">20 000 €</strong> d'économies par an garanties
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">
                    Suivi personnalisé et visibilité complète via notre plateforme multisite
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="step-card flex items-center justify-center">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl w-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Rémunération Courtier
                </h3>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent mb-2">
                  +7 800 €
                </div>
                <p className="text-sm text-muted-foreground">
                  Commission perçue pour ce dossier
                </p>
              </div>
              <p className="text-sm text-foreground/80 mt-4 text-center">
                Un seul dossier, des revenus récurrents garantis
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Badge */}
        <div className="text-center mt-8">
          <button
            ref={badgeRef}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Réalisé en seulement quelques jours</span>
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section >
  )
}
