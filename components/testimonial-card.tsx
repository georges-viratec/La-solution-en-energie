import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  isGoogle?: boolean
}

export function TestimonialCard({ name, role, content, rating, isGoogle = false }: TestimonialCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-foreground mb-4 leading-relaxed italic">"{content}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        {isGoogle && <div className="text-xs text-muted-foreground">Avis Google</div>}
      </div>
    </Card>
  )
}
