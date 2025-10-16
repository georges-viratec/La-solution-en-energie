import { TestimonialCard } from "@/components/testimonial-card"
import { ContactCard } from "@/components/contact-card"
import { TESTIMONIALS, CONTACT_METHODS } from "@/lib/constants/site-data"

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto lg:w-full">
        <div className="text-center mb-8 lg:mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Ils nous font confiance et
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
              partagent leurs résultats
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez les témoignages authentiques de nos clients entreprises et de nos partenaires commerciaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* SECTION CONTACT INTÉGRÉE */}
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Besoin d'aide ou d'informations
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
              complémentaires ?
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {CONTACT_METHODS.map((method, index) => (
            <ContactCard key={index} {...method} />
          ))}
        </div>
      </div>
    </section>
  )
}
