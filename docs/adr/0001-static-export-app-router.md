# ADR 0001: Static export with the Next.js App Router

- Status: Accepted
- Date: 2026-11-02

## Context

The approved product is one public route deployable to any static host. It has no server, database, form submission, authentication, payment, or request-time content.

## Decision

Use the Next.js App Router with server components and `output: 'export'`. `next build` must create `out/`. Production code cannot depend on request-time rendering, route handlers, server actions, cookies, or other runtime-only features.

## Consequences

The deployment artifact is portable and has no application runtime. Features that need a server or runtime personalization require a later ADR and scope approval.
