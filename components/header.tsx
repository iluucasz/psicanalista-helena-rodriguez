"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

type HeaderProps = {
  dark?: boolean
  logoSrc?: string
  logoAlt?: string
}

export function Header({
  dark = false,
  logoSrc = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17a2fcf0da336a3d598bd660f7148149-zEtE502auy8mW94aP9xjlEtyWaDyp8.png",
  logoAlt = "Helena Rodriguez"
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [topbarVisible, setTopbarVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setTopbarVisible(window.scrollY < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 z-40 border-b transition-all duration-300 ${dark ? "border-transparent bg-slate-950/75 shadow-[0_12px_34px_-24px_rgba(0,0,0,0.95)] backdrop-blur-md" : "border-border/50 bg-background/95 backdrop-blur-sm"} ${topbarVisible ? "top-9 sm:top-10" : "top-0"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <div className={`relative transition-all duration-300 ${isScrolled ? "w-14 h-14" : "w-20 h-20 md:w-36 md:h-36"}`}>
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={160}
                height={160}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#servicos"
              className={`text-sm transition-colors ${dark ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Serviços
            </Link>
            <Link
              href="/#sobre"
              className={`text-sm transition-colors ${dark ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Sobre mim
            </Link>
            <Link
              href="/#depoimentos"
              className={`text-sm transition-colors ${dark ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Depoimentos
            </Link>
            <Link
              href="/#faq"
              className={`text-sm transition-colors ${dark ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Dúvidas
            </Link>
            <Link
              href="/#publicacoes"
              className={`text-sm transition-colors ${dark ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Publicações
            </Link>
            <Link
              href="/mentoria-rota-clara"
              className={`text-sm transition-colors ${dark ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-foreground"}`}
            >
              Mentoria
            </Link>
            <Link 
              href="/#contato" 
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm rounded-full hover:bg-primary/90 transition-colors"
            >
              Agendar Sessão
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 ${dark ? "text-white" : "text-foreground"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 right-0 border-b p-6 flex flex-col gap-4 ${dark ? "border-white/15 bg-black/85" : "border-border bg-background"}`}
          >
            <Link 
              href="/#servicos" 
              className={`py-2 ${dark ? "text-white/90 hover:text-white" : "text-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              href="/#sobre" 
              className={`py-2 ${dark ? "text-white/90 hover:text-white" : "text-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mim
            </Link>
            <Link 
              href="/#depoimentos" 
              className={`py-2 ${dark ? "text-white/90 hover:text-white" : "text-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </Link>
            <Link 
              href="/#faq" 
              className={`py-2 ${dark ? "text-white/90 hover:text-white" : "text-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dúvidas
            </Link>
            <Link 
              href="/#publicacoes" 
              className={`py-2 ${dark ? "text-white/90 hover:text-white" : "text-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Publicações
            </Link>
            <Link 
              href="/mentoria-rota-clara" 
              className={`py-2 ${dark ? "text-white/90 hover:text-white" : "text-foreground"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Mentoria
            </Link>
            <Link 
              href="/#contato" 
              className="px-5 py-3 bg-primary text-primary-foreground text-center rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Sessão
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
