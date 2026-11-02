# STORY-008: Pricing section

Ticket: ZOU-13 · Size: S (one day) · Data class: INTERNAL

## Why

Visitors need to know the ballpark before booking a call. Three packages with "from" prices reduce the fear of unknown costs.

## Acceptance criteria

- Given the Pricing section, When rendered at 375px, Then all 3 pricing cards are visible (may be stacked vertically)
- On 1280px, pricing cards are side-by-side (3 columns)
- Each card has a package name, a "from $X" price, and a short bullet list of what's included
- The cheapest package is visually not the most prominent (decoy / target pattern)

## Content (Board confirmed — draft values accepted by Board)

| Package | Price (from) | Notes |
|---------|-------------|-------|
| Starter | $1,000 | For a single-page landing site |
| Growth | $2,000 | For a simple web app |
| Pro | $3,000 | For a multi-page internal tool or complex app |

## Files likely to touch
- `components/Pricing.tsx`

## Out of scope
Feature comparison tables, "most popular" badges that could be misleading, or plan upgrade flows.

## Test notes (edge cases QA must try)
- Verify "from $X" is clearly a starting price (not a fixed price)
- Check that the price numbers are right-aligned or monospaced so they don't jump on resize
- Verify no card is wider than the viewport on 375px
