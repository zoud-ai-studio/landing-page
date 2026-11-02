# Architecture — Zoud AI Studio Landing Page

This is a single-route, static-exported Next.js page. It uses layered architecture with unidirectional composition: the route owns section order and injects immutable typed content into presentational section components. There is no backend, database, application API, runtime configuration, or server-side mutation.

The invariant-focused source of truth is the [architecture spine](planning-artifacts/architecture/ARCHITECTURE-SPINE.md). Major trade-offs are recorded in [ADRs](adr/).

## Components and dependency direction

```text
app/page.tsx ──> lib/content.ts ──> lib/content-types.ts
      │
      └──> components/sections/* ──> components/ui/*
                    └─────────────> lib/content-types.ts
```

- `app/layout.tsx`: metadata, self-hosted font, global shell.
- `app/page.tsx`: the only owner of the nine-section order: Hero, Problem, How We Work, What We Build, Why Trust Us, Pricing, FAQ, Final CTA, Footer.
- `components/sections/`: one server component and one CSS Module per page section. Sections accept props; they do not import the content singleton or one another.
- `components/ui/`: `Section`, `Card`, `ButtonLink`, and typed inline `Icon` primitives. UI primitives know nothing about product copy.
- `lib/content.ts`: the only owner of approved public copy, prices, contact details, and the shared CTA URI.
- `lib/content-types.ts`: readonly TypeScript contracts for content.
- `app/globals.css`: reset, design tokens, shared responsive layout utilities, and focus treatment. Section-specific rules live in colocated CSS Modules. Use plain CSS; do not introduce Tailwind.
- `tests/e2e/`: browser-observed acceptance at the two required viewports. Do not mock layout, links, browser disclosure, or export behavior.

## Data model

The data is immutable build-time content, not persisted application state.

```ts
type SiteContent = Readonly<{
  studio: { name: string; email: string; mailtoHref: string };
  hero: { headline: string; pitch: string; ctaLabel: string };
  problems: readonly ContentItem[];
  processSteps: readonly NumberedItem[];
  services: readonly ContentItem[];
  trustSignals: readonly ContentItem[];
  pricingPlans: readonly PricingPlan[];
  faqs: readonly FaqItem[];
  finalCta: { headline: string; ctaLabel: string };
}>;
```

Every collection item has a stable string `id`, title, and short body. A `PricingPlan` adds a display-only `fromPrice` and readonly feature strings. An `FaqItem` has `question` and `answer`. Prices remain strings because the site performs no arithmetic or payment. The footer year is derived at build time with `new Date().getFullYear()` rather than stored as content.

Board-confirmed values override the older placeholder wording in the PRD:

- Studio: `Zoud AI Studio`
- Email: `hello@zoud.ae`
- Prices: Starter `$1,000`, Growth `$2,000`, Pro `$3,000`
- Headline and story copy: the drafts marked Board-confirmed in STORY-003 through STORY-010

## Public contracts

There is no HTTP or application API.

- CTA URI: `mailto:hello@zoud.ae?subject=Free%20call%20request`. Both CTAs use the same exported constant and render as ordinary anchors.
- Build contract: `next build` with `output: 'export'` produces provider-neutral files in `out/` and no server bundle is required at runtime.
- FAQ contract: each question is a native, independently operable `<details><summary>…</summary>…</details>` disclosure. No client component or persisted state is needed.
- Component contract: `page.tsx` injects typed props; sections emit semantic HTML and may depend only on content types and UI primitives.

## Design system

Use semantic CSS custom properties; components must not invent raw colors or spacing.

| Token group | Values / rule |
| --- | --- |
| Palette | navy `#0A1628`; ink `#102033`; white `#FFFFFF`; soft surface `#F6F8FA`; teal dark `#0F766E`; teal light `#5EEAD4` |
| Typography | Self-host Inter Variable Latin upright WOFF2 with its OFL license and `next/font/local`; scale: 14, 16, 18, 24, 32, 48, 64px via `clamp()` where responsive |
| Spacing | 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96px |
| Shape | Cards 16px radius, buttons 12px radius, 1px quiet borders, restrained shadow only on elevated cards |
| Content width | `72rem` maximum, centered; horizontal padding 16px at 375px and 32px from 48rem |
| Focus and targets | 2px teal/ink visible focus ring with offset; interactive minimum size 44×44px |

Teal is the sole accent hue. Use dark teal on white when text contrast is required and light teal on navy. Do not place white text on the light teal token.

Icons are local typed inline SVGs with a `24 24` view box, `currentColor`, and consistent 24px default size. Decorative icons use `aria-hidden="true"` and `focusable="false"`; meaningful icons require an accessible name. Do not add an icon package or external icon/font CDN.

## Responsive behavior

Base rules target 375px. The single layout breakpoint is `48rem` (768px); 1280px is the required desktop verification viewport, not a second styling system.

| Area | 375px | 1280px |
| --- | --- | --- |
| Page padding | 16px | 32px within a centered 72rem container |
| Hero | One column; CTA at least 90% width; headline, pitch, and CTA visible in the first viewport | Centered; constrained copy; height no more than 100vh |
| Problem / Services / Trust / Pricing | One-column stack | Three-column grid |
| Process | Four stacked rows with left-aligned number/icon | Four equal columns |
| FAQ | One column, full-width disclosures | One constrained column for readable line length |
| Footer | Stacked | Inline alignment where space allows |

No element may cause horizontal scrolling. Long strings must wrap, grids use `minmax(0, 1fr)`, and images/SVGs must stay within their containers.

## Build, run, and test

Use only the repository commands defined in `AGENTS.md`:

- `make setup`: install the lockfile-defined Node dependencies and Playwright browser.
- `make check`: ESLint, `tsc --noEmit`, and a production static build; fail if `out/index.html` is absent.
- `make test`: run the fast Playwright acceptance subset against the production export.
- `make e2e`: run all Playwright tests against the production export at 375×812 and 1280×800.
- `make eval`: run Lighthouse CI against the exported page; accessibility and performance scores must each be at least 0.90 and Largest Contentful Paint must be at most 2,000ms.

`scripts/serve-static.mjs` serves `out/` during browser checks using only Node built-ins, so verification does not add a runtime or test-server package.

Story tests must begin from their Given/When/Then criteria. Required cross-story checks include exact section order and copy, both exact mailto URIs, no horizontal overflow, 44px targets, responsive grids, keyboard-visible focus, native FAQ disclosure, static export output, no external font/icon requests, and Lighthouse thresholds.

The seeded toolchain is Node.js 26 LTS, Next.js and `eslint-config-next` 16.4.3, React 19.3.1, TypeScript 7.0.2, Playwright 1.64.1, ESLint 10.14.0, and Lighthouse CI 0.15.1. The lockfile owns exact transitive versions after STORY-001.

## Delivery constraints

- Static export only; any Next.js feature unsupported by `output: 'export'` is prohibited.
- No server, database, external CDN, analytics, CMS, forms, payments, authentication, or deployment automation.
- New dependencies require a one-line reason in the PR. Prefer platform capabilities and native HTML.
- STORY-001 is explicitly authorized to add `.github/workflows/ci.yml`; later stories must not change `.github/` unless their ticket says so.
