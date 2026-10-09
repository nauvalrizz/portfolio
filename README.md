# Portfolio Next.js — Nopal

Convert 1:1 dari versi HTML statis ke Next.js 14 (App Router). Seluruh isi,
tampilan, dan fitur sama persis dengan versi statis terakhir — nggak ada yang
diubah, cuma dibungkus jadi project Next.js.

## Cara jalanin

**Syarat:** Node.js versi LTS (download di https://nodejs.org).

```bash
# 1. Masuk ke folder ini
cd portfolio-nextjs

# 2. Install dependency (sekali aja)
npm install

# 3. Jalanin mode development
npm run dev
```

Buka http://localhost:3000 di browser.

**Buat production:**

```bash
npm run build
npm start
```

## Deploy ke Vercel (gratis)

1. Push folder ini ke GitHub.
2. Buka https://vercel.com → Import Project → pilih repo-nya.
3. Klik Deploy. Selesai, langsung dapat link publik.

## Struktur folder

```
portfolio-nextjs/
├── app/
│   ├── layout.js      → <html>, <head>, metadata, load script
│   ├── page.js        → halaman utama (render body verbatim)
│   └── globals.css    → seluruh CSS (±83KB, verbatim dari versi statis)
├── lib/
│   └── bodyHtml.js    → seluruh markup <body> (±54KB, verbatim)
├── public/
│   └── js/
│       └── portfolio.js → seluruh logika interaktif (±82KB vanilla JS,
│                           dimuat setelah hydration via next/script)
├── next.config.js
├── package.json
└── jsconfig.json
```

## Catatan

- `page.js` pakai `'use client'` + `dangerouslySetInnerHTML` biar markup-nya
  100% identik dengan versi statis — nol risiko beda render.
- `portfolio.js` jalan setelah hydration (`strategy="afterInteractive"`),
  jadi semua event listener nempel ke DOM yang sudah ada, persis kayak
  `<script>` di akhir `<body>` pada versi aslinya.
- Mau nambah screenshot proyek nanti? Taruh file-nya di `public/`,
  terus referensikan sebagai `/nama-file.png`.

## Update 2026-10-06

Sinkronisasi 4 fitur yang masuk ke versi live setelah 30 Sep 2026:
tombol LIVE DEMO di 4 panel proyek (MuSantara, Village Website, Capit Store,
News5), konten Contact window yang diperbarui (+ tombol CONTACT ME di About),
dan video Si Tupat di panelnya (`public/assets/`).

Catatan jujur: markup fitur-fitur ini diambil persis dari versi live;
CSS-nya ditulis ulang mengikuti pola yang sudah ada (bukan verbatim dari
file aslinya). `npm run build` lolos tanpa error.

## Versi

- Next.js 14.2.x, React 18 — `npm run build` lolos tanpa error/warning.
