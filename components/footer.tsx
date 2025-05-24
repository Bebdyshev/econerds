import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Phone, MapPin } from "lucide-react"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              EcoNerds
            </h3>
            <p className="text-gray-400 mb-4">The premier economic case competition for students in Kazakhstan.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Register", href: "/register" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
                { name: "Sponsors", href: "/sponsors" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-green-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <EnvelopeClosedIcon className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-gray-400">econerdsclub@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-gray-400">+7 (705) 554-2611</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>Built with ♡ by <Link href="https://github.com/bebdyshev" className="text-green-400 hover:text-green-500 transition-colors">Bebdyshev</Link></p>
        </div>
      </div>
    </footer>
  )
}
