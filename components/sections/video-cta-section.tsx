import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function VideoCtaSection() {
  return (
    <section className="py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center lg:w-full px-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
          Prêt à développer
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
            {" "}vos revenus ?
          </span>
        </h2>
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          Rejoignez notre réseau de partenaires et commencez à générer des revenus récurrents dès votre première
          référence validée.
        </p>

        <div className="bg-card border border-border rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8 aspect-video flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background text-sm sm:text-base lg:text-lg px-8 py-5 sm:px-10 sm:py-6 lg:py-7 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            Devenir Partenaire
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Formation incluse • Support dédié</span>
          </div>
        </div>
      </div>
    </section>
  )
}
