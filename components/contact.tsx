import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Circular background effects spanning entire section */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Center effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Side effects */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-secondary/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-card/50 rounded-3xl p-8 md:p-16 text-center backdrop-blur-sm">
          <div className="max-w-xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
              Pronta para começar?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 text-balance">
              Comece sua jornada de amadurecimento emocional
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              O primeiro passo para desenvolver maturidade emocional é decidir começar. 
              Entre em contato e agende sua consulta inicial.
            </p>

            <Link
              href="https://wa.me/557187265569?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all text-lg font-medium hover:gap-4 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Agendar pelo WhatsApp</span>
            </Link>

            <p className="mt-6 text-sm text-muted-foreground">
              Atendimento online • Sigilo garantido
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
