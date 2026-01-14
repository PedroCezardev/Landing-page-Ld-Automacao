"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Check } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    servico: "",
    aparelho: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setFormData({ nome: "", servico: "", aparelho: "" })
      setIsSuccess(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Entre em Contato</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-warm-accent mx-auto rounded-full" />
          </div>

          <div
            className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 group">
                <label
                  htmlFor="nome"
                  className="text-sm font-semibold text-foreground/70 group-focus-within:text-accent transition-colors"
                >
                  Seu Nome
                </label>
                <Input
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  required
                  className="h-14 px-6 text-lg bg-muted/50 border-2 border-transparent focus:border-accent focus:bg-background transition-all duration-300 rounded-xl hover:border-accent/30"
                />
              </div>

              <div className="space-y-2 group">
                <label
                  htmlFor="servico"
                  className="text-sm font-semibold text-foreground/70 group-focus-within:text-accent transition-colors"
                >
                  Tipo de Serviço
                </label>
                <Input
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  placeholder="Ex: Troca de tela, bateria, reparo"
                  required
                  className="h-14 px-6 text-lg bg-muted/50 border-2 border-transparent focus:border-accent focus:bg-background transition-all duration-300 rounded-xl hover:border-accent/30"
                />
              </div>

              <div className="space-y-2 group">
                <label
                  htmlFor="aparelho"
                  className="text-sm font-semibold text-foreground/70 group-focus-within:text-accent transition-colors"
                >
                  Qual Aparelho
                </label>
                <Input
                  id="aparelho"
                  name="aparelho"
                  value={formData.aparelho}
                  onChange={handleChange}
                  placeholder="Ex: iPhone 14, Samsung S23, iPad"
                  required
                  className="h-14 px-6 text-lg bg-muted/50 border-2 border-transparent focus:border-accent focus:bg-background transition-all duration-300 rounded-xl hover:border-accent/30"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full h-14 text-lg font-bold rounded-xl transition-all duration-300 ${
                  isSuccess
                    ? "bg-green-500 hover:bg-green-500"
                    : "bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70"
                } text-accent-foreground shadow-lg hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] group`}
              >
                {isSuccess ? (
                  <>
                    <Check className="mr-2 w-5 h-5" />
                    Mensagem Enviada!
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="mr-2 w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">Responderemos em até 24 horas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
