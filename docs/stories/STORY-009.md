# STORY-009: FAQ section

Ticket: ZOU-13 · Size: S (one day) · Data class: INTERNAL

## Why

Anticipates objections before the visitor needs to email. Six common questions, expanded by the visitor.

## Acceptance criteria

- Given the FAQ section, When rendered at 375px, Then all 6 questions are visible without excessive scrolling
- Each question is expandable (accordion pattern) — click to show answer, click again to hide
- Answers are short (≤ 40 words)
- No question has a "TODO: confirm" in the final rendered output (all must have text, even if marked)

## Content (Board confirmed — draft values accepted by Board)

| # | Question (draft) | Answer (draft, ≤ 40 words) |
|---|-----------------|---------------------------|
| 1 | Who owns the code? | You do. We transfer full source code and all assets to you on final delivery. You can modify it, host it, or sell it. |
| 2 | How long does it take? | Most projects ship in 5–10 business days, depending on scope. We share a timeline during the brief. |
| 3 | Can I request changes after delivery? | Yes. Every package includes a 14-day revision window after delivery for minor adjustments and bug fixes. |
| 4 | Is my data safe? | We never store your data on our systems. All communication and files are transferred directly and deleted after delivery. |
| 5 | What technologies do you use? | We build with Next.js, TypeScript, and modern frameworks. You'll receive a clear tech stack doc before any code is written. |
| 6 | How does payment work? | 50% upfront to start, 50% on delivery. We accept bank transfer or card payment. Full details in the engagement brief. |

## Files likely to touch
- `components/FAQ.tsx`

## Out of scope
Search or filter across FAQ items. Simple accordion only.

## Test notes (edge cases QA must try)
- Verify only one answer is open at a time (or all are independent — pick one behavior and test it)
- Check that expandable text does not trigger the mobile keyboard unexpectedly
- Verify that an answer with an inline code reference (e.g., "Next.js") doesn't overflow the card width on 375px
