"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Smartphone, Wrench, Shield } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-warm-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold">Assistência Profissional</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              Assistência técnica que nunca vai deixar você na mão
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Aqui na LD Automação, você terá o melhor atendimento e o melhor reparo para o seu aparelho, seja ele
              Android, iPhone ou Tablet. Entre em contato agora para entendermos o que você precisa.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-accent/20 p-3 rounded-full backdrop-blur-sm">
                  <Smartphone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">Todos os Modelos</div>
                  <div className="text-sm text-primary-foreground/70">iPhone, Android, Tablet</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-warm-accent/20 p-3 rounded-full backdrop-blur-sm">
                  <Wrench className="w-6 h-6 text-warm-accent" />
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">Reparo Rápido</div>
                  <div className="text-sm text-primary-foreground/70">Atendimento eficiente</div>
                </div>
              </div>
            </div>

            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30 group"
            >
              Entrar em Contato
              <ArrowDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </Button>
          </div>

          {/* Right content - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl animate-float">
              <Image
                src="/image-hero.jpg"
                alt="Técnico reparando celular"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>

            {/* Floating stats */}
            <div
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-3xl font-bold text-accent">100+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
            </div>

            <div
              className="absolute -top-6 -right-6 bg-card p-6 rounded-2xl shadow-xl animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="text-3xl font-bold text-warm-accent">24h</div>
              <div className="text-sm text-muted-foreground">Resposta Rápida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContact}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full border-2 border-primary-foreground/30 hover:border-accent hover:bg-accent/10 transition-all duration-300 animate-bounce group"
        aria-label="Rolar para contato"
      >
        <ArrowDown className="w-6 h-6 text-primary-foreground group-hover:text-accent" />
      </button>
    </section>
  )
}
