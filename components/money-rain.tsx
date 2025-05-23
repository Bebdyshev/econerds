"use client"

import { useEffect, useRef, useState } from "react"

interface MoneyParticle {
  id: number
  x: number
  y: number
  rotation: number
  size: number
  speed: number
  rotationSpeed: number
  type: "bill" | "coin"
}

export default function MoneyRain() {
  const [particles, setParticles] = useState<MoneyParticle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const particlesCreated = useRef<number>(0)
  // Store canvas as a ref to be accessible in the class methods
  const canvasRef = useRef<{ width: number; height: number }>({ width: window.innerWidth, height: window.innerHeight })

  useEffect(() => {
    const canvas = containerRef.current
    if (!canvas) return

    // Update canvas reference dimensions
    canvasRef.current = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    // Handle resize
    const handleResize = () => {
      canvasRef.current = {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }

    window.addEventListener("resize", handleResize)

    // Create initial particles
    const initialParticles: MoneyParticle[] = []
    const particleCount = window.innerWidth < 768 ? 15 : 30

    for (let i = 0; i < particleCount; i++) {
      initialParticles.push(createParticle(i))
    }
    setParticles(initialParticles)
    particlesCreated.current = particleCount

    // Start animation
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const createParticle = (id: number): MoneyParticle => {
    const type = Math.random() > 0.5 ? "bill" : "coin"
    const { width, height } = canvasRef.current
    return {
      id,
      x: Math.random() * width,
      y: -10 - Math.random() * 20, // start above the viewport
      rotation: Math.random() * 360,
      size: type === "bill" ? 20 + Math.random() * 20 : 10 + Math.random() * 15,
      speed: 0.5 + Math.random() * 1.5,
      rotationSpeed: (Math.random() - 0.5) * 2,
      type,
    }
  }

  const animate = (timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp
    const deltaTime = timestamp - lastTimeRef.current
    lastTimeRef.current = timestamp
    const { width, height } = canvasRef.current

    setParticles((prevParticles) => {
      return prevParticles
        .map((particle) => {
          // Update position
          const newY = particle.y + particle.speed * (deltaTime / 16)
          const newRotation = (particle.rotation + particle.rotationSpeed * (deltaTime / 16)) % 360

          // If particle is out of view, mark it for removal
          if (newY > height + particle.size) {
            return null
          }
          
          // Reset if it goes off the sides
          if (particle.x < -100 || particle.x > width + 100) {
            return null
          }

          return {
            ...particle,
            y: newY,
            rotation: newRotation,
          }
        })
        .filter((particle): particle is MoneyParticle => particle !== null)
    })

    animationRef.current = requestAnimationFrame(animate)
  }

  const reset = (id: number) => {
    const { width } = canvasRef.current
    const type = Math.random() > 0.5 ? "bill" : "coin"
    return {
      id,
      x: Math.random() * width,
      y: -10 - Math.random() * 20,
      rotation: Math.random() * 360,
      size: type === "bill" ? 20 + Math.random() * 20 : 10 + Math.random() * 15,
      speed: 0.5 + Math.random() * 1.5,
      rotationSpeed: (Math.random() - 0.5) * 2,
      type,
    }
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: `rotate(${particle.rotation}deg)`,
            width: `${particle.size}px`,
            height: `${particle.size * (particle.type === "bill" ? 0.5 : 1)}px`,
          }}
        >
          {particle.type === "bill" ? (
            <div
              className="w-full h-full bg-green-500 rounded-sm flex items-center justify-center"
              style={{ boxShadow: "0 0 5px rgba(0,0,0,0.2)" }}
            >
              <div className="text-white text-xs font-bold">$</div>
            </div>
          ) : (
            <div className="w-full h-full rounded-full bg-yellow-400 border-2 border-yellow-500 flex items-center justify-center">
              <div className="text-yellow-700 text-xs font-bold">$</div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 