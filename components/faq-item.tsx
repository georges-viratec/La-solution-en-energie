import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ReactNode } from "react"

interface FaqItemProps {
  question: string
  answer: string | ReactNode
  value: string
}

export function FaqItem({ question, answer, value }: FaqItemProps) {
  return (
    <AccordionItem value={value} className="border-b border-border" data-faq-item>
      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-muted-foreground leading-relaxed whitespace-pre-line">
        {answer}
      </AccordionContent>
    </AccordionItem>
  )
}
