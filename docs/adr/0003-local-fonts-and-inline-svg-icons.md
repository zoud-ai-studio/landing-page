# ADR 0003: Local fonts and inline SVG icons

- Status: Accepted
- Date: 2026-11-02

## Context

The page must have stable typography and consistent visual markers without external font/icon CDNs or a large icon dependency.

## Decision

Commit Inter Variable Latin upright WOFF2 and its OFL license under `public/fonts/`, loaded with `next/font/local`. Implement the small required icon set as typed local inline-SVG components using a `24 24` view box and `currentColor`.

## Consequences

Fonts and icons remain available offline and in static exports. Contributors must preserve the font license and accessibility rules; adding an icon package or remote asset requires a superseding ADR.
