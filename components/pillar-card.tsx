import type { ReactNode } from "react"
import { Card } from "@/components/ui/card"

interface PillarCardProps {
  icon: ReactNode
  title: string
  description: string
  benefits: string[]
}

export function PillarCard({ icon, title, description, benefits }: PillarCardProps) {
  return (
    <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border hover:border-primary/30 bg-card h-full">
      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed text-base">{description}</p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3 group/item">
            <span className="text-accent-foreground bg-accent rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
              ✓
            </span>
            <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
