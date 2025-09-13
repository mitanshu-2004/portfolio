import './globals.css';
import Analytics from './components/Analytics';

export const metadata = {
  title: 'Mitanshu Goel -  Portfolio',
  description:
    'Explore the portfolio of Mitanshu Goel, an engineering student specializing in robotics, AI, and full-stack development. Featuring projects in ROS, computer vision, machine learning, and web technologies.',
  keywords: 'Mitanshu Goel, robotics, AI, artificial intelligence, full-stack development, software engineer, portfolio, ROS, computer vision, machine learning, web development, Next.js, React, Python, C++, embedded systems',
  author: 'Mitanshu Goel',
  creator: 'Mitanshu Goel',
  publisher: 'Mitanshu Goel',
  lastModified: '2025-09-13',
  icons: {
    icon: '/portfolio.png',
  },
  openGraph: {
    title: 'Mitanshu Goel -  Portfolio',
    description:
      'Explore the portfolio of Mitanshu Goel, an engineering student specializing in robotics, AI, and full-stack development. Featuring projects in ROS, computer vision, machine learning, and web technologies.',
    url: 'https://mitanshu.me',
    siteName: 'Mitanshu Goel Portfolio',
    images: [
      {
        url: '/back.png',
        width: 1200,
        height: 630,
        alt: 'Mitanshu Goel Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mitanshu Goel -  Portfolio',
    description:
      'Explore the portfolio of Mitanshu Goel, an engineering student specializing in robotics, AI, and full-stack development. Featuring projects in ROS, computer vision, machine learning, and web technologies.',
    images: ['/back.png'],
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
