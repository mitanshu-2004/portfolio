import './globals.css';
import Analytics from './components/Analytics';

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio of my work.',
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
