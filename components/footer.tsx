import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Image
              src="/Logo-LD.jpeg"
              alt="LD Automação Logo"
              width={80}
              height={80}
              className="rounded-lg animate-slide-in-left"
            />
            <p className="text-primary-foreground/80 leading-relaxed">
              Se é importante pra você, é importante pra nós!
            </p>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/5534999999999"
                target="_blank"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Serviços</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-accent transition-colors cursor-pointer">Reparo de iPhone</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Reparo de Android</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Reparo de Tablet</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Troca de Tela</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Troca de Bateria</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Links Rápidos</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-accent transition-colors cursor-pointer">Sobre Nós</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Garantia</li>
              <li className="hover:text-accent transition-colors cursor-pointer">FAQ</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Política de Privacidade</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">Contato</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-3 hover:text-accent transition-colors group">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <div>(34) 9 9999-9999</div>
                  <div>(34) 9 9999-9999</div>
                </div>
              </li>
              <li className="flex items-start gap-3 hover:text-accent transition-colors group">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>contato@ldautomacao.com</span>
              </li>
              <li className="flex items-start gap-3 hover:text-accent transition-colors group">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>
                  Rua Florianópolis 155,
                  <br />
                  Centro - Uberlândia MG
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>LD Automação © {currentYear} - Todos os Direitos Reservados.</p>
        </div>
      </div>
    </footer>
  )
}
