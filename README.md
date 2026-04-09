# Dogan Septem – Interijeri

Marketing website for **Dogan Septem d.o.o.** — interior renovation and complete apartment/office adaptations in Zagreb, Croatia.

**Live:** [dogan-septem-interijeri.vercel.app](https://dogan-septem-interijeri.vercel.app/)

## Tech Stack

- React 19, TypeScript 5.9, Vite 8
- Tailwind CSS v4 (with `@theme` design tokens)
- Framer Motion, Embla Carousel, Lucide React

## Local Development

```bash
npm install
cp .env.example .env   # then add your Web3Forms key
npm run dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | [Web3Forms](https://web3forms.com/) API key for the contact form |

## Build

```bash
npm run build    # TypeScript check + Vite production build
npm run preview  # Preview production build locally
npm run lint     # ESLint
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Section wrapper
│   ├── sections/     # Page sections (Hero, About, Services, etc.)
│   └── ui/           # Reusable primitives (Button, Logo)
├── lib/
│   ├── constants.ts  # Business info, nav links
│   ├── data.ts       # Content arrays (services, gallery, etc.)
│   └── utils.ts      # cn() utility
public/
└── images/           # Optimized images
```

## Deployment

Deployed on Vercel. Push to `main` triggers auto-deploy. Security headers and caching configured in `vercel.json`.
