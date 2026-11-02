# STORY-006: "What We Build" section

Ticket: ZOU-13 · Size: S (one day) · Data class: INTERNAL

## Why

Shows the visitor what Zoud AI Studio actually delivers. Three cards, scannable, no fluff.

## Acceptance criteria

- Given the What We Build section, When rendered at 375px, Then all 3 cards are visible without horizontal scrolling
- Cards are in a single column on mobile, ≥ 3 columns on 1280px
- Each card has a title and a short description (≤ 30 words)
- Each card has a simple icon or visual indicator

## Content (Board confirmed — draft values accepted by Board)

| Card | Title | Description (draft) |
|------|-------|--------------------|
| 1 | Web apps | TODO: confirm — e.g. "Dashboards, marketplaces, booking platforms" |
| 2 | Internal tools | TODO: confirm — e.g. "Scheduling, inventory, reporting" |
| 3 | Websites | TODO: confirm — e.g. "Company sites, portfolios, event pages" |

## Files likely to touch
- `components/WhatWeBuild.tsx`

## Out of scope
Interactive hover effects, routing to detail pages, or image-based cards.

## Test notes (edge cases QA must try)
- Verify cards don't wrap unexpectedly at common widths (375px, 768px, 1024px, 1280px)
- Check that icon markers are consistently sized across all cards
