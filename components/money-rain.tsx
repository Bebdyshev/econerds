"use client"

import { useEffect, useRef } from "react"

export default function MoneyRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Money symbols
    const moneySymbols = ["💵", "💰", "💲", "💸", "$"]
    
    // Create money particles
    class MoneyParticle {
      x: number
      y: number
      size: number
      speedY: number
      speedX: number
      rotation: number
      rotationSpeed: number
      symbol: string
      opacity: number
      swing: number
      swingSpeed: number
      
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * -500 - 20 // Start above the screen
        this.size = Math.random() * 30 + 25 // Bigger size for visibility
        this.speedY = Math.random() * 3 + 2 // Fall speed
        this.speedX = 0
        this.rotation = Math.random() * 360
        this.rotationSpeed = Math.random() * 3 - 1.5
        this.symbol = moneySymbols[Math.floor(Math.random() * moneySymbols.length)]
        this.opacity = Math.random() * 0.5 + 0.5
        this.swing = 0
        this.swingSpeed = Math.random() * 0.02 + 0.01
      }

      update() {
        // Add swinging motion
        this.swing += this.swingSpeed
        this.speedX = Math.sin(this.swing) * 1.5
        
        this.y += this.speedY
        this.x += this.speedX
        this.rotation += this.rotationSpeed

        // Reset if it goes off screen
        if (this.y > canvas.height + this.size) {
          this.reset()
        }
        
        // Reset if it goes off the sides
        if (this.x < -100 || this.x > canvas.width + 100) {
          this.reset()
        }
      }
      
      reset() {
        this.y = Math.random() * -200 - this.size
        this.x = Math.random() * canvas.width
        this.speedY = Math.random() * 3 + 2
        this.rotation = Math.random() * 360
        this.symbol = moneySymbols[Math.floor(Math.random() * moneySymbols.length)]
      }

      draw() {
        if (!ctx) return
        
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.translate(this.x, this.y)
        ctx.rotate((this.rotation * Math.PI) / 180)
        
        // Add shadow for 3D effect
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
        ctx.shadowBlur = 5
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 2
        
        // Draw the money symbol
        ctx.font = `${this.size}px Arial`
        ctx.fillStyle = this.symbol === "$" ? "#85bb65" : "white" // Dollar bill green for $
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(this.symbol, 0, 0)
        
        ctx.restore()
      }
    }

    // Create money particles
    const moneyParticles: MoneyParticle[] = []
    const particleCount = Math.min(40, Math.max(15, Math.floor((window.innerWidth * window.innerHeight) / 25000)))

    for (let i = 0; i < particleCount; i++) {
      const particle = new MoneyParticle()
      // Distribute initial positions
      particle.y = Math.random() * -canvas.height * 2
      moneyParticles.push(particle)
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw money particles
      moneyParticles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation with a slight delay
    const startAnimation = setTimeout(() => {
      animate()
    }, 500)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
      clearTimeout(startAnimation)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-50" />
} 