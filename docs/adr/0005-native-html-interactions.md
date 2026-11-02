# ADR 0005: Native HTML interactions

- Status: Accepted
- Date: 2026-11-02

## Context

The landing page needs email CTAs and FAQ disclosure but has a strict performance target and no broader application state.

## Decision

Render CTAs as ordinary anchors using the shared exact `mailto:` URI. Render FAQ items as independent native `details`/`summary` elements. Keep all section components as server components.

## Consequences

The interactions work without hydration or a client-state library and retain keyboard behavior. Rich animation, persisted disclosure state, and one-open-at-a-time coordination are deliberately excluded.
