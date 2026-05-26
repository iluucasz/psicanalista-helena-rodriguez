"use client"

import { useState, useEffect } from "react"
import { Instagram, Mail, Linkedin } from "lucide-react"

export function TopBar() {
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
      className={`fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
        <p className="text-primary-foreground/90">Me Acompanhe nas redes sociais</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/trp.helenarodriguez/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/helena-rodriguez-521802314/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:helenarodriguez.terapeuta@gmail.com"
            className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </div>
  )
}
