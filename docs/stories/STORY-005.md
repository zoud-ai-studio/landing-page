# STORY-005: "How We Work" section

Ticket: ZOU-13 · Size: S (one day) · Data class: INTERNAL

## Why

Shows the process so the visitor feels in control. Four clear steps, numbered, with icons.

## Acceptance criteria

- Given the How We Work section, When rendered at 375px, Then all 4 steps are visible without scrolling
- Given each step, When rendered on mobile, Then the step number/icon and label are left-aligned or stacked (not crowded)
- Steps appear in numbered order (1 → 2 → 3 → 4)

## Content (Board confirmed — draft values accepted by Board)

| Step | Label |
|------|-------|
| 1 | Brief — Tell us what you need |
| 2 | Spec — You approve the plan before we start |
| 3 | Built & tested — We code it and QA every change |
| 4 | You approve — Nothing ships without your OK |

## Files likely to touch
- `components/HowWeWork.tsx`

## Out of scope
Interactive step expansion, tooltips, or animations. Static display only.

## Test notes (edge cases QA must try)
- Verify that numbered indicators don't overlap on the smallest viewport
- Check that step descriptions are ≤ 2 lines on 375px
