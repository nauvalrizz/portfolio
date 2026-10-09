'use client';

import { bodyHtml } from '@/lib/bodyHtml';

// Seluruh markup body dirender verbatim dari versi statis.
// Seluruh logika interaktif (82KB vanilla JS) dimuat lewat
// public/js/portfolio.js setelah hydration, sehingga perilaku
// situs sama persis dengan versi HTML aslinya.
export default function PortfolioPage() {
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
