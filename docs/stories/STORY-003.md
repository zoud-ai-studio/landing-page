# STORY-003: Hero section

Ticket: ZOU-13 · Size: S (one day) · Data class: INTERNAL

## Why

The Hero is the first thing visitors see. It must convey value and drive the click in under 30 seconds.

## Acceptance criteria

- Given a 375px mobile viewport, When the page loads, Then the headline, one-line pitch, and CTA are visible without scrolling
- Given a 1280px laptop viewport, When the page loads, Then the Hero is centered and does not exceed a reasonable height (≤ 100vh)
- Given the headline "Your web app, built by an AI team, checked by humans", When rendered, Then it is the largest text on the page (or co-equal with the pitch in a responsive variant)
- Given the "Book a free call" button in the Hero, When clicked on mobile, Then the default email client opens with the correct `mailto:` link and subject
- Given the button, When rendered at 375px, Then it is full-width or ≥ 90% of viewport width (touch-friendly)

## Content (Board confirmed — draft values accepted by Board)

| Element | Draft |
|---------|-------|
| Headline | "Your web app, built by an AI team, checked by humans" (Board-provided) |
| One-line pitch | "We turn your idea into a working app — in days, not months." (Board confirmed) |
| CTA text | "Book a free call" |

## Files likely to touch
- `app/(page)/page.tsx` or `pages/index.tsx`
- `components/Hero.tsx`
- `app/layout.tsx` (page title / meta)

## Out of scope
Background images, animations, or scroll-triggered effects. Keep it static and fast.

## Test notes (edge cases QA must try)
- Verify `mailto:` link fires on iOS Safari (sometimes needs `&` encoding in subject)
- Verify the headline does not wrap into an unreadable line on narrow screens (375px)
- Check that no content overflows the viewport horizontally on resize
