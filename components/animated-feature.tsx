"use client"

import type { ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedFeatureProps {
  icon: ReactNode
  title: string
  description: string
  delay?: number
}

export default function AnimatedFeature({ icon, title, description, delay = 0 }: AnimatedFeatureProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-xl shadow-sm p-6 transition-all duration-700 transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-green-50 rounded-full">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
