import { PILLARS } from "@/lib/constants/site-data"

export function PillarsSection() {
  return (
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
            {PILLARS.map((pillar) => (
              <PillarCardContent key={pillar.id} {...pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PillarCardContent({
  title,
  description,
  icon,
  color,
  features
}: {
  title: string
  description: string
  icon: string
  color: string
  features: readonly string[]
}) {
  const iconMap = {
    "trending-up": (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    settings: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    "graduation-cap": (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
    chart: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    )
  }

  const colorMap: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    blue: "bg-blue-500/10 text-blue-600",
    accent: "bg-accent/10 text-accent-foreground"
  }

  return (
    <div className="w-[320px] lg:w-auto lg:h-full bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group flex-shrink-0 flex flex-col">
      <div
        className={`w-12 h-12 rounded-full ${colorMap[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {iconMap[icon as keyof typeof iconMap]}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-foreground/80 leading-relaxed mb-4 text-sm">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-accent-foreground" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
