# STORY-002: Design tokens — colors, typography, and base layout

Ticket: ZOU-13 · Size: S (one day) · Data class: INTERNAL

## Why

All sections share a common visual language. Design tokens ensure consistency and make it easy for the Board to swap values later (e.g. studio name, accent color).

## Acceptance criteria

- Given the design system file, When rendered at any page width, Then colors use dark navy background/primary, white surface, and one teal accent
- Given a heading, paragraph, and button in each section, When rendered on the page, Then typography uses a single sans-serif font family with consistent scale (heading > body > caption)
- Given the viewport width of 375px and 1280px, When the base layout is rendered, Then there is no horizontal scroll and padding/spacing is proportional
- Touch targets (buttons) are ≥ 44px on mobile viewports

## Files likely to touch
- `app/globals.css` (or equivalent CSS file)
- `lib/design-tokens.ts` or `styles/tokens.css`
- Any config file that defines Tailwind/theme colors (if using Tailwind)

## Out of scope
Page sections, icons, illustrations, or content text.

## Test notes (edge cases QA must try)
- Verify contrast ratio between text and background meets WCAG AA (≥ 4.5:1 for body, ≥ 3:1 for large text)
- Check that the teal accent on white text does NOT pass contrast (it shouldn't — accent should be on dark backgrounds)
- Verify no system fonts fall back to a different family on any tested OS
