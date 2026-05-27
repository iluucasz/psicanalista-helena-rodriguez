import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, CirclePlay, GraduationCap, Sparkles, Target, Users } from "lucide-react"
import { Header } from "@/components/header"
import { TopBar } from "@/components/topbar"
import { Footer } from "@/components/footer"

const signals = [
  "Em alguns momentos reage emocionalmente e depois se arrepende.",
  "Sente dificuldade em lidar com conflitos, críticas ou frustrações.",
  "Sabe que poderia ir mais longe, mas o medo ou algumas crenças internas acabam travando o seu crescimento.",
  "Tem a sensação de que existe um potencial maior dentro de você, mas algo sempre impede que avance."
]

const impacts = ["Autossabotagem", "Frustração", "Incerteza", "Instabilidade", "Estagnação"]

const benefits = [
  "Transformar suas dores em força e aprendizado",
  "Desenvolver controle emocional e equilíbrio",
  "Se posicionar com mais confiança diante da vida",
  "Avançar com propósito, direção e consciência"
]

const processSteps = [
  "Durante esse processo, vou te guiar a: observar seus padrões, reorganizar suas respostas e ampliar sua autoconsciência.",
  "O foco será você e o seu progresso, com acompanhamento voltado para clareza, movimento e consistência interna.",
  "Serão 5 encontros individuais e exclusivos, pensados para sustentar sua evolução com profundidade e direção."
]

