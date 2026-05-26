import Image from "next/image"
import Link from "next/link"

export function About() {
  return (
    <section id="sobre" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 items-center">
          {/* Image - Larger and more prominent */}
          <div className="md:col-span-1 lg:col-span-2 relative flex justify-center">
            <div className="relative w-full max-w-xl">
              {/* Glow vindo de baixo — diferente da Hero que vem do topo */}
              <div className="absolute -inset-6 bg-gradient-to-tl from-primary/20 via-secondary/15 to-secondary/5 rounded-3xl blur-2xl" />

              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30 aspect-[3/4]">
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent pointer-events-none z-10" />
                <Image
                  src="/images/helena-about.jpg"
                  alt="Helena Rodriguez em seu consultório"
                  fill
                  className="object-cover object-top"
                />
                {/* Inner border */}
                <div className="absolute inset-3 border border-white/25 rounded-2xl pointer-events-none z-10" />
              </div>

              {/* Corner accents — invertidos em relação à Hero */}
              <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-secondary rounded-tl-2xl" />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-2xl" />

              {/* Quote badge */}
              <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-2xl border border-border max-w-xs hidden lg:block z-20">
                <p className="font-serif text-base text-foreground italic leading-relaxed">
                  "Seja como as ondas, faça de cada recuo um impulso para ir adiante."
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-1 lg:col-span-1 space-y-6 relative">
            {/* Circular background effect */}
            <div className="absolute -top-20 -right-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
                Sobre mim
              </p>
              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground mb-4 text-balance">
                Acolhimento, consciência e transformação
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-base leading-relaxed relative z-10">
              <p>
                Amante da mente humana, com experiência em diversas abordagens terapêuticas, auxilio
                meus clientes em um processo de desenvolvimento amplo e profundo em diferentes áreas da vida.
              </p>
              <p>
                Com formação pelo <strong className="text-foreground">Instituto Brasileiro de Formação de Terapeutas (IBFT)</strong> e pelo <strong className="text-foreground">Instituto Saber Consciente</strong>, uno filosofia e uma abordagem acolhedora e profunda para proporcionar processos transformadores e alcançar objetivos sólidos.
              </p>
            </div>

            <Link 
              href="#contato"
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all group font-medium relative z-10"
            >
              <span>Comece sua jornada de transformação</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
