# Context Maintenance Rule (Mandatory)
After every meaningful project action, the active LLM/agent must update this `context.md` file immediately, preserving this exact section order and table format.

## Project Snapshot
- Project: Stack and Loop website (portfolio for a solo AI workflow automation firm)
- Audience: SMB founders/operators
- Stack: Next.js (App Router, TypeScript), Tailwind CSS, shadcn/ui, React, GSAP (planned), Resend (planned)
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

## Current Next Steps
1. Initialize shadcn/ui and add base components.
2. Build Neo Brutalist design system and narrative sections.
3. Add scroll animation architecture and Resend-backed contact form.
4. Run quality checks and ship final deploy-ready pass.
