# STORY-004: "The Problem" section

Ticket: ZOU-13 · Size: S (one day) · Data class: INTERNAL

## Why

Establishes the pain points that make the visitor want to keep reading. Three concise points, scannable on mobile.

## Acceptance criteria

- Given the Problem section, When rendered at 375px, Then all 3 points are visible without horizontal scrolling
- Given a point item, When rendered on the page, Then it has an icon or visual marker (bullet, number, or simple line icon)
- Each point is short (≤ 8 words for the headline of the point, ≤ 20 words total)

## Content (Board confirmed — draft values accepted by Board)

| # | Point | Notes |
|---|-------|-------|
| 1 | "Agencies are slow and costly" | 8–12 weeks, $20k+ budgets. Most founders never get the first version built. |
| 2 | "Freelancers disappear mid-project" | One person is one person. No backup, no QA, no sign-off process. |
| 3 | "No-code tools hit a wall" | Drag-and-drop builders look great until you need custom logic, APIs, or scale. |

## Files likely to touch
- `components/Problem.tsx`
- `app/(page)/page.tsx` (or section ordering)

## Out of scope
Data, statistics, or external references to support the pain points. This is opinion-led, not research-led.

## Test notes (edge cases QA must try)
- Verify that icon markers don't overlap text on very narrow screens
- Check that the section has adequate spacing from the Hero above and the next section below
