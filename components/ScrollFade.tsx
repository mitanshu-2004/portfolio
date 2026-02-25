'use client'

import { useEffect, useRef } from 'react'

interface ScrollFadeProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function ScrollFade({
  children,
  className = '',
  id,
}: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // P3-2: honour prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) {
      el.classList.add('visible')
      return
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      {...(id ? { id } : {})}
      className={`fade-in${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}
