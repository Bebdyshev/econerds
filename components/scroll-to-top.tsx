"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { ChevronUpIcon } from "@radix-ui/react-icons"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full text-white shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${
            theme === "dark" ? "bg-purple-700 hover:bg-purple-800" : "bg-purple-600 hover:bg-purple-700"
          } transition-colors`}
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
