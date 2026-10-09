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
        <script dangerouslySetInnerHTML={{__html: `document.addEventListener('pointerdown',function(e){var b=e.target.closest&&e.target.closest('[data-action="maximize"]');if(b){b.style.outline='4px solid blue';var w=b.closest('.window');if(w){w.classList.toggle('maximized');}}},true);`}} />
        <Script src="/js/portfolio.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
