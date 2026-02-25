import Link from 'next/link'
import { PROJECT_COUNT } from '@/lib/constants'

export default function Nav() {
  return (
    <nav aria-label="Main navigation">
      <div className="nav-inner">
        <Link href="#hero" className="nav-name">
          MG
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="#experience">
              <span className="nav-exp-full">Experience</span>
              <span className="nav-exp-short">Exp</span>
            </Link>
          </li>
          <li>
            <Link href="#education" className="hide-mobile">
              Education
            </Link>
          </li>
          <li>
            <Link href="#projects">
              Projects{' '}
              <span className="nav-count" aria-label={`${PROJECT_COUNT} projects`}>
                {PROJECT_COUNT}
              </span>
            </Link>
          </li>
          <li>
            <Link href="#stack" className="hide-mobile">
              Stack
            </Link>
          </li>
          <li>
            <Link href="#chat">CV</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
