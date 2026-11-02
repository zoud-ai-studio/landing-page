# Current-version and reality review

Verdict: pass.

## Evidence checked on 2026-11-02

- npm registry: Next.js 16.4.3; package engine requires Node.js at least 20.9.0.
- npm registry: React 19.3.1, TypeScript 7.0.2, Playwright Test 1.64.1, ESLint 10.14.0, Lighthouse CI 0.15.1.
- Node.js release index: Node.js 26.13.0 is the current Lithium LTS release.
- Next.js vendor documentation: `output: 'export'` produces a static export and documents unsupported runtime features.

The seeded versions are mutually compatible by their published engine/peer ranges. Exact transitive versions become lockfile-owned in STORY-001.
