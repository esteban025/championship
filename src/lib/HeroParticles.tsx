import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particleCount = 25
    const elements: HTMLElement[] = []

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'

      const size = Math.random() * 3 + 2
      const opacity = Math.random() * 0.3 + 0.1

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(34, 197, 94, ${opacity});
        border-radius: 50%;
        pointer-events: none;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `

      container.appendChild(particle)
      elements.push(particle)

      gsap.to(particle, {
        y: -100 - Math.random() * 50,
        x: (Math.random() - 0.5) * 200,
        duration: 5 + Math.random() * 3,
        ease: 'none',
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2,
      })
    }

    return () => {
      elements.forEach((el) => el.remove())
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" />
}

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements: HTMLElement[] = []
    const shapes = ['●', '◆', '▲', '★']
    const colors = ['rgba(34, 197, 94, 0.3)', 'rgba(34, 197, 94, 0.35)', 'rgba(34, 197, 94, 0.4)']

    for (let i = 0; i < 8; i++) {
      const element = document.createElement('div')
      element.textContent = shapes[Math.floor(Math.random() * shapes.length)]
      element.style.cssText = `
        position: absolute;
        font-size: ${Math.random() * 25 + 15}px;
        color: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
        user-select: none;
      `
      container.appendChild(element)
      elements.push(element)

      gsap.to(element, {
        y: -30 + Math.random() * 40,
        rotation: Math.random() * 360 - 180,
        duration: 4 + Math.random() * 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2,
      })
    }

    return () => {
      elements.forEach((el) => el.remove())
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
}