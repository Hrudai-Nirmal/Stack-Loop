# Context Maintenance Rule (Mandatory)
After every meaningful project action, the active LLM/agent must update this `context.md` file immediately, preserving this exact section order and table format.

## Project Snapshot
- Project: Stack and Loop website (portfolio for a solo AI workflow automation firm)
- Audience: SMB founders/operators
- Stack: Next.js (App Router, TypeScript), Tailwind CSS v4, shadcn/ui, React, GSAP, Resend
- Visual Direction: Light Neo Brutalist (bold black strokes, high contrast, punchy primary accents)
- Narrative Structure: Hero empathy -> Problem/Solution -> Implementation process -> Contact conversion
- Deployment Target: Vercel (frontend)
- Repo: https://github.com/Hrudai-Nirmal/Stack-Loop.git (`main`)

## Action Log
| Timestamp (IST) | Action | Files Touched | Commit SHA | Branch | Pushed | Notes |
|---|---|---|---|---|---|---|
| 2026-05-18 20:37 | Initialized local git repo and linked remote | `.git` config | `1ce1137` | `main` | yes | `git init -b main`, added `origin` |
| 2026-05-18 20:37 | Bootstrapped Next.js app with pnpm (temp dir), moved into repo root | Project scaffold files | `1ce1137` | `main` | yes | Used temp dir due to naming restriction on `Stack_and_Loop` |
| 2026-05-18 20:38 | Created initial context file with required structure | `context.md` | `1ce1137` | `main` | yes | Baseline project memory started |
| 2026-05-18 20:39 | Committed and pushed bootstrap baseline | Git history + remote | `1ce1137` | `main` | yes | Root commit pushed to GitHub |
| 2026-05-18 20:41 | Initialized shadcn setup and generated base UI components | `components.json`, `src/components/ui/*` | pending | `main` | no | Repaired pnpm virtual-store mismatch and installed missing dependencies manually |
| 2026-05-18 20:43 | Established design-system foundation and utility layer | `src/app/globals.css`, `src/app/layout.tsx`, `src/lib/utils.ts`, `package.json` | pending | `main` | no | Added Neo Brutalist theme tokens, custom fonts, and class merge utility |

## Current Next Steps
1. Build narrative page sections with reusable React primitives.
2. Add robust GSAP scroll/text animation architecture with reduced-motion fallback.
3. Add Resend-backed contact API + validation + spam guard + UI integration.
4. Run quality checks and ship final deploy-ready pass.
