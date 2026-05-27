import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 md:pt-40 lg:pt-52 md:pb-0 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 md:col-span-1 lg:col-span-2 space-y-6 md:space-y-8 relative">
            {/* Circular background effect */}
            <div className="absolute -top-32 -left-40 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-2 relative z-10">
              <p className="text-sm uppercase tracking-widest text-primary font-medium">
                Psicanalista & Mentora Emocional
              </p>
              <p className="text-sm text-muted-foreground md:text-base">
                Atendimento on-line e presencial em Salvador, BA
              </p>
              <div className="w-12 h-0.5 bg-primary" />
            </div>
            
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-foreground leading-tight text-balance relative z-10">
              Auxilio adultos a desenvolver{" "}
              <span className="italic text-primary">maturidade emocional</span>{" "}
              para viver com mais consciência e postura.
            </h1>
            
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg relative z-10">
              Você quer clareza, força interna e equilíbrio, mas não sabe como construir isso sozinho. 
              E talvez já tenha percebido que não é sobre pensar positivo, e sim ir à raiz.
            </p>

            <Link 
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:gap-4 group relative z-10"
            >
              <span>Agende sua Sessão</span>
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

          {/* Image */}
          <div className="order-1 md:order-2 md:col-span-1 lg:col-span-2 relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Decorative background with gradient */}
              <div className="absolute -inset-6 bg-linear-to-br from-secondary/25 via-secondary/15 to-secondary/5 rounded-3xl blur-2xl" />
              
              {/* Main image container with elegant frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-secondary/40">
                <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none" />
                <Image
                  src="/images/helena-hero.jpg"
                  alt="Helena Rodriguez - Psicanalista"
                  width={450}
                  height={550}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Elegant inner border */}
                <div className="absolute inset-3 border border-white/30 rounded-2xl pointer-events-none" />
              </div>
              
              {/* Top-right corner accent - using primary color */}
              <div className="absolute -top-2 -right-2 w-16 h-16 border-t-3 border-r-3 border-primary rounded-tr-2xl" />
              
              {/* Bottom-left corner accent - using secondary color */}
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-3 border-l-3 border-secondary rounded-bl-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
