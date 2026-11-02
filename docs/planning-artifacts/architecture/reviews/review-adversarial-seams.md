# Adversarial seam review

Verdict: pass after tightening the font, CSS, and test-server seams.

## Two-unit attacks

- Hero and Final CTA can each obey their story yet emit different email URIs: closed by AD-2 and the shared immutable URI.
- Pricing and Footer can each own studio metadata: closed by AD-2 and route injection.
- Two sections can choose incompatible class names or local spacing values: closed by AD-4, CSS Modules, and semantic tokens.
- Two icon-bearing stories can choose incompatible icon packages or SVG geometry: closed by AD-5.
- Typography stories can choose different local fonts while obeying “one sans-serif”: closed by naming Inter Variable Latin upright.
- FAQ can introduce a client-state owner that conflicts with the static boundary: closed by AD-6.
- Footer can move into layout while route composition also renders it: closed by AD-3; `app/page.tsx` alone owns the nine-section order.
- A story can pass component mocks but break the exported page: closed by AD-7 production-export browser checks.
- Browser checks can silently use a development server rather than `out/`: closed by the seeded `serve-static.mjs` contract.
- Deployment stories can bind vendor-specific paths prematurely: closed by provider-neutral `out/` and the explicit deployment deferral.

No remaining pair of downstream stories can obey all AD rules while choosing incompatible content ownership, dependency direction, state mutation, asset sourcing, or verification paths.
