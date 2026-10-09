import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Nopal — Portfolio Desktop',
  description: 'Portfolio desktop retro milik Nopal.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="theme-dark" suppressHydrationWarning>
      <body>
        {children}
        <Script src="/js/portfolio.js?v=20261009c" strategy="afterInteractive" />
      </body>
    </html>
  );
}
