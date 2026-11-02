# STORY-010: Final CTA and Footer

Ticket: ZOU-13 · Size: S (one day) · Data class: INTERNAL

## Why

The last chance to convert. A short, warm closing line + CTA, followed by minimal footer info.

## Acceptance criteria

- Given the Final CTA section, When rendered at 375px, Then "Tell us what you want to build" and the "Book a free call" button are visible
- The CTA button in the Final CTA uses the same `mailto:` link and subject as the Hero
- Given the Footer, When rendered on any viewport, Then it shows: studio name, contact email, copyright with current year
- The Footer is at the bottom of the page and does not scroll on small content

## Content (Board confirmed — draft values accepted by Board)

| Element | Draft |
|---------|-------|
| CTA headline | "Tell us what you want to build." (Board confirmed) |
| CTA button | "Book a free call" (same as Hero) |
| Footer — name | Zoud AI Studio (Board confirmed) |
| Footer — email | hello@zoud.ai (Board confirmed) |
| Footer — copyright | © {year} {Studio Name}. All rights reserved. |

## Files likely to touch
- `components/FinalCTA.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (Footer included in layout)

## Out of scope
Social links, sitemap navigation, legal pages, or cookie banners. Minimal footer only.

## Test notes (edge cases QA must try)
- Verify the `mailto:` subject is URL-encoded (spaces → `+` or `%20`)
- Verify the copyright year updates to the current calendar year (not hardcoded to 2026)
- Check that the Footer stays at the bottom even when page content is short (sticky footer)
