import './globals.css';
import Analytics from './components/Analytics';

export const metadata = {
  metadataBase: new URL('https://mitanshu.me'),
  title: {
    default: 'Mitanshu Goel - Portfolio',
    template: '%s | Mitanshu Goel - Portfolio',
  },
  description:
    'Explore the portfolio of Mitanshu Goel, an engineering student specializing in robotics, AI, and full-stack development. Featuring projects in ROS, computer vision, machine learning, and web technologies.',
  keywords: [
    'Mitanshu Goel',
    'robotics',
    'AI',
    'artificial intelligence',
    'full-stack development',
    'software engineer',
    'portfolio',
    'ROS',
    'computer vision',
    'machine learning',
    'web development',
    'Next.js',
    'React',
    'Python',
    'C++',
    'embedded systems',
  ],
  alternates: {
    canonical: 'https://mitanshu.me',
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
  author: {
    name: 'Mitanshu Goel',
    url: 'https://mitanshu.me',
  },
  creator: 'Mitanshu Goel',
  publisher: 'Mitanshu Goel',
  lastModified: '2025-09-13',
  icons: {
    icon: '/portfolio.png',
    shortcut: '/portfolio.png',
    apple: '/portfolio.png',
  },
  themeColor: '#1a202c', // A dark theme color
  openGraph: {
    title: 'Mitanshu Goel - Portfolio',
    description:
      'Explore the portfolio of Mitanshu Goel, an engineering student specializing in robotics, AI, and full-stack development. Featuring projects in ROS, computer vision, machine learning, and web technologies.',
    url: 'https://mitanshu.me',
    siteName: 'Mitanshu Goel Portfolio',
    images: [
      {
        url: 'https://mitanshu.me/back.png',
        width: 1200,
        height: 630,
        alt: 'Mitanshu Goel Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitanshu Goel - Portfolio',
    description:
      'Explore the portfolio of Mitanshu Goel, an engineering student specializing in robotics, AI, and full-stack development. Featuring projects in ROS, computer vision, machine learning, and web technologies.',
    creator: '@MitanshuGoel', // Replace with actual Twitter handle if available
    images: ['https://mitanshu.me/back.png'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
