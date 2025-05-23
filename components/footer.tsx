import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">EcoNerds Case Competition</h3>
            <p className="mb-4 text-green-100">
              The premier economic case competition in Aktobe, Kazakhstan. Bringing together the brightest minds to
              solve real-world economic challenges.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-100 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#details" className="text-green-100 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#schedule" className="text-green-100 hover:text-white">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-green-100 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-green-100 hover:text-white">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-300" />
                <a href="mailto:info@econerds.kz" className="text-green-100 hover:text-white">
                  info@econerds.kz
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-300" />
                <a href="tel:+77132123456" className="text-green-100 hover:text-white">
                  +7 (7132) 12-34-56
                </a>
              </li>
              <li className="mt-2 text-green-100">
                Aktobe Business Center
                <br />
                45 Abulkhair Khan Avenue
                <br />
                Aktobe, Kazakhstan
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
            <p className="mb-4 text-green-100">
              Subscribe to our newsletter for updates about the competition and economic insights.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md border-green-700 bg-green-800 px-3 py-2 text-white placeholder:text-green-300 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button
                type="submit"
                className="rounded-md bg-green-600 px-3 py-2 font-medium text-white hover:bg-green-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-green-800 pt-6 text-center text-sm text-green-300">
          <p>© {new Date().getFullYear()} EcoNerds Case Competition. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
