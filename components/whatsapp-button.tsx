"use client"

import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=554796195245"

  const handleClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      className="fixed bottom-6 right-4 z-50 rounded-full p-0 h-14 w-14 text-lg font-bold shadow-lg hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center group"
      onClick={handleClick}
    >
      <FaWhatsapp className="h-12 w-12 group-hover:scale-110 transition-transform" />
    </Button>
  )
}
