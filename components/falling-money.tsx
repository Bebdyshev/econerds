"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

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

export default function FallingMoney() {
  const [particles, setParticles] = useState<MoneyParticle[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const lastTimeRef = useRef<number>(0)
  const particlesCreated = useRef<number>(0)

  useEffect(() => {
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
    }
  }, [])

  const createParticle = (id: number): MoneyParticle => {
    const type = Math.random() > 0.5 ? "bill" : "coin"
    return {
      id,
      x: Math.random() * 100, // percentage of screen width
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

    setParticles((prevParticles) => {
      return prevParticles
        .map((particle) => {
          // Update position
          const newY = particle.y + particle.speed * (deltaTime / 16)
          const newRotation = (particle.rotation + particle.rotationSpeed * (deltaTime / 16)) % 360

          // If particle is out of view, mark it for removal
          if (newY > 110) {
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
            left: `${particle.x}%`,
            top: `${particle.y}%`,
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
