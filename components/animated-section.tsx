"use client"

import type { ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in" | "bounce"
  delay?: number
  threshold?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  })

  const getAnimationClasses = () => {
    switch (animation) {
      case "fade-up":
        return inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      case "fade-in":
        return inView ? "opacity-100" : "opacity-0"
      case "slide-left":
        return inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      case "slide-right":
        return inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      case "zoom-in":
        return inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      case "bounce":
        return inView ? "opacity-100 animate-bounce" : "opacity-0"
      default:
        return inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-700 ease-out", getAnimationClasses(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
