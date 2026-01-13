import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ReactDOMServer from 'react-dom/server'

// SVG de balón de fútbol
const SoccerBallSVG = ({ size = 32, opacity = .5 }: { size?: number; opacity?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ opacity }} fill="none" stroke="#00df81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-soccer-ball">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55l4.76 -3.45" /><path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
  </svg>
)

export function HeroParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particleCount = 15
    const elements: HTMLElement[] = []

    for (let i = 0; i < particleCount; i++) {
      const wrapper = document.createElement('div')
      wrapper.className = 'soccer-particle'

      const size = Math.random() * 30 + 20
      const opacity = Math.random() * 0.2 + 0.1

      wrapper.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
      `

      wrapper.innerHTML = ReactDOMServer.renderToStaticMarkup(<SoccerBallSVG size={size} opacity={opacity} />)
      container.appendChild(wrapper)
      elements.push(wrapper)

      // Animación compleja con rotación y movimiento
      const tl = gsap.timeline({ repeat: -1 })

      tl.to(wrapper, {
        y: -150 - Math.random() * 100,
        x: (Math.random() - 0.5) * 300,
        rotation: 360 + Math.random() * 360,
        duration: 8 + Math.random() * 4,
        ease: 'power1.inOut',
        delay: Math.random() * 3,
      })
        .to(wrapper, {
          y: 0,
          x: 0,
          rotation: 720 + Math.random() * 360,
          duration: 8 + Math.random() * 4,
          ease: 'power1.inOut',
        })
    }

    return () => {
      elements.forEach((el) => el.remove())
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" />
}