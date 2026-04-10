# Dogan Septem – Interijeri

Marketing website for **Dogan Septem d.o.o.** — interior renovation and complete apartment/office adaptations in Zagreb, Croatia.

**Live:** [www.doganseptem-interijeri.hr](https://www.doganseptem-interijeri.hr/)

## Tech Stack

- React 19, TypeScript 5.9, Vite 8
- Tailwind CSS v4 with `@theme` design tokens
- Framer Motion, Embla Carousel, Lucide React
- Playwright smoke tests for key user flows

## Local Development

```bash
npm install
cp .env.example .env
# add your real Web3Forms key
npm run dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | [Web3Forms](https://web3forms.com/) API key for the contact form |

Set the same key in Vercel Preview and Production environment variables. `npm run build` now fails fast if the key is missing or left as `your_key_here`.

## Checks

```bash
npm run lint
npm run build
npm run test:e2e
npm run validate:deploy
```

- `npm run build`: validates the Web3Forms key and the CSP hash for the inline JSON-LD, then runs TypeScript and Vite build.
- `npm run test:e2e`: runs Playwright smoke tests for page load, anchor navigation, mobile menu flow, gallery controls, and contact form states.
- `npm run validate:deploy`: runs only the deployment guards without building.

## Project Structure

```text
src/
  components/
    layout/       Navbar, Footer, Section wrapper
    sections/     Page sections (Hero, About, Services, etc.)
    ui/           Reusable primitives
  lib/
    constants.ts  Business info and nav links
    data.ts       Services, gallery, process, and audience content
    utils.ts      cn() helper
public/
  images/         Optimized site images
tools/
  validate-deploy-config.mjs  Build-time deploy checks
  run-vite-dev.mjs            Test server helper
tests/
  e2e/            Playwright smoke coverage
```

## Deployment

Deployed on Vercel. Pushes to `main` trigger auto-deploy.

- Security headers and caching are configured in [vercel.json](/c:/Users/user1/Documents/GitHub/dogan-septem-interijeri/vercel.json).
- The Content Security Policy includes a hash for the inline JSON-LD block in [index.html](/c:/Users/user1/Documents/GitHub/dogan-septem-interijeri/index.html).
- If the structured data block changes, update the CSP hash and rerun `npm run validate:deploy`.
