import Link from "next/link"
import { Instagram, Mail, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl tracking-tight">
              Helena Rodriguez
              <span className="block text-sm font-sans text-primary-foreground/70 mt-1">
                Psicanalista & Mentora Emocional
              </span>
            </Link>
            <p className="mt-4 text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Auxilio adultos a desenvolver maturidade emocional para viver com mais consciência e postura.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4">Navegação</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/#sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Sobre mim
              </Link>
              <Link href="/#servicos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Serviços
              </Link>
              <Link href="/#depoimentos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Depoimentos
              </Link>
              <Link href="/#faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Dúvidas frequentes
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4">Contato</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.instagram.com/trp.helenarodriguez/"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @trp.helenarodriguez
              </a>
              <a 
                href="https://www.linkedin.com/in/helena-rodriguez-521802314/"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Linkedin className="w-4 h-4" />
                Helena Rodriguez
              </a>
              <a 
                href="mailto:helenarodriguez.terapeuta@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                helenarodriguez.terapeuta@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Helena Rodriguez. Todos os direitos reservados.</p>
          <p>CNPJ: 63.644.054/0001-00</p>
        </div>
      </div>
    </footer>
  )
}
