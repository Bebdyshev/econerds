"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Participating in the EcoNerds Case Competition was a transformative experience. The real-world cases challenged our analytical skills and the mentorship we received was invaluable.",
    author: "Aizhan Nurmagambetova",
    position: "Finance Student, Nazarbayev University",
    team: "2024 First Place Winner",
  },
  {
    quote:
      "The competition pushed us to think outside the box and apply our theoretical knowledge to practical problems. The networking opportunities with industry professionals opened doors for my career.",
    author: "Daulet Karimov",
    position: "Economics Student, KIMEP University",
    team: "2024 Second Place Winner",
  },
  {
    quote:
      "EcoNerds was more than just a competition—it was a learning journey. The feedback from judges helped me understand the real-world implications of economic theories and improved my presentation skills.",
    author: "Madina Tulegenova",
    position: "Business Administration Student, Eurasian National University",
    team: "2024 Finalist",
  },
  {
    quote:
      "The competition provided a platform to showcase our economic knowledge and creativity. The judges' insights were eye-opening and helped us refine our approach to problem-solving.",
    author: "Arman Suleimenov",
    position: "International Relations Student, Al-Farabi Kazakh National University",
    team: "2024 Participant",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl bg-green-50 p-6 shadow-sm md:p-10">
      <div className="absolute left-6 top-6 text-green-200 md:left-10 md:top-10">
        <Quote className="h-16 w-16 rotate-180 opacity-50" />
      </div>

      <div className="relative z-10">
        <div className="min-h-[200px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "absolute left-0 top-0 w-full transition-opacity duration-500",
                activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none",
              )}
            >
              <blockquote className="mb-6 text-lg italic text-gray-700 md:text-xl">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-200" />
                <div className="ml-4">
                  <p className="font-semibold text-green-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm font-medium text-green-600">{testimonial.team}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="h-8 w-8 rounded-full border-green-200 p-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  activeIndex === index ? "bg-green-600 w-4" : "bg-green-200",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="h-8 w-8 rounded-full border-green-200 p-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
