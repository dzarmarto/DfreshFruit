import { useEffect, useRef, useState } from 'react'

/**
 * useReveal — mengembalikan ref + status visible untuk animasi reveal-on-scroll.
 * Menghormati prefers-reduced-motion (langsung visible jika user memilih reduced motion).
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, ...options }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return [ref, isVisible]
}
