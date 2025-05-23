"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"

const testimonials = [
  {
    quote:
      "Participating in the EcoNerds Case Competition was a transformative experience. The real-world cases challenged our economic thinking and helped us develop practical skills that we couldn't learn in a classroom.",
    author: "Aizhan Nurpeisova",
    position: "Economics Student, Nazarbayev University",
    image: "/placeholder.svg?height=100&width=100&query=student portrait",
  },
  {
    quote:
      "The competition pushed us to think critically and creatively about economic problems. The feedback from industry professionals was invaluable and has significantly influenced my career path.",
    author: "Ruslan Akhmetov",
    position: "Finance Graduate, KIMEP University",
    image: "/placeholder.svg?height=100&width=100&query=student portrait",
  },
  {
    quote:
      "As a team, we learned so much about collaboration, time management, and presenting complex economic concepts in an accessible way. The skills we gained are directly applicable to our professional lives.",
    author: "Dinara Suleimenova",
    position: "Business Analytics Student, Satbayev University",
    image: "/placeholder.svg?height=100&width=100&query=student portrait",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div
          className={cn(
            "transition-transform duration-500 ease-in-out flex",
            isAnimating ? "opacity-90" : "opacity-100",
          )}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-100">
                      <img
                        src={testimonial.image || "/placeholder.svg?height=100&width=100&query=student portrait"}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -left-2 bg-green-500 rounded-full p-1 text-white">
                      <Quote size={16} />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentIndex ? "bg-green-500" : "bg-gray-300",
            )}
            onClick={() => {
              setIsAnimating(true)
              setCurrentIndex(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-green-600 transition-colors"
        onClick={goToPrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeftIcon size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-green-600 transition-colors"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRightIcon size={24} />
      </button>
    </div>
  )
}
