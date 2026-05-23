'use client'

import { useEffect } from 'react'

/** When ?print=true, open the browser print dialog (Save as PDF). */
export default function AutoPrint() {
  useEffect(() => {
    const t = window.setTimeout(() => window.print(), 400)
    return () => window.clearTimeout(t)
  }, [])
  return null
}
