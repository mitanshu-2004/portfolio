import './globals.css';
import Analytics from './components/Analytics';

export const metadata = {
  title: 'Mitanshu Goel',
  description:
    'Engineering student specializing in robotics, AI, and full-stack development. ',
  icons: {
    icon: '/portfolio.png',
  },
  openGraph: {
    title: 'Mitanshu Goel | Robotics, AI & Software Engineer',
    description:
      'Engineering student specializing in robotics, AI, and full-stack development. ',
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
    title: 'Mitanshu Goel | Robotics, AI & Software Engineer',
    description:
      'Engineering student specializing in robotics, AI, and full-stack development.',
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
