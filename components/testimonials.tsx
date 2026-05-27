"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

type Testimonial = {
  quote: string
  name?: string
  age?: string
}

type TestimonialsProps = {
  items?: Testimonial[]
  title?: string
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "A terapia com você foi reveladora. Essa dependência vinha de padrões antigos que eu carregava e nem me dava conta. Quando consegui enxergar isso, foi bom demais. Hoje sou dona das minhas escolhas e não dependo mais de ninguém para me sentir completa.",
    name: "V. Melo",
    age: "55 anos"
  },
  {
    quote: "Me ajudou muito a superar minha insegurança e recuperar meu amor próprio. Hoje me sinto mais segura e forte.",
    name: "H. Andrade",
    age: "37 anos"
  },
  {
    quote: "Oi Helena, só passando pra dizer que saí da sessão hoje me sentindo tão mais leve... parecia que tava carregando um peso enorme e finalmente consegui respirar melhor. Obrigada mesmo, você não tem ideia de como me ajudou ❤️",
    name: "K. Avelar",
    age: "23 anos"
  },
  {
    quote: "A terapia com você foi reveladora. Essa dependência vinha de padrões que eu carregava e nem me dava conta. Quando consegui enxergar isso, foi bom demais. Hoje sou dono das minhas escolhas e não dependo mais de ninguém para me sentir inteiro.",
    name: "E. Guimarães",
    age: "29 anos"
  }
]

const starLayout = [
  { size: 48, offset: 12 },
  { size: 56, offset: 6 },
  { size: 68, offset: 0 },
  { size: 56, offset: 6 },
  { size: 48, offset: 12 }
]

export function Testimonials({ items = defaultTestimonials, title = "O que os clientes dizem" }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (items.length === 0) {
    return null
  }

  const currentTestimonial = items[currentIndex] ?? items[0]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <section id="depoimentos" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary-foreground/70 font-medium mb-4">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-balance">
            {title}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute -top-8 left-0 opacity-20">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10 text-center">
            {/* Stars Rating with curve effect */}
            <div className="mb-8 flex items-start justify-center gap-2 md:gap-3">
              {starLayout.map((star, i) => (
                <div
                  key={i}
                  className="transition-transform duration-300"
                  style={{
                    transform: `translateY(${star.offset}px)`,
                    animation: `starCurve 0.6s ease-out ${i * 0.1}s both`
                  }}
                >
                  <div className="transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
                    <Star
                      className="fill-secondary text-secondary"
                      style={{ width: star.size, height: star.size }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mb-8 italic whitespace-pre-line">
              {`"${currentTestimonial.quote}"`}
            </blockquote>

            {currentTestimonial.name ? (
              <div className="flex items-center justify-center gap-2">
                <span className="font-medium">{currentTestimonial.name}</span>
                {currentTestimonial.age ? (
                  <>
                    <span className="text-primary-foreground/60">•</span>
                    <span className="text-primary-foreground/80">{currentTestimonial.age}</span>
                  </>
                ) : null}
              </div>
            ) : null}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary-foreground w-6" 
                      : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 border border-primary-foreground/30 rounded-full hover:bg-primary-foreground/10 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
