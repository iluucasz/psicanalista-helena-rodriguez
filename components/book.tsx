import Image from "next/image"
import { BookOpen, Star } from "lucide-react"

export function Book() {
  return (
    <section id="publicacoes" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-mono uppercase tracking-widest text-primary">Publicações</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Último Lançamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um livro que une filosofia, ciência e espiritualidade
          </p>
        </div>

        {/* Book Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          {/* Circular background effect */}
          <div className="absolute -top-40 -right-60 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

          {/* Book Cover */}
          <div className="flex justify-center md:justify-start relative z-10">
            {/* Circular glow behind book image */}
            <div className="absolute -inset-12 bg-secondary/20 rounded-full blur-2xl" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4b22511189ac401689951afd314ffa40-7NT3b6WbxIzWgyZhYZEApfObC7wtEx.png"
              alt="Da Caverna à Evolução - Helena Rodriguez"
              width={300}
              height={450}
              className="w-full max-w-sm relative z-10"
              priority
            />
          </div>

          {/* Book Info */}
          <div className="space-y-6 relative z-10">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-primary mb-3">
                Da Caverna à Evolução
              </h3>
              <p className="text-sm font-mono uppercase tracking-widest text-secondary mb-4">
                O Homem em Progresso
              </p>
            </div>

            {/* Book Description */}
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                <em>Das Cavernas à Evolução</em> é uma jornada que une filosofia, ciência e espiritualidade na busca pela compreensão do ser humano e do universo em que está inserido.
              </p>
              <p>
                Inspirada na alegoria da caverna de Platão, a obra propõe reflexões sobre a origem da vida, o propósito da existência humana e o papel do homem como ser consciente em constante evolução.
              </p>
            </div>

            {/* Key Themes */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-foreground">Filosofia e autoconhecimento</p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-foreground">Espiritualidade e propósito</p>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-foreground">Evolução pessoal e consciência</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <a
                href="https://pay.hotmart.com/M102747619S?checkoutMode=10&bid=1779822441770"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary text-primary rounded-lg font-medium hover:bg-secondary/90 transition-colors text-center"
              >
                Adquirir Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
