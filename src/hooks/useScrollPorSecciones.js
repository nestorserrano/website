import { useEffect, useRef } from 'react'

const NAVBAR_H = 70       // altura del navbar fijo en px
const COOLDOWN = 750      // ms de pausa entre saltos de sección
const UMBRAL_RUEDA = 40   // deltaY mínimo para considerar intención de scroll

export function useScrollPorSecciones() {
  const bloqueado = useRef(false)
  const acumulado = useRef(0)
  const timerAcum = useRef(null)

  useEffect(() => {
    const secciones = () =>
      Array.from(document.querySelectorAll('main section[id], footer'))

    // ─── Índice de la sección actualmente visible ─────────────────────────────
    const indiceActual = () => {
      const lista = secciones()
      let idx = 0
      for (let i = 0; i < lista.length; i++) {
        const top = lista[i].getBoundingClientRect().top
        if (top <= NAVBAR_H + 10) idx = i
      }
      return idx
    }

    // ─── Ir a una sección específica ──────────────────────────────────────────
    const irA = (idx) => {
      const lista = secciones()
      if (idx < 0 || idx >= lista.length) return false

      const el = lista[idx]
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - NAVBAR_H

      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      bloqueado.current = true
      setTimeout(() => { bloqueado.current = false }, COOLDOWN)
      return true
    }

    // ─── Verificar si la sección actual tiene scroll interno pendiente ─────────
    const puedeScrollarDentro = (hacia) => {
      const idx = indiceActual()
      const el = secciones()[idx]
      if (!el) return false
      const rect = el.getBoundingClientRect()

      if (hacia === 'abajo') {
        // Todavía hay contenido oculto debajo dentro de la sección
        return rect.bottom > window.innerHeight + 5
      } else {
        // Todavía hay contenido oculto arriba dentro de la sección
        return rect.top < NAVBAR_H - 5
      }
    }

    // ─── Rueda del ratón ──────────────────────────────────────────────────────
    const onWheel = (e) => {
      // Ignorar scrolls dentro del chatbot
      if (e.target.closest('[data-chat]')) return

      clearTimeout(timerAcum.current)
      acumulado.current += Math.abs(e.deltaY)

      timerAcum.current = setTimeout(() => { acumulado.current = 0 }, 200)

      if (acumulado.current < UMBRAL_RUEDA) return
      if (bloqueado.current) { e.preventDefault(); return }

      const bajar = e.deltaY > 0

      // Si la sección actual tiene contenido que no se ve → scroll normal
      if (puedeScrollarDentro(bajar ? 'abajo' : 'arriba')) return

      e.preventDefault()
      acumulado.current = 0

      const idx = indiceActual()
      irA(bajar ? idx + 1 : idx - 1)
    }

    // ─── Teclado ──────────────────────────────────────────────────────────────
    const onKey = (e) => {
      if (bloqueado.current) return
      // No interferir si el foco está en un input/textarea
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      const idx = indiceActual()

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (puedeScrollarDentro('abajo')) return
        e.preventDefault()
        irA(idx + 1)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (puedeScrollarDentro('arriba')) return
        e.preventDefault()
        irA(idx - 1)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      clearTimeout(timerAcum.current)
    }
  }, [])
}
