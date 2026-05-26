import { AlertCircle, Brain, Heart, Shield, Sparkles, Users } from "lucide-react"

const problems = [
  {
    icon: AlertCircle,
    title: "Reatividade emocional",
    description: "Reage antes de pensar, fala o que não devia e depois se culpa"
  },
  {
    icon: Shield,
    title: "Insegurança e indecisão",
    description: "Dificuldade de tomar decisões difíceis o que atrapalha o seu crescimento profissional e pessoal"
  },
  {
    icon: Heart,
    title: "Relações difíceis",
    description: "Relações marcadas por carência, dependência ou medo de abandono"
  },
  {
    icon: Users,
    title: "Dificuldade com limites",
    description: "Dificuldade de colocar limites e dizer não sem culpa"
  },
  {
    icon: Sparkles,
    title: "Instabilidade emocional",
    description: "Sensibilidade excessiva e oscilações de humor frequentes"
  },
  {
    icon: Brain,
    title: "Mente confusa",
    description: "Pensamentos acelerados, pouca clareza e perda de foco constante"
  }
]

export function Problems() {
  return (
    <section id="problemas" className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Você se identifica?
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 text-balance">
            Você sabe que tem potencial, mas sente que sempre falta algo?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Se você sente que está vivendo abaixo do seu potencial e deseja amadurecer emocionalmente 
            para conquistar mais autonomia, equilíbrio e clareza, eu vou te ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
