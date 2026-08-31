import Link from "next/link"
import { Mail, Instagram, Youtube } from "lucide-react"
import { INSTAGRAM_URL } from "@/data/site-links"

const footerLinks = {
  navigation: [
    { label: "Le Groupe", href: "#groupe" },
    { label: "Concerts", href: "#concerts" },
    { label: "Média", href: "/media" },
    { label: "Contact", href: "#contact" },
  ],
  suivre: [
    { label: "Instagram", href: INSTAGRAM_URL },
    { label: "YouTube", href: "#" },
  ],
}

const socialIcons = [
  { icon: Instagram, label: "Instagram", href: INSTAGRAM_URL },
  { icon: Youtube, label: "YouTube", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                <span className="text-foreground font-serif text-sm font-medium">T</span>
              </div>
              <span className="font-serif text-xl font-medium text-background">Tasty Mango</span>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Un groupe solaire aux refrains contagieux. De la scène à vos playlists, on partage la même envie : faire
              danser.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium text-background mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suivre */}
          <div>
            <h4 className="font-medium text-background mb-4">Nous suivre</h4>
            <ul className="space-y-3">
              {footerLinks.suivre.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:booking@tastymango.fr"
                  className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  booking@tastymango.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">© 2026 Tasty Mango. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="#" className="hover:text-background transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
