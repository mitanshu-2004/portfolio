'use client'

import { useEffect } from 'react'

const SECTIONS = [
  'hero',
  'focus',
  'experience',
  'education',
  'projects',
  'stack',
  'chat',
  'contact',
]

export default function NavActiveState() {
  // Clear any hash from the URL on first load so the browser
  // doesn't auto-scroll to a section the user didn't intend.
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname)
      window.scrollTo(0, 0)
    }
  }, [])

  // Trigger hero object entry animations on first scroll
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const reveal = () => {
      hero.classList.add('hero-revealed')
      window.removeEventListener('scroll', reveal)
    }
    window.addEventListener('scroll', reveal, { passive: true })
    return () => window.removeEventListener('scroll', reveal)
  }, [])

  useEffect(() => {
    const nav = document.querySelector('nav')
    if (!nav) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nav.setAttribute('data-active', entry.target.id)
          }
        })
      },
      { rootMargin: '-48px 0px -60% 0px', threshold: 0 }
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
