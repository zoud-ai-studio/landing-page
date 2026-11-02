# STORY-001: Project scaffold with static export and CI

Ticket: ZOU-13 · Size: S (one day) · Data class: INTERNAL

## Why

The team needs a working project before any feature work can begin. This establishes the stack, output target, and CI gate.

## Acceptance criteria

- Given the project directory is empty, When I run `npm install`, Then dependencies resolve without errors
- Given dependencies are installed, When I run `make check`, Then TypeScript compilation succeeds with zero errors
- Given dependencies are installed, When I run `make test`, Then the test suite runs (no failures required at scaffold level)
- Given the Next.js config, When I run `next build`, Then the output is a static folder (`out/`) with no server-side code
- Given a push to a feature branch, When GitHub Actions CI runs, Then `make check` and `make test` both pass (or are stubbed)
- The `.gitignore` excludes `node_modules/`, `.next/`, and `out/`

## Files likely to touch
- `package.json`
- `next.config.ts` (or `.js`)
- `tsconfig.json`
- `.github/workflows/ci.yml`
- `Makefile` (update if needed)
- `README.md`

## Out of scope
Any page content, styling, or components. A blank `_app` and `pages` are sufficient.

## Test notes (edge cases QA must try)
- `next build` on a clean repo (no cache)
- CI run on a fresh branch with no prior builds
