"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Vou ter que falar de tudo da minha vida?",
    answer: "Você fala no seu tempo. Nada é forçado. O terapeuta respeita seus limites e acolhe o que você consegue trazer. Para quem é mais reservado ou vive dores difíceis de verbalizar, utilizamos a metodologia de reprocessamento emocional, que permite trabalhar questões internas sem precisar falar sobre elas, de forma eficaz e acolhedora."
  },
  {
    question: "Vou ficar dependente da terapia? Quanto tempo dura?",
    answer: "O objetivo é justamente o oposto: fortalecer sua autonomia para lidar melhor com a vida fora da sessão. O tempo para que isso aconteça varia conforme sua dedicação e nível de evolução pessoal. Quando esse objetivo é alcançado, a terapia passa a ser um ambiente de apoio, utilizado nos momentos de dúvida ou quando você sente necessidade de realinhar o caminho."
  },
  {
    question: "Terapia é só para quem está 'mal'?",
    answer: "Não. Terapia é para quem deseja se conhecer, evoluir emocionalmente, criar limites, melhorar relações e ter mais clareza sobre a própria vida. Libertar-se dos transtornos emocionais é uma consequência natural de quem fortaleceu o próprio eu."
  },
  {
    question: "O terapeuta vai me julgar?",
    answer: "O ambiente terapêutico é um espaço seguro, sigiloso e sem julgamentos. É o lugar onde você pode expressar até seus pensamentos mais reprimidos e, em vez de julgamento, receber acolhimento e ajuda para compreendê-los. No ambiente terapêutico não existe 'certo ou errado': existe você se permitindo entender e construir novas percepções sobre si mesmo."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-secondary/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Dúvidas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-serif text-lg text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
