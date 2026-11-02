# STORY-007: "Why Trust Us" section

Ticket: ZOU-13 · Size: S (one day) · Data class: INTERNAL

## Why

Address the visitor's trust concerns before they see pricing. Three quality signals.

## Acceptance criteria

- Given the Why Trust Us section, When rendered at 375px, Then all 3 trust points are visible without scrolling
- Each point has a short headline (≤ 12 words) and a one-line description
- Visual treatment is consistent with other content sections (same padding, spacing)

## Content (Board confirmed — draft values accepted by Board)

| # | Headline (draft) | Description (draft) |
|---|-----------------|--------------------|
| 1 | Every change is tested by QA | TODO: confirm — "Automated tests catch bugs before you see them." |
| 2 | Reviewed by a tech lead | TODO: confirm — "Senior oversight on every deliverable." |
| 3 | Approved by a human | TODO: confirm — "Nothing goes live without your explicit OK." |

## Files likely to touch
- `components/WhyTrustUs.tsx`

## Out of scope
Team photos, bios, certifications, or logos. Simple text + icon.

## Test notes (edge cases QA must try)
- Verify no description overflows into two paragraphs on mobile
- Check that icons don't suggest something different than the text (e.g., don't use a shield icon for a QA point if the text doesn't mention security)
