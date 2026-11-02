# ADR 0002: Plain CSS token system

- Status: Accepted
- Date: 2026-11-02

## Context

Ten independently delivered stories must share one calm visual system while keeping the static page small and avoiding unnecessary framework configuration.

## Decision

Use plain CSS with semantic custom properties in `app/globals.css`. The token contract owns the navy/white/teal palette, self-hosted variable font, responsive type, 4px spacing scale, shapes, maximum content width, focus style, and a single `48rem` layout breakpoint. Section-specific rules live in colocated CSS Modules. Do not add Tailwind.

## Consequences

Every section shares a small, inspectable vocabulary and no styling dependency is added. Raw design values in section components are architectural violations.
