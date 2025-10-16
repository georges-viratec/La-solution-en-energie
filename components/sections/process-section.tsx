import { PROCESS_STEPS } from "@/lib/constants/site-data"

export function ProcessSection() {
  return (
    <section className="py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto lg:w-full">
        <div className="text-center mb-8 lg:mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            Notre Processus en
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
              4 Étapes Simples
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PROCESS_STEPS.map((step) => (
            <ProcessStepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessStepCard({
  number,
  title,
  description,
  badge,
  badgeIcon,
  highlighted
}: {
  number: string
  title: string
  description: string
  badge: string
  badgeIcon: string
  highlighted?: boolean
}) {
  const iconMap = {
    clock: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    chart: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    users: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    "trending-up": (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }

  const cardClass = highlighted
    ? "relative bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
    : "relative bg-card border-2 border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/30"

  const badgeClass = highlighted
    ? "inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/20 px-4 py-2 rounded-full"
    : "inline-flex items-center gap-2 text-sm font-medium text-foreground bg-primary/10 px-4 py-2 rounded-full"

  return (
    <div className={cardClass}>
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg">
        {number}
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 mt-2">{title}</h3>
      <p className="text-foreground/80 leading-relaxed mb-4 text-sm">{description}</p>
      <div className={badgeClass}>
        {iconMap[badgeIcon as keyof typeof iconMap]}
        <span className={highlighted ? "font-semibold" : ""}>{badge}</span>
      </div>
    </div>
  )
}
