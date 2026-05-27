import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, CirclePlay, GraduationCap, Sparkles, Target, Users } from "lucide-react"
import { Header } from "@/components/header"
import { TopBar } from "@/components/topbar"
import { Footer } from "@/components/footer"

const signals = [
  "Sabe que pode ir mais longe, mas o medo ou algumas crenças internas acabam travando seu crescimento.",
  "Deseja alcançar o sucesso pessoal, mas ainda duvida do seu próprio potencial.",
  "Tem dificuldade de imaginar e sustentar um futuro positivo.",
  "Sente dificuldade de organizar suas prioridades e construir um caminho para o sucesso.",
  "Precisa de um propósito a seguir."
]

const impacts = ["Autossabotagem", "Frustração", "Incerteza", "Instabilidade", "Estagnação"]

const benefits = [
  "Transformar suas dores em força e aprendizado",
  "Desenvolver controle emocional e equilíbrio",
  "Se posicionar com mais confiança diante da vida",
  "Avançar com propósito, direção e consciência"
]

export default function MentoriaRotaClaraPage() {
  return (
    <>
      <TopBar />
      <Header />
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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Mentoria Rota Clara
            </div>

            <div className="space-y-5">
              <h1 className="font-serif text-4xl leading-tight text-balance text-white md:text-5xl lg:text-6xl">
                Para quem cansou de sobreviver e quer viver com intenção e resultado.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
                Uma imersão pra quem sabe que pode ir mais longe mas precisa de direção e firmeza emocional para avançar com consciência.
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
                  { icon: Users, label: "5 etapas com 5 encontros individuais" },
                  { icon: Target, label: "Foco total no seu resultado" },
                  { icon: GraduationCap, label: "Metodologia comprovada" },
                  { icon: CirclePlay, label: "Bônus exclusivo" }
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

              <div className="mt-6 rounded-3xl border border-white/20 bg-slate-950/75 p-6 text-white/90">
                <p className="text-sm leading-relaxed md:text-base">
                  1 encontro após 6 meses para acompanhamento, ajustes e avaliação dos resultados.
                </p>
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
              <p className="text-sm font-medium uppercase tracking-widest text-secondary">Você percebeu que...</p>
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

              <div className="relative overflow-hidden rounded-4xl border border-secondary/45 bg-linear-to-br from-slate-900/92 via-slate-900/88 to-primary/25 p-8 ring-1 ring-secondary/25 shadow-[0_30px_95px_-40px_rgba(158,166,254,0.5)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-secondary/25 blur-3xl" />
                <p className="relative text-lg leading-relaxed text-white/90 md:text-xl">
                  Cada encontro é realizado sem pressa e sem tempo cronometrado. Você será conduzido a
                  enxergar com <span className="font-semibold text-secondary">clareza</span> aquilo que te
                  trava, te confunde e te impede de avançar, trabalhando cada ponto de forma
                  <span className="font-semibold text-secondary"> estratégica</span> para que, ao final do
                  processo, conquiste uma vida mais <span className="font-semibold text-secondary">leve</span>,
                  <span className="font-semibold text-secondary"> consciente</span> e com
                  <span className="font-semibold text-secondary"> resultados reais</span> naquilo que busca.
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
              Viver sabendo lidar com suas emoções sem se sentir refém delas, ter clareza nas suas decisões, segurança nas suas ações e paz dentro de você. Você será capaz.
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