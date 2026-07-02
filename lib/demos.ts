// lib/demos.ts
// The demo reel: every self-hosted robot video on the site.
// Rendered by components/Demos.tsx; ordering is display order.

export interface Demo {
  id: string
  src: string
  poster?: string
  orientation: 'landscape' | 'portrait'
  title: string
  caption: string
  contextHref: string
  external?: { label: string; href: string }
}

export const DEMOS: Demo[] = [
  {
    id: 'dualarm',
    src: '/dualarm-teleop-demo.mp4',
    orientation: 'landscape',
    title: 'Dual-arm VR teleoperation',
    caption:
      'Both Elite CS66 arms driven live from Quest 3 controllers. That is me operating.',
    contextHref: '#nferent',
    external: {
      label: 'YouTube',
      href: 'https://www.youtube.com/watch?v=kUlfE-U_5m4',
    },
  },
  {
    id: 'tesollo',
    src: '/tesollo-rps-demo.mp4',
    poster: '/tesollo-poster.jpg',
    orientation: 'landscape',
    title: 'Dexterous hand',
    caption:
      'The Tesollo DG-5F playing Stone, Paper, Scissors. Sound on.',
    contextHref: '#nferent',
    external: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/posts/teleoperation-research-robots-ugcPost-7478032354410737664-uXAB/',
    },
  },
  {
    id: 'franka',
    src: '/franka-teleop-demo.mp4',
    poster: '/franka-poster.jpg',
    orientation: 'portrait',
    title: 'Franka teleop',
    caption: 'Stacking rings with the Franka Research 3 over a Quest controller.',
    contextHref: '#nferent',
  },
  {
    id: 'manus',
    src: '/manus-gloves-demo.mp4',
    poster: '/manus-poster.jpg',
    orientation: 'portrait',
    title: 'MANUS glove capture',
    caption: 'Both gloves tracked live, every finger mirrored on screen.',
    contextHref: '#nferent',
  },
  {
    id: 'bodhi',
    src: '/bodhi-voice-demo.mp4',
    poster: '/bodhi-poster.jpg',
    orientation: 'portrait',
    title: 'Bodhi voice assistant',
    caption:
      'Wakes on "Hi Bodhi", hears a question, speaks the answer. Sound on.',
    contextHref: '#sarthakai',
  },
]
