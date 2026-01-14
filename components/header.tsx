"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 animate-slide-in-left">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <img src="/LD-Logo-1.png" alt="LD Automação Logo" className="h-10 w-auto" />
          </div>
        </div>

        <Button
          onClick={scrollToContact}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 animate-slide-in-right"
        >
          Contato
        </Button>
      </div>
    </header>
  )
}
