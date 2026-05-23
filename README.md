# mitanshu.me

Personal site. Next.js 15 on Edge Runtime, with a chatbot that recruiters can ask things about me. The chatbot is grounded against a single TypeScript file (`lib/knowledge.ts`); it refuses to make claims that aren't in there.

## What's in here

`app/` — the routes. The interesting one is `/api/chat`, an Edge endpoint that hits Groq with a system prompt assembled from `lib/knowledge.ts`. There's also `/opengraph-image` (dynamic OG image), `/sitemap.xml`, `/robots.txt`, and the landing page.

`components/` — Hero, Experience, Projects, CV, Chat, Contact, etc. Standard React.

`lib/resume-data.ts` — single source of truth for the four CV views (AI, robotics, DS, web). The on-page renderer and the print-to-PDF both read from this file. When I add a project I update one place.

`lib/knowledge.ts` — the chatbot's grounded context. Mirrors `resume-data.ts` in prose form. Updated in lockstep.

`lib/groq-client.ts` — the multi-key Groq client. Round-robin across however many keys are in `GROQ_API_KEYS`, with proper rate-limit handling: when a key hits 429, it gets parked for the duration Groq tells it to wait (parsed from the error message), and the next request goes to a different key. The 3-strike circuit-breaker only kicks in on non-rate-limit failures (timeouts, 5xx, auth) — a 429 is not the key's fault.

`middleware.ts` — strict CSP and HSTS-preload. Any inline-script regression breaks the page, which is the point.

## Environment

| Variable | Required | What it does |
|---|---|---|
| `GROQ_API_KEYS` | yes (or fall back to single key below) | Comma-separated Groq keys. Multi-key gets you N× per-minute throughput because the failover code parks rate-limited keys instead of permanently disabling them. |
| `GROQ_API_KEY` | only if `GROQ_API_KEYS` is empty | Single-key mode. |
| `CONTACT_EMAIL` | optional | Shown by the chatbot when it can't answer something. Defaults to the address in the source. |
| `SENTRY_DSN` | optional | Enables Sentry; if unset, errors go to console. |

In Vercel, paste the keys into `GROQ_API_KEYS` as a single comma-separated string. No quotes around the value, no whitespace around the commas. The parser trims, but the Vercel UI sometimes mangles quoted strings.

## Setup

```bash
npm install
cp .env.example .env.local        # fill in GROQ_API_KEYS
npm run dev                        # localhost:3000
npm run build && npm start         # production build
```

## Updating content

`lib/resume-data.ts` is usually the only file you need to touch. The chatbot's knowledge base (`lib/knowledge.ts`) mirrors it in prose form and is updated in parallel — change one, change the other.
