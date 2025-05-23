"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function SponsorLogos() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const sponsors = [
    {
      name: "Kazakh National Bank",
      logo: "/placeholder.svg?height=80&width=200&query=bank logo",
      delay: 0,
    },
    {
      name: "Aktobe Economic Forum",
      logo: "/placeholder.svg?height=80&width=200&query=forum logo",
      delay: 1,
    },
    {
      name: "Kazakhstan Investment Corp",
      logo: "/placeholder.svg?height=80&width=200&query=investment logo",
      delay: 2,
    },
    {
      name: "Eurasian Development Bank",
      logo: "/placeholder.svg?height=80&width=200&query=bank logo",
      delay: 3,
    },
  ]

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
      {sponsors.map((sponsor, i) => (
        <div
          key={i}
          className={cn(
            "h-16 w-full flex items-center justify-center transition-all duration-700 transform",
            inView ? "opacity-70 translate-y-0" : "opacity-0 translate-y-10",
          )}
          style={{ transitionDelay: `${sponsor.delay * 100}ms` }}
        >
          <img
            src={sponsor.logo || "/placeholder.svg?height=80&width=200&query=logo"}
            alt={sponsor.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}
