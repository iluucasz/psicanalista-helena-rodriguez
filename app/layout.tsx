import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollReveal } from '@/components/scroll-reveal'
import { BackToTop } from '@/components/back-to-top'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Helena Rodriguez | Psicanalista & Mentora Emocional',
  description: 'Auxilio adultos a desenvolver maturidade emocional para viver com mais consciência e postura. Psicoterapia e Psicanálise Clínica.',
  keywords: ['psicóloga', 'psicanalista', 'mentora emocional', 'terapia', 'psicanálise', 'maturidade emocional'],
  authors: [{ name: 'Helena Rodriguez' }],
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17a2fcf0da336a3d598bd660f7148149-zEtE502auy8mW94aP9xjlEtyWaDyp8.png',
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17a2fcf0da336a3d598bd660f7148149-zEtE502auy8mW94aP9xjlEtyWaDyp8.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17a2fcf0da336a3d598bd660f7148149-zEtE502auy8mW94aP9xjlEtyWaDyp8.png',
  },
  openGraph: {
    title: 'Helena Rodriguez | Psicanalista & Mentora Emocional',
    description: 'Auxilio adultos a desenvolver maturidade emocional para viver com mais consciência e postura.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ScrollReveal />
        <BackToTop />
        <WhatsAppWidget />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
