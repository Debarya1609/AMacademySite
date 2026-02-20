"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function MusicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const notes = ["♪", "♫", "♬", "𝅘𝅥𝅮", "𝄞"]
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      note: string
      opacity: number
      size: number
    }> = []

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        note: notes[Math.floor(Math.random() * notes.length)],
        opacity: Math.random() * 0.5 + 0.1,
        size: Math.random() * 20 + 20,
      })
    }

    const animate = () => {
      const isDark = resolvedTheme === "dark" || (resolvedTheme === "system" && systemTheme === "dark")

      ctx.fillStyle = isDark ? "rgba(15, 15, 15, 0.02)" : "rgba(255, 255, 255, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.opacity += (Math.random() - 0.5) * 0.01

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Keep within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Draw particle with improved theme-aware colors
        ctx.font = `${particle.size}px serif`
        ctx.globalAlpha = Math.max(0, Math.min(1, particle.opacity))
        ctx.fillStyle = isDark ? "rgba(220, 220, 220, 0.5)" : "rgba(40, 40, 40, 0.2)"
        ctx.fillText(particle.note, particle.x, particle.y)
      })

      ctx.globalAlpha = 1
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [mounted, resolvedTheme, systemTheme])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ background: "transparent" }} />
}
