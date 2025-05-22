"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  from,
  to,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)

      let startTime: number
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        setCount(Math.floor(progress * (to - from) + from))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      const startAnimation = () => {
        animationFrame = requestAnimationFrame(step)
      }

      const timeoutId = setTimeout(startAnimation, delay * 1000)

      return () => {
        clearTimeout(timeoutId)
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isInView, hasAnimated, from, to, duration, delay])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  )
}
