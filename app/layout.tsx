import type { Metadata } from 'next'
import { Lora, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import NavActiveState from '@/components/NavActiveState'
import Footer from '@/components/Footer'
import { personSchema } from '@/lib/schema'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mitanshu Goel — AI & Robotics Engineer',
    template: '%s | Mitanshu Goel',
  },
  description:
    'AI and robotics systems engineer building edge-deployed inference pipelines, robot perception systems, and embedded AI. B.Tech ECE, MAIT Delhi. Open to research engineering and robotics roles.',
  keywords: [
    'AI engineer',
    'robotics engineer',
    'data science engineer',
    'machine learning engineer',
    'machine learning',
    'ROS2',
    'YOLOv8',
    'edge inference',
    'embedded AI',
    'Delhi',
    'Mitanshu Goel',
    'MAIT',
    'computer vision',
    'SLAM',
    'llama.cpp',
    'SDXL',
    'reinforcement learning',
    'research engineering',
  ],
  authors: [{ name: 'Mitanshu Goel', url: 'https://mitanshu.me' }],
  creator: 'Mitanshu Goel',
  metadataBase: new URL('https://mitanshu.me'),
  alternates: {
    canonical: 'https://mitanshu.me',
  },
  openGraph: {
    type: 'profile',
    firstName: 'Mitanshu',
    lastName: 'Goel',
    username: 'mitanshugoel',
    gender: 'male',
    locale: 'en_IN',
    siteName: 'Mitanshu Goel',
    url: 'https://mitanshu.me',
    title: 'Mitanshu Goel — AI & Robotics Engineer',
    description:
      'AI and robotics systems engineer building edge-deployed inference pipelines, robot perception systems, and embedded AI. B.Tech ECE, MAIT Delhi. Open to research engineering and robotics roles.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mitanshu Goel — AI & Robotics Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitanshu Goel — AI & Robotics Engineer',
    description:
      'AI and robotics systems engineer building edge-deployed inference pipelines, robot perception systems, and embedded AI.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  // P4-5: GSC verification code removed — add after deploying to Vercel
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <head>
        {/* P4-4: theme-color for mobile browser chrome */}
        <meta name="theme-color" content="#f7f5f0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* Strip URL hash on load so browser doesn't auto-scroll to #chat etc. */}
        <script dangerouslySetInnerHTML={{ __html: `if(window.location.hash)history.replaceState(null,'',location.pathname+location.search)` }} />
      </head>
      <body>
        {/* P3-1: skip navigation */}
        <a href="#hero" className="skip-link">
          Skip to main content
        </a>
        <NavActiveState />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
