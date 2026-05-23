'use client'

import type { ResumeDomain } from '@/lib/resume-data'

export default function PrintResumeButton({ domain }: { domain: ResumeDomain }) {
  return (
    <button
      type="button"
      className={`resume-print-btn resume-print-btn--${domain}`}
      onClick={() => window.print()}
    >
      Print / Save as PDF
    </button>
  )
}
