---
title: "Landing Page"
status: approved
created: 2026-11-02
updated: 2026-11-02
---

# PRD — Landing Page

## Problem

Small business owners and startup founders need a web app but have no in-house tech team. They worry about price, speed, and whether AI-built code really works. Most discover Zoud AI Studio from a LinkedIn post and land on a single page that must convince them to book a call — in under two minutes, mostly on their phone.

## Goal

Convert visiting founders into booked 20-minute discovery calls.

## Users

| Role | Description |
|------|-------------|
| Founder / small business owner | Non-technical, budget-conscious, needs a web app but lacks a tech team. Primary audience. |
| Startup founder | Similar profile, may have tried no-code tools and hit limitations. Secondary audience. |

## Assumptions

- Visitors arrive from a LinkedIn post (mobile-first context).
- Studio name: "Zoud AI Studio". Contact email confirmed: hello@zoud.ai. Prices confirmed: Starter $499, Growth $1,499, Pro $3,999.
- All copy in the stories is a first draft by the PM. TODO: confirm with the Board.

## Requirements

### Functional

#### R1 — Sections

The page has exactly 9 sections, in this order:

1. **Hero** — headline, one-line pitch, "Book a free call" CTA
2. **The Problem** — 3 pain points (agencies slow/costly, freelancers disappear, no-code hits a wall)
3. **How We Work** — 4-step process (brief → spec approval → build & test → client approval)
4. **What We Build** — 3 service cards (web apps, internal tools, websites)
5. **Why Trust Us** — QA testing, tech lead review, human sign-off
6. **Pricing** — 3 packages with "from" pricing
7. **FAQ** — 6 questions (code ownership, timeline, changes, data safety, tech, payments)
8. **Final CTA** — "Tell us what you want to build" + "Book a free call"
9. **Footer** — studio name, contact email, copyright

#### R2 — CTA Behavior

Every "Book a free call" button opens the user's default email client to a pre-addressed, pre-subjected message:

- **To:** hello@zoud.ai
- **Subject:** `Free call request`

No form, no booking system, no data storage.

#### R3 — Responsive Design

- Mobile-first layout, tested at **375px** (iPhone SE / small phones) and **1280px** (laptop).
- No horizontal scroll at either breakpoint.
- Touch targets ≥ 44px on mobile.

#### R4 — Static Export

- Build produces a static `out/` folder ready for upload to any static host.
- No server, no database, no runtime dependencies.

### Non-Functional

| ID | Requirement | Priority |
|----|-------------|----------|
| NFR1 | Page loads in < 2 seconds on mobile 3G-equivalent connection | High |
| NFR2 | Lighthouse accessibility score ≥ 90 | High |
| NFR3 | Zero JavaScript dependencies required for the email CTA (uses `mailto:`) | Medium |
| NFR4 | No external font or icon CDNs that could break if a registry goes down | Medium |

### Design

| Aspect | Specification |
|--------|---------------|
| Colors | Dark navy (#0a1628 or similar), white background, one teal accent |
| Typography | One clean sans-serif font family |
| Voice | Short, plain words. Modern and calm. No "hype AI" language. |
| Imagery | No stock photos. Use icons or illustrations if needed. |

### Content

- Board provides: studio name ("Zoud AI Studio"), headline (TBD — working: "Your web app, built by an AI team, checked by humans"), contact email, prices.
- Agent drafts all remaining text.
- Any inferred content is marked `TODO: confirm`.

## Out of Scope

- Login / authentication
- Payments
- Blog, CMS, or admin panel
- Chat bot
- Contact form that stores data
- Fake testimonials or client logos
- Hosting / deployment (documented in README)

## Success Metrics

| Metric | Target | Notes |
|--------|--------|-------|
| Click-through on CTA | — | Tracked via UTM on email link once analytics are added; target TBD |
| Mobile load time | < 2s | Measured on Lighthouse |
| Accessibility | ≥ 90 | Lighthouse a11y score |

## Acceptance Criteria (build)

- [ ] All 9 sections render correctly at 375px and 1280px
- [ ] Every "Book a free call" button opens correct `mailto:` link
- [ ] Build produces a static folder ready for upload
- [ ] README documents how to build and deploy
- [ ] GitHub CI checks pass

## Tech Stack

- **Frontend:** Next.js + TypeScript
- **Build:** Static export (`output: 'export'`)
- **Tests:** Playwright for visual/responsive checks
- **Styling:** Tailwind or inline CSS (no framework dependency required by this PRD)

## Stories

See `docs/stories/` — one story per file, each targeting ~one day of work.