export default function MentoriaRotaClaraPage() {
  return (
    <>
      <TopBar dark />
      <Header dark logoSrc="/images/logo-mentoria-clara.png" logoAlt="Logo Mentoria Rota Clara" />
      <main className="bg-slate-950 text-white">
      <section className="relative overflow-hidden pt-64 pb-20 md:pt-80 md:pb-28">
        <Image
          src="/images/fundo-mentoria-clara.png"
          alt="Fundo da Mentoria Rota Clara"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/35 to-black/65" />
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
        <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-secondary/30 blur-3xl pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Mentoria Rota Clara
            </div>

            <div className="space-y-5">
              <h1 className="font-serif text-4xl leading-tight text-balance text-white md:text-5xl lg:text-6xl">
                Para quem cansou de sobreviver e quer viver com intenção e verdade.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
                Uma experiência para quem sente que pode ir mais longe, mas precisa de clareza,
                firmeza emocional e direção para avançar com consciência.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#comecar"
                className="inline-flex items-center justify-center gap-4 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground no-underline transition-all hover:bg-primary/90"
              >
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#bonus"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white/15 px-7 py-4 text-base font-medium text-white no-underline transition-all hover:bg-white/20"
              >
                Ver bônus
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-primary/35 via-secondary/25 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-black/35 p-8 shadow-[0_30px_90px_-45px_rgba(20,32,90,0.4)] backdrop-blur-md">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { icon: Users, label: "5 encontros" },
                  { icon: Target, label: "Foco em progresso" },
                  { icon: GraduationCap, label: "Bônus e-book" },
                  { icon: CirclePlay, label: "Imersão guiada" }
                ].map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.label} className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <Icon className="mb-3 h-5 w-5 text-white" />
                      <p className="font-medium text-white">{item.label}</p>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 rounded-3xl border border-white/20 bg-white/10 p-6 text-white">
                <p className="text-sm uppercase tracking-widest text-white/75">
                  Bônus
                </p>
                <div className="mt-4 grid items-center gap-5 sm:grid-cols-[120px_1fr]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4b22511189ac401689951afd314ffa40-7NT3b6WbxIzWgyZhYZEApfObC7wtEx.png"
                    alt="Capa do e-book Da Caverna à Evolução"
                    width={120}
                    height={180}
                    sizes="(max-width: 640px) 96px, 120px"
                    className="mx-auto h-auto w-24 drop-shadow-2xl sm:mx-0 sm:w-30"
                  />
                  <div>
                    <p className="font-serif text-2xl leading-tight">
                      Acesso ao e-book <span className="italic">Da Caverna à Evolução - O Homem em Progresso</span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      Uma imersão no sentido da vida e no propósito da nossa existência: entenda o porquê de evoluir e por que estar aqui já é um grande passo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-4xl border border-white/12 bg-slate-900/70 p-8 shadow-[0_22px_70px_-45px_rgba(3,8,28,0.8)]">
              <p className="text-sm font-medium uppercase tracking-widest text-secondary">Você percebe que...</p>
              <div className="mt-6 space-y-4">
                {signals.map((signal) => (
                  <div key={signal} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                    <p className="leading-relaxed text-white/80">{signal}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-4xl border border-primary/30 bg-linear-to-br from-primary/90 via-primary/80 to-slate-900 px-8 py-10 text-primary-foreground shadow-[0_25px_90px_-55px_rgba(14,29,97,0.9)] md:px-10">
                <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/75">
                  Isso faz você sentir
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {impacts.map((impact) => (
                    <span key={impact} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                      {impact}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-white/12 bg-slate-900/70 p-8 shadow-[0_22px_70px_-45px_rgba(3,8,28,0.8)]">
                <p className="text-lg leading-relaxed text-white/80 md:text-xl">
                  Através de uma imersão profunda de autoconsciência e sabedoria interior, você será conduzido a enxergar com clareza aquilo que hoje te trava, te confunde ou te impede de avançar.
                </p>
                <p className="mt-5 text-lg font-medium leading-relaxed text-white md:text-xl">
                  Porém viver uma vida mais leve e consciente é possível!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/55 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-secondary">Imagine...</p>
            <h2 className="mt-4 font-serif text-3xl text-balance text-white md:text-4xl">
              Viver sabendo lidar com suas emoções sem se sentir refém delas, ter clareza nas suas decisões, segurança nas suas ações e paz dentro de você.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-[1.75rem] border border-white/12 bg-slate-900/75 p-6 shadow-[0_18px_60px_-45px_rgba(3,8,28,0.8)]">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
                <p className="mt-4 font-serif text-xl leading-tight text-white">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-4xl border border-white/12 bg-slate-900/70 p-8 shadow-[0_22px_70px_-45px_rgba(3,8,28,0.8)] md:p-10">
              <p className="text-sm font-medium uppercase tracking-widest text-secondary">Durante esse processo, vou te guiar a:</p>
              <div className="mt-6 space-y-4">
                {processSteps.map((step) => (
                  <div key={step} className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-white/80 leading-relaxed">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div id="bonus" className="rounded-4xl border border-primary/30 bg-linear-to-br from-primary/90 via-primary/80 to-slate-900 p-8 text-primary-foreground shadow-[0_25px_80px_-50px_rgba(14,29,97,0.9)] md:p-10">
              <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
                Bônus
              </p>
              <h3 className="mt-4 font-serif text-3xl text-balance">
                Acesso ao E-book Da Caverna á Evolução - O Homem em progresso
              </h3>
              <p className="mt-5 text-primary-foreground/85 leading-relaxed">
                Uma imersão no sentido da vida e no propósito da nossa existência: entenda o porquê de evoluir e por que estar aqui já é um grande passo.
              </p>
              <div className="mt-8 rounded-3xl bg-white/10 p-5 text-sm leading-relaxed text-primary-foreground/90">
                <p>Serão 5 encontros individuais e exclusivos.</p>
                <p className="mt-3">A sua transformação começa com uma decisão!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="comecar" className="bg-slate-900/65 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-secondary">Mentoria Rota Clara</p>
          <h2 className="mt-4 font-serif text-3xl text-balance text-white md:text-4xl">
            Para quem cansou de sobreviver e quer viver com intenção e verdade.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Se você reconheceu em si a necessidade de avançar com mais consciência, clareza e direção, essa mentoria foi desenhada para esse próximo passo.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://wa.me/557187265569?text=Ol%C3%A1%2C%20Helena!%20Quero%20come%C3%A7ar%20a%20Mentoria%20Rota%20Clara."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Começar agora
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 py-4 text-base font-medium text-white transition-all hover:border-white/40 hover:bg-white/15"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}