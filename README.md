# Stack and Loop

Neo Brutalist, scroll-based portfolio website for a solo AI workflow automation firm.

## Tech

- Next.js (App Router + TypeScript)
- Tailwind CSS v4
- shadcn/ui components
- GSAP + ScrollTrigger for narrative motion
- Resend API for contact delivery

## Local Development

```bash
pnpm install
pnpm dev
```

App runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill values:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`
- `NEXT_PUBLIC_SOCIAL_CTA_URL`

## Contact Flow

- Frontend form posts to `POST /api/contact`
- Server validates payload with `zod`
- Honeypot field (`website`) and IP rate-limit guard reduce spam
- Resend sends inquiry to configured recipient

## Deployment (Vercel)

1. Import this repo into Vercel.
2. Set all required env vars in Vercel project settings.
3. Deploy from `main`.

Every push to `main` triggers a new deployment.
