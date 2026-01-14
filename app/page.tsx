import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ContactSection />
      <Footer />
    </main>
  )
}
