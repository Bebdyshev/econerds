"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface FloatingElementProps {
  className?: string
  size?: number
  delay?: number
  duration?: number
  x?: number
  y?: number
}

export function FloatingElement({
  className = "bg-purple-500/10",
  size = 8,
  delay = 0,
  duration = 4,
  x = 10,
  y = 10,
}: FloatingElementProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [0, y, 0],
        x: [0, x, 0],
      }}
      transition={{
        duration,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        repeat: Number.POSITIVE_INFINITY,
        delay,
      }}
    />
  )
}

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <FloatingElement className="bg-purple-500/10" size={60} x={20} y={-20} delay={0} duration={5} />
      <FloatingElement className="bg-indigo-500/10" size={40} x={-15} y={25} delay={1} duration={6} />
      <FloatingElement className="bg-emerald-500/10" size={30} x={25} y={15} delay={2} duration={7} />
      <FloatingElement className="bg-purple-500/5" size={80} x={-20} y={-10} delay={0.5} duration={8} />
      <FloatingElement className="bg-indigo-500/5" size={100} x={10} y={30} delay={1.5} duration={9} />
    </>
  )
}
