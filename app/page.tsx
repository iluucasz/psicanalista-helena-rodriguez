import { Header } from "@/components/header"
import { TopBar } from "@/components/topbar"
import { Hero } from "@/components/hero"
import { Problems } from "@/components/problems"
import { About } from "@/components/about"
import { Book } from "@/components/book"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Problems />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Book />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
