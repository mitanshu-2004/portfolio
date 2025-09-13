import './globals.css';
import Analytics from './components/Analytics';

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio of my work.',
  icons: {
    icon: '/portfolio.png',
  },
  openGraph: {
    images: '/back.png',
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
