import { useEffect, useRef } from 'react'

const CONFIG = {
  nodos: 90,           // cantidad de neuronas
  velocidad: 0.45,     // velocidad de movimiento
  distConexion: 160,   // distancia máxima para trazar una conexión
  radioNodo: 2.2,      // tamaño de cada nodo
  colorNodo: '96, 165, 250',      // azul claro (RGB)
  colorConexion: '99, 102, 241',  // índigo (RGB)
  pulso: true,         // efecto de pulso en nodos
}

export default function NeuralBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let nodos = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const crearNodos = () => {
      nodos = Array.from({ length: CONFIG.nodos }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * CONFIG.velocidad,
        vy: (Math.random() - 0.5) * CONFIG.velocidad,
        radio: CONFIG.radioNodo + Math.random() * 1.2,
        pulso: Math.random() * Math.PI * 2, // fase aleatoria
      }))
    }

    const dibujar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Actualizar posiciones y rebotar en los bordes
      nodos.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        n.pulso += 0.025

        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })

      // Dibujar conexiones
      for (let i = 0; i < nodos.length; i++) {
        for (let j = i + 1; j < nodos.length; j++) {
          const a = nodos[i]
          const b = nodos[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONFIG.distConexion) {
            const opacidad = (1 - dist / CONFIG.distConexion) * 0.55
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${CONFIG.colorConexion}, ${opacidad})`
            ctx.lineWidth = opacidad * 1.4
            ctx.stroke()
          }
        }
      }

      // Dibujar nodos
      nodos.forEach(n => {
        const brillo = CONFIG.pulso
          ? 0.6 + Math.sin(n.pulso) * 0.4
          : 1

        // Halo exterior
        const gradiente = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radio * 4)
        gradiente.addColorStop(0, `rgba(${CONFIG.colorNodo}, ${0.25 * brillo})`)
        gradiente.addColorStop(1, `rgba(${CONFIG.colorNodo}, 0)`)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radio * 4, 0, Math.PI * 2)
        ctx.fillStyle = gradiente
        ctx.fill()

        // Punto central
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radio, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${CONFIG.colorNodo}, ${0.85 * brillo})`
        ctx.fill()
      })

      animId = requestAnimationFrame(dibujar)
    }

    const observer = new ResizeObserver(() => {
      resize()
      crearNodos()
    })
    observer.observe(canvas)

    resize()
    crearNodos()
    dibujar()

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
        opacity: 0.75,
      }}
    />
  )
}
