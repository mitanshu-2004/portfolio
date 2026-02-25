'use client'

import { useState, useRef } from 'react'
import ScrollFade from './ScrollFade'

type CVDomain = 'ai' | 'robotics' | 'ds' | 'web'
type Overall = 'strong' | 'partial' | 'weak'
type ReqStatus = 'match' | 'partial' | 'gap'

interface Requirement {
  requirement: string
  status: ReqStatus
  evidence: string | null
  gap_detail: string | null
}

interface MatchResult {
  domain: CVDomain
  overall: Overall
  match_count: number
  partial_count: number
  gap_count: number
  requirements: Requirement[]
  cv_file: string
  fallback?: boolean
  error?: string
}

const DOMAIN_META: Record<CVDomain, { tag: string; title: string; file: string }> = {
  ai:       { tag: 'AI',       title: 'AI / ML Research',        file: '/Mitanshu_AI_Resume.pdf'       },
  robotics: { tag: 'Robotics', title: 'Robotics Engineering',     file: '/Mitanshu_Robotics_Resume.pdf' },
  ds:       { tag: 'Data',     title: 'Data Science / Analytics', file: '/Mitanshu_DS_Resume.pdf'       },
  web:      { tag: 'Web',      title: 'Full-Stack / Web',         file: '/Mitanshu_Web_Resume.pdf'      },
}

const OVERALL_LABEL: Record<Overall, string> = {
  strong:  '✓ Strong fit',
  partial: '◑ Partial fit',
  weak:    '✗ Weak fit',
}

const STATUS_ICON: Record<ReqStatus, string> = {
  match:   '✓',
  partial: '◑',
  gap:     '✗',
}

export default function CV() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<MatchResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  const charCount = text.trim().length
  const charReady = charCount >= 30

  const handleSubmit = async () => {
    if (!charReady) {
      setError('Paste at least a sentence or two from the job description.')
      return
    }
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/resume-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: text }),
      })

      const data: MatchResult = await res.json()

      if (!data.domain) {
        setError('Could not analyse the job description. Try pasting more detail.')
        setLoading(false)
        return
      }

      setResult(data)
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const isDisabled = loading || !charReady
  const meta = result ? DOMAIN_META[result.domain] : null
  const cvFile = result?.cv_file ?? (meta?.file ?? '')

  return (
    <section id="cv" aria-label="CV matcher">
      <div className="container">
        <ScrollFade>
          <span className="section-label">CV</span>
        </ScrollFade>

        <ScrollFade>
          <p className="cv-intro">
            Paste the job description. See exactly where the resume matches — and where it doesn't.
          </p>

          {/* Input — collapses after match */}
          <div className={`cv-input-area${result ? ' cv-input-area--matched' : ''}`}>
            <div className="cv-input-wrap">
              <textarea
                className="cv-textarea"
                rows={result ? 2 : 5}
                placeholder="Paste the job description or role requirements here…"
                value={text}
                onChange={(e) => {
                  setText(e.target.value)
                  if (result) setResult(null)
                  setError(null)
                }}
                disabled={loading}
                aria-label="Job description input"
              />
              <span
                className={`cv-char-count${charReady ? ' cv-char-count--ready' : ''}`}
                aria-live="polite"
              >
                {charReady ? '✓ ready' : `${charCount} / 30 min`}
              </span>
            </div>

            <button
              className={`cv-submit${isDisabled ? ' cv-submit--disabled' : ''}`}
              onClick={handleSubmit}
              disabled={isDisabled}
              aria-busy={loading}
              aria-label="Analyse job description against resume"
            >
              {loading && <span className="cv-spinner" aria-hidden="true" />}
              {loading ? 'Analyzing…' : result ? 'Re-analyse →' : 'Analyse JD →'}
            </button>

            {error && <p className="cv-error" role="alert">{error}</p>}
          </div>

          {result && meta && (
            <div
              ref={resultRef}
              className={`cv-result cv-result--${result.domain}`}
              aria-live="polite"
              aria-label={`Resume match result: ${meta.title}`}
            >
              {/* 1 — Score header */}
              <div className="cv-score-header">
                <span className={`cv-score-label cv-score-label--${result.overall}`}>
                  {OVERALL_LABEL[result.overall]}
                </span>
                <span className="cv-score-counts">
                  {result.match_count} match · {result.partial_count} partial · {result.gap_count} gap{result.gap_count !== 1 ? 's' : ''}
                </span>
              </div>

              {/* 2a — Error state */}
              {result.error ? (
                <p className="cv-comp-error" role="alert">
                  Could not extract requirements — try pasting more of the job description.
                </p>
              ) : result.fallback ? (
                /* 2b — Fallback notice (no table) */
                <p className="cv-fallback-notice" role="status">
                  Detailed comparison unavailable — AI routing temporarily offline. Resume matched via keyword analysis.
                </p>
              ) : (
                /* 2c — Requirements table */
                <div className="cv-req-table" role="list">
                  {result.requirements.map((req, i) => (
                    <div
                      key={i}
                      className={`cv-req-row cv-req-row--${req.status}`}
                      role="listitem"
                    >
                      <span className={`cv-req-icon cv-req-icon--${req.status}`} aria-hidden="true">
                        {STATUS_ICON[req.status]}
                      </span>
                      <div className="cv-req-body">
                        <span className="cv-req-text">{req.requirement}</span>
                        {(req.evidence || req.gap_detail) && (
                          <p className="cv-req-evidence">
                            {req.evidence ?? req.gap_detail}
                            {req.evidence && req.gap_detail && (
                              <span className="cv-req-gap-detail"> — {req.gap_detail}</span>
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 3 — Download */}
              <div className="cv-action-row">
                <a
                  href={cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cv-pdf-open-btn cv-pdf-open-btn--${result.domain}`}
                  aria-label={`Open ${meta.title} resume PDF`}
                >
                  Open ↗
                </a>
                <a
                  href={cvFile}
                  className={`cv-download cv-download--${result.domain}`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download ${meta.title} resume as PDF`}
                >
                  Download PDF ↓
                </a>
              </div>
            </div>
          )}
        </ScrollFade>
      </div>
    </section>
  )
}
