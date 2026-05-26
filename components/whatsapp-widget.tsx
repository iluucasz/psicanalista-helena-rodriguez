"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, Send } from "lucide-react"

const WHATSAPP_NUMBER = "557187265569"

const BOT_STEPS = [
  {
    id: "greeting",
    message: "Olá! Sou a assistente virtual da Helena Rodriguez. Como posso te ajudar hoje?",
    options: [
      { label: "Quero agendar uma consulta", next: "schedule" },
      { label: "Tenho dúvidas sobre os serviços", next: "services" },
      { label: "Falar sobre o livro", next: "book" },
    ],
  },
  {
    id: "schedule",
    message: "Ótimo! Para agendar sua consulta, vou te redirecionar para o WhatsApp da Helena. Ela responde em horário comercial.",
    options: [
      { label: "Ir para o WhatsApp", next: "whatsapp", whatsapp: "Olá, Helena! Gostaria de agendar uma consulta." },
    ],
  },
  {
    id: "services",
    message: "Helena atende em Psicoterapia Individual, Psicanálise Clínica e Mentoria Emocional, com sessões online. Quer saber mais?",
    options: [
      { label: "Quero saber mais pelo WhatsApp", next: "whatsapp", whatsapp: "Olá, Helena! Gostaria de saber mais sobre os seus serviços." },
      { label: "Voltar ao início", next: "greeting" },
    ],
  },
  {
    id: "book",
    message: "\"Da Caverna à Evolução\" é o livro da Helena que une filosofia, ciência e espiritualidade. Quer saber como adquirir?",
    options: [
      { label: "Quero adquirir pelo WhatsApp", next: "whatsapp", whatsapp: "Olá, Helena! Tenho interesse no livro 'Da Caverna à Evolução'." },
      { label: "Voltar ao início", next: "greeting" },
    ],
  },
]

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState("greeting")
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([])
  const [showBubble, setShowBubble] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleOpen = () => {
    setIsOpen(true)
    setShowBubble(false)
    if (messages.length === 0) {
      const step = BOT_STEPS.find((s) => s.id === "greeting")!
      setMessages([{ from: "bot", text: step.message }])
    }
  }

  const handleOption = (option: { label: string; next: string; whatsapp?: string }) => {
    setMessages((prev) => [...prev, { from: "user", text: option.label }])

    if (option.next === "whatsapp" && option.whatsapp) {
      const encoded = encodeURIComponent(option.whatsapp)
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank")
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Você será redirecionado para o WhatsApp. Até logo!" },
        ])
      }, 400)
      return
    }

    const nextStep = BOT_STEPS.find((s) => s.id === option.next)
    if (nextStep) {
      setCurrentStep(nextStep.id)
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "bot", text: nextStep.message }])
      }, 400)
    }
  }

  const currentStepData = BOT_STEPS.find((s) => s.id === currentStep)
  const lastMessageIsBot = messages[messages.length - 1]?.from === "bot"

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {isOpen && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-border animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                <Image
                  src="/images/helena-hero.jpg"
                  alt="Helena Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Helena Rodriguez</p>
                <p className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
                  Online agora
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="bg-[#f0f2f5] px-4 py-4 flex flex-col gap-3 min-h-50 max-h-70 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.from === "bot"
                      ? "bg-white text-foreground rounded-tl-none"
                      : "bg-primary text-white rounded-tr-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Options */}
          {lastMessageIsBot && currentStepData && (
            <div className="bg-white border-t border-border px-3 py-3 flex flex-col gap-2">
              {currentStepData.options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleOption(option)}
                  className="flex items-center justify-between w-full text-left px-3 py-2 rounded-xl border border-secondary/50 text-sm text-primary hover:bg-secondary/10 transition-colors font-medium"
                >
                  <span>{option.label}</span>
                  <Send className="w-3.5 h-3.5 shrink-0 ml-2 text-secondary" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Bubble hint */}
      {showBubble && !isOpen && (
        <div className="bg-white text-foreground text-sm px-4 py-2 rounded-2xl shadow-lg border border-border animate-in slide-in-from-right-4 fade-in duration-300 max-w-50 text-center">
          Olá! Posso te ajudar? 👋
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={isOpen ? () => setIsOpen(false) : handleOpen}
        aria-label="Abrir chat WhatsApp"
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.467.643 4.883 1.867 7.02L2 30l7.195-1.832A14.01 14.01 0 0 0 16.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.453a11.44 11.44 0 0 1-5.836-1.598l-.418-.248-4.27 1.086 1.11-4.148-.273-.426A11.454 11.454 0 1 1 16.004 27.453zm6.281-8.574c-.344-.172-2.035-1.004-2.351-1.117-.317-.113-.547-.172-.777.172-.23.344-.89 1.117-1.09 1.347-.2.23-.402.258-.746.086-.344-.172-1.453-.535-2.765-1.707-1.023-.914-1.711-2.043-1.914-2.387-.2-.344-.02-.531.152-.703.156-.156.344-.402.516-.602.172-.2.23-.344.344-.574.113-.23.057-.43-.028-.602-.086-.172-.777-1.875-1.063-2.566-.278-.672-.562-.578-.777-.59-.2-.012-.43-.015-.66-.015-.23 0-.602.086-.918.43-.315.344-1.203 1.176-1.203 2.867 0 1.691 1.231 3.324 1.403 3.554.172.23 2.422 3.699 5.871 5.188.82.355 1.46.566 1.96.723.824.262 1.574.226 2.168.137.66-.098 2.035-.832 2.32-1.633.29-.8.29-1.487.204-1.633-.086-.144-.316-.23-.66-.402z"/>
          </svg>
        )}
      </button>
    </div>
  )
}
