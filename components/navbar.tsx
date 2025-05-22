"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Cross2Icon } from "@radix-ui/react-icons"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
    { name: "Register", href: "#register" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-md py-3 dark:bg-gray-900/90 dark:backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className={`font-bold text-xl ${isScrolled ? "text-gray-900 dark:text-white" : "text-white"}`}>
                EcoNerds
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-purple-700 hover:bg-purple-50 dark:text-gray-200 dark:hover:text-purple-400 dark:hover:bg-gray-800"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="ml-2"
            >
              <Button
                size="sm"
                className={`btn-hover-effect ${
                  isScrolled
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-white text-purple-700 hover:bg-white/90"
                }`}
              >
                <Link href="#register">Register Now</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="ml-2"
            >
              <ThemeToggle />
            </motion.div>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              className="p-2 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <Cross2Icon className={isScrolled ? "text-gray-900 dark:text-white" : "text-white"} />
              ) : (
                <Menu className={isScrolled ? "text-gray-900 dark:text-white" : "text-white"} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 mt-3"
          >
            <div className="container py-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg dark:text-gray-200 dark:hover:text-purple-400 dark:hover:bg-gray-800"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="mt-2"
                >
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="#register">Register Now</Link>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
