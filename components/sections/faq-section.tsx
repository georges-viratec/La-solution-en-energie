import { Accordion } from "@/components/ui/accordion"
import { FaqItem } from "@/components/faq-item"
import { FAQ_ITEMS } from "@/lib/constants/site-data"

export function FaqSection() {
  return (
    <section className="py-12 md:py-16 lg:min-h-screen lg:flex lg:items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto lg:w-full">
        <div className="text-center mb-6 sm:mb-8 lg:mb-6 px-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            Questions
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-accent-foreground bg-clip-text text-transparent">
              {" "}Fréquentes
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Rejoindre La Solution en Énergie en tant qu'Apporteur d'Affaires
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const answerLines = item.answer.split("\n\n")
            return (
              <FaqItem
                key={item.value}
                value={item.value}
                question={item.question}
                answer={
                  <>
                    {answerLines.map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < answerLines.length - 1 && (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </span>
                    ))}
                  </>
                }
              />
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}
