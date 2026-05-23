import type { Metadata } from 'next'
import ResumeView from '@/components/ResumeView'
import AutoPrint from '@/components/AutoPrint'
import type { ResumeDomain } from '@/lib/resume-data'
import { RESUMES } from '@/lib/resume-data'

const VALID: ResumeDomain[] = ['robotics', 'ai', 'ds', 'web']

function parseDomain(raw: string | undefined): ResumeDomain {
  if (raw && VALID.includes(raw as ResumeDomain)) return raw as ResumeDomain
  return 'robotics'
}

type Props = {
  searchParams: Promise<{ domain?: string; print?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { domain: raw } = await searchParams
  const domain = parseDomain(raw)
  const title = RESUMES[domain].title
  return {
    title: `CV — ${title}`,
    description: `${RESUMES[domain].summary.slice(0, 155)}…`,
    alternates: {
      canonical: `https://mitanshu.me/cv?domain=${domain}`,
    },
  }
}

export default async function CVPage({ searchParams }: Props) {
  const { domain: raw, print } = await searchParams
  const domain = parseDomain(raw)
  const autoPrint = print === 'true'

  return (
    <div className="cv-route-page container">
      {autoPrint && <AutoPrint />}
      <p className="cv-route-hint">
        <a href="/">← Back to portfolio</a>
        {' · '}
        Pick a domain below, then use <strong>Print / Save as PDF</strong> for
        recruiters (same content as{' '}
        <code>mitanshu.me/cv?domain={domain}&amp;print=true</code>).
      </p>
      <ResumeView domain={domain} />
    </div>
  )
}
