# ADR 0004: Typed content has one owner

- Status: Accepted
- Date: 2026-11-02

## Context

The email address, CTA URI, prices, and product copy appear in multiple independently built sections and can drift if embedded directly in components.

## Decision

Store approved public content once in `lib/content.ts`, constrained by readonly contracts in `lib/content-types.ts`. `app/page.tsx` injects slices into presentational section components. Sections cannot import the content singleton or one another.

## Consequences

Repeated values remain consistent and content changes have one review point. There is no CMS or runtime configuration; adding either requires a later scope decision.
