import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import { STATS } from "@/lib/constants/site-data"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden h-screen px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Logo top left */}
        <div className="absolute top-8 left-4 sm:left-6 lg:left-8">
          <Image
            src="/logo.png"
            alt="La Solution en Énergie"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Centered content */}
        <div className="text-center space-y-6 max-w-5xl mx-auto">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm font-medium text-foreground">
              Participez à la révolution du courtage en énergie
            </span>
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
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-foreground mb-3">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm lg:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="pt-4">
            <div className="flex gap-1 justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-amber-500 text-amber-500 animate-in zoom-in duration-700"
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
  )
}
