import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import { TestimonialCard } from "@/components/testimonial-card"
import { FaqItem } from "@/components/faq-item"
import { Accordion } from "@/components/ui/accordion"
import { Zap, TrendingUp, ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <section className="relative overflow-hidden h-screen px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            {/* Logo top left */}
            <div className="absolute top-8 left-4 sm:left-6 lg:left-8">
              <Image src="/logo.png" alt="La Solution en Énergie" width={120} height={40} className="object-contain" />
            </div>

            {/* Centered content */}
            <div className="text-center space-y-6 max-w-5xl mx-auto">
              {/* Top badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-sm font-medium text-foreground">Participez à la révolution du courtage en énergie</span>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Devenez courtier en{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
                  énergie
                </span>{" "}
                indépendant
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Rejoignez <strong className="text-foreground">La Solution en Énergie</strong>, expert de la mise en concurrence des fournisseurs
                d'électricité et de gaz pour les professionnels. Le réseau qui transforme un marché en pleine
                explosion grâce à l'intelligence artificielle et la performance commerciale.
              </p>

              {/* Stats cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10 pt-4 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-foreground mb-3">
                    <AnimatedCounter end={1000} prefix="+" />
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground font-medium">professionnels accompagnés</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-foreground mb-3">
                    <AnimatedCounter end={1} suffix="M€" />
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground font-medium">de commissions distribuées</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-foreground mb-3">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <p className="text-sm lg:text-base text-muted-foreground font-medium">partenaires en France</p>
                </div>
              </div>

              {/* Rating */}
              <div className="pt-4">
                <div className="flex gap-1 justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500 animate-in zoom-in duration-700"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <p className="text-base font-semibold">
                  <span className="text-accent-foreground">98%</span>{" "}
                  <span className="text-foreground">CLIENTS SATISFAITS</span>
                </p>
              </div>

              {/* CTA button */}
              <div className="pt-4">
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background text-base px-10 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                >
                  Nous rejoindre
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </section>


        <section className="relative py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 lg:w-full">
            <div className="text-center mb-8 lg:mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
                4 piliers pour développer
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
                  vos revenus récurrents
                </span>
              </h2>
            </div>

            {/* Horizontal scrollable container */}
            <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 lg:overflow-visible">
              <div className="flex gap-6 min-w-max lg:grid lg:grid-cols-4 lg:min-w-0 lg:gap-8">
                {/* Pillar 1 - Revenus Illimités */}
                <div className="w-[320px] lg:w-auto lg:h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex-shrink-0 flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Revenus Illimités</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                    Rejoindre notre réseau, c'est choisir une liberté totale : vous développez votre portefeuille à votre
                    rythme, sans plafond de rémunération. Chaque dossier signé vous rapporte une commission directe, et
                    vos clients fidèles génèrent des revenus récurrents.
                  </p>
                  <ul className="space-y-2">
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
                      <span className="text-sm text-foreground">Commissions immédiates et récurrentes</span>
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
                      <span className="text-sm text-foreground">Liberté totale d'organisation</span>
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
                      <span className="text-sm text-foreground">Aucun plafond de gains</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2 - Outils Professionnels */}
                <div className="w-[320px] lg:w-auto lg:h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex-shrink-0 flex flex-col">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Outils Professionnels & Leads Qualifiés</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                    Accédez à notre écosystème digital complet : comparateur intelligent d'offres, plateforme de suivi
                    client, espace personnel pour gérer vos contrats et vos commissions. Nous mettons également à votre
                    disposition des leads qualifiés issus de nos campagnes marketing et partenariats.
                  </p>
                  <ul className="space-y-2">
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
                      <span className="text-sm text-foreground">Accès à un comparateur d'offres exclusif</span>
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
                      <span className="text-sm text-foreground">Plateforme de gestion simple et intuitive</span>
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
                      <span className="text-sm text-foreground">Leads fournis et ciblés selon votre profil</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3 - Formation & Coaching */}
                <div className="w-[320px] lg:w-auto lg:h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex-shrink-0 flex flex-col">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-accent-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Formation & Coaching Continu</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                    Aucune expérience requise : nous vous formons à toutes les étapes du métier. De la découverte du
                    marché énergétique à la négociation client, vous bénéficiez d'un programme de formation accélérée et
                    d'un accompagnement individuel par nos managers et experts.
                  </p>
                  <ul className="space-y-2">
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
                      <span className="text-sm text-foreground">Formation complète et gratuite</span>
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
                      <span className="text-sm text-foreground">Coaching personnalisé par nos experts</span>
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
                      <span className="text-sm text-foreground">Progression rapide et valorisante</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 4 - Marché en Explosion */}
                <div className="w-[320px] lg:w-auto lg:h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex-shrink-0 flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Un Marché en Pleine Explosion</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                    Le marché de l'énergie connaît une croissance historique : la majorité des entreprises cherchent
                    aujourd'hui à réduire leurs coûts et à comprendre leurs contrats. Devenez leur interlocuteur
                    privilégié et profitez d'un secteur en pleine mutation, porteur, durable et lucratif.
                  </p>
                  <ul className="space-y-2">
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
                      <span className="text-sm text-foreground">Secteur en forte demande</span>
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
                      <span className="text-sm text-foreground">Opportunités durables et croissantes</span>
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
                      <span className="text-sm text-foreground">Activité utile, rentable et moderne</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 - PROCESSUS EN 4 ÉTAPES */}
        <section className="py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto lg:w-full">
            <div className="text-center mb-8 lg:mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Notre Processus en
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">4 Étapes Simples</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Step 01 */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                  01
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 mt-2">Récupération des Documents</h3>
                <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                  Collecte des factures d'énergie et des contrats existants du client. Ces éléments permettent d'analyser
                  sa situation actuelle et de définir les meilleures opportunités du marché.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-primary/10 px-4 py-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Durée moyenne : 24 à 48h</span>
                </div>
              </div>

              {/* Step 02 */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                  02
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 mt-2">Mise en Concurrence des Fournisseurs</h3>
                <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                  Grâce à notre plateforme interne, nous comparons en temps réel les offres des fournisseurs d'électricité
                  et de gaz. Chaque proposition est évaluée selon le profil de consommation, la durée et les conditions
                  tarifaires.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-primary/10 px-4 py-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span>Process automatisé et rapide</span>
                </div>
              </div>

              {/* Step 03 */}
              <div className="relative bg-card border-2 border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
                  03
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 mt-2">Présentation des Offres & Closing Client</h3>
                <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                  Tu présentes au client les meilleures offres négociées, de manière claire et transparente. Un manager ou
                  closer peut t'accompagner pour finaliser la signature et sécuriser le contrat.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-primary/10 px-4 py-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Accompagnement commercial personnalisé</span>
                </div>
              </div>

              {/* Step 04 */}
              <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg">
                  04
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 mt-2">Rémunération & Récurrence</h3>
                <p className="text-foreground/80 leading-relaxed mb-4 text-sm">
                  Une fois le contrat signé, ta commission est validée et versée rapidement. Tu continues de percevoir une
                  rémunération récurrente sur les renouvellements et suivis clients.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/20 px-4 py-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="font-semibold">Revenus durables et évolutifs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center lg:w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Prêt à développer
              <br />
              <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">vos revenus ?</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Rejoignez notre réseau de partenaires et commencez à générer des revenus récurrents dès votre première
              référence validée.
            </p>

            <div className="bg-card border border-border rounded-3xl overflow-hidden mb-8 aspect-video flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                  <svg className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background text-lg px-10 py-7 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Devenir Partenaire
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Formation incluse • Support dédié</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto lg:w-full">
            <div className="text-center mb-8 lg:mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Ils nous font confiance et
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">partagent leurs résultats</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Découvrez les témoignages authentiques de nos clients entreprises et de nos partenaires commerciaux.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <TestimonialCard
                name="Sophie Martin"
                role="Directrice, Restaurant Le Gourmet"
                content="Grâce à La Solution en Énergie, nous avons réduit nos factures d'électricité de 30%. Un service professionnel et efficace."
                rating={5}
                isGoogle={true}
              />
              <TestimonialCard
                name="Thomas Dubois"
                role="Partenaire Commercial"
                content="En 6 mois, j'ai généré plus de 15 000€ de commissions. La formation et les outils fournis sont exceptionnels."
                rating={5}
              />
              <TestimonialCard
                name="Marie Lefebvre"
                role="Gérante, Boulangerie Artisanale"
                content="Un accompagnement personnalisé et des économies réelles. Je recommande vivement leurs services."
                rating={5}
                isGoogle={true}
              />
              <TestimonialCard
                name="Alexandre Petit"
                role="Partenaire Commercial"
                content="La liberté de travailler à mon rythme tout en ayant un revenu récurrent. C'est exactement ce que je cherchais."
                rating={5}
              />
              <TestimonialCard
                name="Jean-Pierre Moreau"
                role="Directeur, Garage Auto Plus"
                content="Des économies substantielles sur nos contrats gaz et électricité. Service rapide et transparent."
                rating={5}
                isGoogle={true}
              />
              <TestimonialCard
                name="Camille Bernard"
                role="Partenaire Commercial"
                content="Les leads fournis sont de qualité et le support commercial est toujours disponible. Une vraie opportunité."
                rating={5}
              />
            </div>

            {/* SECTION CONTACT INTÉGRÉE */}
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Besoin d'aide ou d'informations
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">complémentaires ?</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {/* Téléphone */}
              <a href="tel:0184883245" className="bg-card border border-border rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 block hover:border-primary/30 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">Téléphone</h4>
                <p className="text-foreground font-semibold text-sm mb-1">01 84 88 32 45</p>
                <p className="text-xs text-muted-foreground">Lun-Ven 9h-18h</p>
              </a>

              {/* Email */}
              <a href="mailto:contact@courtier-energie-pro.fr" className="bg-card border border-border rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 block hover:border-primary/30 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">Email</h4>
                <p className="text-foreground font-semibold text-sm mb-1">contact@courtier-energie-pro.fr</p>
                <p className="text-xs text-muted-foreground">Réponse sous 4h</p>
              </a>

              {/* Chat en ligne */}
              <a href="mailto:contact@courtier-energie-pro.fr?subject=Support%20Chat%20en%20ligne" className="bg-card border border-border rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 block hover:border-primary/30 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-foreground mb-2">Chat en ligne</h4>
                <p className="text-foreground font-semibold text-sm mb-1">Support instantané</p>
                <p className="text-xs text-muted-foreground">Disponible maintenant</p>
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto lg:w-full">
            <div className="text-center mb-8 lg:mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                Questions
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">Fréquentes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Rejoindre La Solution en Énergie en tant qu'Apporteur d'Affaires
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <FaqItem
                value="item-1"
                question="1. Qu'est-ce que le métier de courtier en énergie ?"
                answer={
                  <>
                    Le courtier en énergie accompagne les entreprises dans la réduction de leurs coûts d'électricité et de gaz.<br /><br />
                    Grâce à nos outils et à notre expertise, nous mettons en concurrence nos fournisseurs partenaires afin d'obtenir les meilleures conditions pour chaque client.<br /><br />
                    C'est un métier moderne, utile et en pleine croissance, au cœur des enjeux économiques et écologiques actuels.
                  </>
                }
              />
              <FaqItem
                value="item-2"
                question="2. Quel est le rôle d'un apporteur d'affaires ?"
                answer={
                  <>
                    L'apporteur d'affaires a un rôle simple : il met en relation des entreprises avec La Solution en Énergie.<br /><br />
                    Vous identifiez des professionnels susceptibles d'être intéressés par une optimisation de leurs contrats énergétiques, puis nos équipes s'occupent de tout (analyse, négociation, signature).<br /><br />
                    À chaque contrat signé grâce à vous, vous touchez une commission immédiate ainsi qu'une rémunération récurrente.
                  </>
                }
              />
              <FaqItem
                value="item-3"
                question="3. Faut-il avoir de l'expérience dans le domaine ?"
                answer={
                  <>
                    Non, aucune expérience n'est nécessaire.<br /><br />
                    Nous proposons une formation en ligne complète et gratuite qui vous apprend :<br />
                    • Les bases du marché de l'énergie<br />
                    • Comment présenter notre service simplement<br />
                    • Comment générer des contacts qualifiés efficacement<br /><br />
                    En quelques heures, vous êtes prêt à démarrer avec toutes les clés du succès.
                  </>
                }
              />
              <FaqItem
                value="item-4"
                question="4. Quels outils mettez-vous à disposition ?"
                answer={
                  <>
                    Nous mettons à votre disposition un écosystème digital complet :<br />
                    • Une plateforme intuitive pour suivre vos contrats et vos commissions<br />
                    • Un comparateur d'offres fournisseurs partenaires<br />
                    • Un espace personnel pour gérer vos clients et documents<br />
                    • Des leads qualifiés issus de nos campagnes marketing<br /><br />
                    Tout est conçu pour vous permettre de performer facilement et rapidement.
                  </>
                }
              />
              <FaqItem
                value="item-5"
                question="5. Combien puis-je gagner ?"
                answer={
                  <>
                    Votre rémunération est 100% libre et sans plafond.<br /><br />
                    Chaque contrat signé vous rapporte une commission directe, et vos clients actifs génèrent des revenus mensuels récurrents.<br /><br />
                    Nos apporteurs gagnent en moyenne entre 1 000€ et 5 000–7 000€ par mois, selon leur implication et leur régularité.
                  </>
                }
              />
              <FaqItem
                value="item-6"
                question="6. Puis-je cumuler cette activité avec un autre emploi ?"
                answer={
                  <>
                    Oui, absolument. Vous travaillez en toute liberté, à votre rythme, sans horaires imposés ni objectifs obligatoires.<br /><br />
                    C'est une activité flexible et accessible à tous.
                  </>
                }
              />
              <FaqItem
                value="item-7"
                question="7. Qui peut devenir apporteur d'affaires ?"
                answer={
                  <>
                    Toute personne motivée souhaitant développer un complément de revenu durable.<br /><br />
                    Aucune contrainte, aucun statut spécifique nécessaire : il suffit d'avoir envie de partager nos services et d'aider les entreprises à économiser sur leurs factures.
                  </>
                }
              />
              <FaqItem
                value="item-8"
                question="8. Pourquoi rejoindre La Solution en Énergie ?"
                answer={
                  <>
                    • Une société reconnue dans le courtage en énergie<br />
                    • Des partenariats solides avec des fournisseurs fiables<br />
                    • Une formation digitale gratuite et accessible 24h/24<br />
                    • Des revenus illimités et transparents<br />
                    • Un accompagnement individuel et un réseau actif de plus de 100 partenaires
                  </>
                }
              />
              <FaqItem
                value="item-9"
                question="9. Comment démarrer ?"
                answer={
                  <>
                    1. Remplissez le formulaire d'inscription sur notre site<br />
                    2. Suivez la formation en ligne à votre rythme<br />
                    3. Commencez à recommander nos services et à toucher vos premières commissions
                  </>
                }
              />
            </Accordion>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="La Solution en Énergie" width={40} height={40} className="object-contain" />
                <span className="text-xl font-bold text-foreground">La Solution en Énergie</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Votre partenaire de confiance pour optimiser les contrats énergétiques des entreprises et développer vos revenus récurrents.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Liens rapides</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Accueil</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">À propos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Comment ça marche</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Témoignages</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
              <div className="space-y-3">
                <a href="tel:0184883245" className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-muted-foreground hover:text-foreground">01 84 88 32 45</span>
                </a>
                <a href="mailto:contact@courtier-energie-pro.fr" className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-muted-foreground hover:text-foreground">contact@courtier-energie-pro.fr</span>
                </a>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-muted-foreground">Lun-Ven 9h-18h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 La Solution en Énergie. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Mentions légales</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
