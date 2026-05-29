import { Header } from "@/components/sermon/header"
import { Hero } from "@/components/sermon/hero"
import { Services } from "@/components/sermon/services"
import { About } from "@/components/sermon/about"
import { Contact } from "@/components/sermon/contact"
import { Footer } from "@/components/sermon/footer"
import { WhatsAppButton } from "@/components/sermon/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
