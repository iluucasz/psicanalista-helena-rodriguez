import Link from "next/link"
import { ArrowRight, BrainCircuit, Compass, Sparkles, Waves } from "lucide-react"

const services = [
  {
    title: "Terapia TRG",
    description:
      "Terapia de Reprocessamento Generativo aqui acessamos dores profundas com leveza e direcionamento. Ideal para quem viveu situações difíceis que não gostaria de expor, essa abordagem utiliza visualização, percepção e ressignificação para promover compreensão emocional e alívio interno.",
    icon: Waves,
    image:
      "https://ogmg.my.canva.site/helenarodriguez/_assets/media/0fce2e311b40916fac3524f626f85cac.jpg"
  },
  {
    title: "Atendimento Psicanalítico",
    description:
      "Um espaço de escuta e interpretação para compreender repetições, conflitos e a raiz do sofrimento emocional.",
    icon: BrainCircuit,
    image:
      "https://ogmg.my.canva.site/helenarodriguez/_assets/media/11bdb2851f2092695f3a89aa1f16752c.jpg"
  },
  {
    title: "Sessões Integradas",
    description:
      "Encontros que unem diferentes abordagens para ampliar consciência, fortalecer recursos internos e acelerar mudanças.",
    icon: Sparkles,
    image:
      "https://ogmg.my.canva.site/helenarodriguez/_assets/media/9a55b06eb9a5b0721645ed3ec9d95de8.jpg"
  },
  {
    title: "Mentoria Rota Clara",
    description:
      "Direcionamento estratégico para quem busca postura, discernimento e alinhamento nas várias áreas da vida.",
    icon: Compass,
    image:
      "https://ogmg.my.canva.site/helenarodriguez/_assets/media/18fe88f61380a49b7659800b58b0c582.png",
    href: "/mentoria-rota-clara"
  }
]

export function Services() {
  return (
    <section id="servicos" className="relative overflow-x-clip py-24 md:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-secondary/25 to-transparent pointer-events-none" />
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute -right-24 bottom-16 h-80 w-80 rounded-full bg-secondary/18 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Serviços
          </p>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
            Diferentes caminhos terapêuticos para o momento que você vive
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Cada processo atende uma necessidade distinta. A escolha certa considera sua história,
            o que você deseja transformar agora e a profundidade desse movimento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            const hasImage = Boolean(service.image)

            const cardContent = (
              <>
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-linear-to-bl from-secondary/25 to-transparent blur-2xl transition-transform duration-300 group-hover:scale-125" />

                <div className="relative mb-8 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                    {hasImage ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Icon className="h-8 w-8" />
                    )}
                  </div>
                  <span className="font-mono text-sm text-primary/50">0{index + 1}</span>
                </div>

                <div className="relative space-y-4">
                  <h3 className="font-serif text-2xl leading-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  {service.href ? (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Conhecer mentoria
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  ) : null}
                </div>
              </>
            )

            return service.href ? (
              <Link
                key={service.title}
                href={service.href}
                className="group relative block overflow-hidden rounded-4xl border border-border/70 bg-card/80 p-7 shadow-[0_20px_60px_-35px_rgba(20,32,90,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_28px_70px_-30px_rgba(20,32,90,0.45)]"
              >
                {cardContent}
              </Link>
            ) : (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-4xl border border-border/70 bg-card/80 p-7 shadow-[0_20px_60px_-35px_rgba(20,32,90,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_28px_70px_-30px_rgba(20,32,90,0.45)]"
              >
                {cardContent}
              </article>
            )
          })}
        </div>

        <div className="relative mt-12 overflow-hidden rounded-4xl border border-primary/15 bg-primary px-8 py-10 text-primary-foreground shadow-[0_25px_80px_-40px_rgba(14,29,97,0.85)] md:px-12">
          <div className="absolute -right-8 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-secondary/25 blur-2xl pointer-events-none" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
                Direcionamento inicial
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-balance">
                Descubra qual serviço faz mais sentido para você agora.
              </h3>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Se você ainda não sabe por onde começar, uma conversa inicial ajuda a identificar o melhor caminho terapêutico para sua necessidade atual.
              </p>
            </div>

            <Link
              href="#contato"
              className="inline-flex items-center justify-center gap-3 self-start rounded-full bg-secondary px-7 py-4 text-base font-medium text-primary transition-all duration-300 hover:gap-4 hover:bg-secondary/90"
            >
              <span>Sessão de direcionamento</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}