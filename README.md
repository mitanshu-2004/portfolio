# Mitanshu Goel — Portfolio (Next.js 15)

Production-grade personal portfolio. Next.js 15, App Router, TypeScript strict, zero Tailwind.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Global CSS — exact port of original design
- **Fonts**: `next/font/google` — self-hosted Lora, DM Sans, DM Mono (zero render-blocking requests)
- **Deployment**: Vercel (recommended)

## Local Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # verify build before deploying
```

## Deployment — Vercel (recommended)

1. Push this repository to GitHub
2. Import at [vercel.com/new](https://vercel.com/new) — framework auto-detected as Next.js
3. Add custom domain: `mitanshugoel.dev`
4. Click Deploy

## Post-Deployment Checklist

| Task | Tool |
|---|---|
| Submit sitemap | [Google Search Console](https://search.google.com/search-console) → Sitemaps → `https://mitanshugoel.dev/sitemap.xml` |
| Submit to Bing | [Bing Webmaster Tools](https://www.bing.com/webmasters) → Sitemaps |
| Verify robots.txt | `https://mitanshugoel.dev/robots.txt` — all AI crawlers allowed |
| Verify llms.txt | `https://mitanshugoel.dev/llms.txt` — complete Markdown profile |
| Test structured data | [Rich Results Test](https://search.google.com/test/rich-results) |
| Test Open Graph | [Facebook Debugger](https://developers.facebook.com/tools/debug) |
| Add GSC verification | Replace `REPLACE_WITH_GSC_VERIFICATION_CODE` in `app/layout.tsx` |
| Update CV links | Replace `href="#cv"` in `components/CV.tsx` with actual PDF URLs |

## File Tree

```
mitanshu-portfolio/
├── app/
│   ├── globals.css          ← All CSS, font vars, sr-only
│   ├── layout.tsx           ← Fonts, metadata, JSON-LD Person schema
│   ├── page.tsx             ← Home: all sections + ItemList + FAQ schemas
│   ├── sitemap.ts           → /sitemap.xml
│   ├── robots.ts            → /robots.txt (AI crawlers allowed)
│   ├── not-found.tsx        ← 404 page
│   └── opengraph-image.tsx  → /opengraph-image (edge, dynamic OG)
├── components/
│   ├── ScrollFade.tsx       ← ONLY 'use client' — IntersectionObserver fade
│   ├── Nav.tsx              ← Fixed nav
│   ├── Hero.tsx             ← h1, links
│   ├── Focus.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx         ← SVG glyphs, schema ids, anchor ids
│   ├── Stack.tsx
│   ├── CV.tsx               ← <time dateTime="2025-08"> for GEO recency
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── schema.ts            ← Person, ItemList, FAQPage JSON-LD
├── public/
│   ├── llms.txt             ← AI crawler profile (GEO)
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   └── site.webmanifest
├── next.config.ts
├── tsconfig.json
└── package.json
```

## SEO & GEO Infrastructure

- **Person schema** (JSON-LD in `<head>`)
- **ItemList schema** (4 projects as SoftwareApplication)
- **FAQPage schema** — highest-value GEO signal for AI citation
- **llms.txt** — structured Markdown profile for AI crawlers
- **robots.ts** — explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended
- **sr-only semantic summary** — AI RAG chunking top-of-document context
- **`<time dateTime="2025-08">`** — machine-readable recency signal
- **Anchor ids on projects** match Schema `@id` fragments (`#darwin-studio` etc.)
