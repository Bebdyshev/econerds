"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

const testimonials = [
  {
    id: 1,
    quote:
      "Participating in EcoNerds was a game-changer for my career. The connections I made and the skills I developed have been invaluable in my professional journey.",
    name: "Aizhan Nurpeisova",
    role: "Former Participant, Now Economic Analyst",
    avatar: "/professional-woman-headshot.png",
  },
  {
    id: 2,
    quote:
      "The competition challenges you to think critically and apply economic theories to real-world problems. It's the perfect bridge between academic knowledge and practical application.",
    name: "Daulet Akhmetov",
    role: "2023 Winner, Nazarbayev University",
    avatar: "/professional-man-headshot.png",
  },
  {
    id: 3,
    quote:
      "As a sponsor, we've been consistently impressed by the caliber of talent at EcoNerds. It's become our primary recruitment channel for finding promising young economists.",
    name: "Gulnara Ismailova",
    role: "HR Director, Kazakhstan National Bank",
    avatar: "/testimonial-person-3.png",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative overflow-hidden py-10">
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full opacity-30 -translate-x-16 -translate-y-16 theme-transition" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-100 dark:bg-indigo-900/30 rounded-full opacity-30 translate-x-16 translate-y-16 theme-transition" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Quote className="h-12 w-12 text-purple-200 dark:text-purple-800 mx-auto mb-4 theme-transition" />
        </div>

        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-8">
                  "{testimonials[current].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-purple-100 dark:border-purple-800 theme-transition">
                    <Image
                      src={testimonials[current].avatar || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <cite className="not-italic">
                    <span className="block font-semibold text-gray-900 dark:text-white">
                      {testimonials[current].name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{testimonials[current].role}</span>
                  </cite>
                </div>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => {
              prev()
              setAutoplay(false)
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors theme-transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>

          <div className="flex gap-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setAutoplay(false)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors theme-transition ${
                  index === current
                    ? "bg-purple-600 dark:bg-purple-500"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              next()
              setAutoplay(false)
            }}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors theme-transition"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  )
}
