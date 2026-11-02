# Zoud AI Studio landing page

A single-route Next.js application exported as provider-neutral static files.

## Requirements

- Node.js 26.13.0
- npm 11

## Local verification

```sh
make setup
make check
make test
make e2e
make eval
```

`make check` writes the production export to `out/`. To inspect it locally, run
`node scripts/serve-static.mjs` and open `http://127.0.0.1:4173`.
