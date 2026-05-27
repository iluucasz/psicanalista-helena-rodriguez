"use client"

import { useState, useEffect } from "react"
import { Instagram, Mail, Linkedin } from "lucide-react"

type TopBarProps = {
  dark?: boolean
}

export function TopBar({ dark = false }: TopBarProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        dark
          ? "border-b border-white/10 bg-slate-950/80 text-white backdrop-blur-md"
          : "bg-primary text-primary-foreground"
      } ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between text-xs sm:text-sm gap-3">
        <p className={`${dark ? "text-white/80" : "text-primary-foreground/90"} truncate`}>
          Me acompanhe nas redes sociais
        </p>
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <a
            href="https://www.instagram.com/trp.helenarodriguez/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors ${dark ? "text-white/80 hover:text-white" : "text-primary-foreground/90 hover:text-primary-foreground"}`}
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/helena-rodriguez-521802314/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors ${dark ? "text-white/80 hover:text-white" : "text-primary-foreground/90 hover:text-primary-foreground"}`}
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:helenarodriguez.terapeuta@gmail.com"
            className={`flex items-center gap-2 transition-colors ${dark ? "text-white/80 hover:text-white" : "text-primary-foreground/90 hover:text-primary-foreground"}`}
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </div>
  )
}
