interface ProcessStepProps {
  number: string
  title: string
  description: string
  detail: string
  icon: string
}

export function ProcessStep({ number, title, description, detail, icon }: ProcessStepProps) {
  return (
    <div className="relative group">
      <div className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-accent-foreground">
              {number}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
            <p className="text-foreground mb-3 leading-relaxed">{description}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-lg">{icon}</span>
              <span className="font-medium">{detail}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
