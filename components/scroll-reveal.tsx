"use client"

import { useLayoutEffect } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollReveal() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (mediaQuery.matches) {
      return
    }

    const selectors =
      pathname === "/mentoria-rota-clara"
        ? ["main > section", "main > footer", "footer"]
        : ["main > *", "footer"]

    const elements = gsap.utils.toArray<HTMLElement>(selectors)

    if (!elements.length) {
      return
    }

    const context = gsap.context(() => {
      gsap.set(elements, {
        autoAlpha: 0,
        y: 24,
        willChange: "transform, opacity"
      })

      ScrollTrigger.batch(elements, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.08,
            overwrite: true,
            clearProps: "willChange"
          })
        }
      })
    })

    return () => {
      context.revert()
    }
  }, [pathname])

  return null
}