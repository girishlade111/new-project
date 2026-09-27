# New Project — Wellness Services Platform

A full-featured, v0-generated Next.js web app for discovering and booking wellness
services — gyms, yoga studios, physiotherapy clinics, haircare salons, and skincare
centers. It ships a rich marketing landing page ("BetterU"), dedicated service
category pages, and a complete user Settings page (profile, preferences, account
management, security).

## What it does

- **Landing page** (`/`): hero search, service-category filters (Near Me, price,
  rating, facials, treatments, consultations), specialist cards, and an interactive
  map view.
- **Service pages** (`/gym`, `/yoga`, `/physiotherapy`, `/haircare`, `/skincare`):
  category-specific listings with imagery and booking-oriented layouts.
- **Settings page** (`/settings`): profile settings (avatar upload with preview,
  name/email/phone/password, address), preferences (light/dark theme, email/SMS/push
  notification toggles, language selection — English/Hindi/Bengali), account
  management (link/unlink Google & Facebook, subscription plan details, upgrade
  button), and security (2FA toggle, last-5-logins activity list), with Save/Cancel
  actions.
- **Account page** (`/account`): account overview section.
- Fully **responsive** (desktop + mobile) card-based UI with soft shadows and
  rounded corners.

> Note: this repository was originally scaffolded by [v0.app](https://v0.app)
> (project "my-v0-project") and later developed further.

## Features

- Client-side rendered landing + category + settings pages (no backend required)
- shadcn/ui component library (accordion, dialog, dropdown, tabs, toast, tooltip,
  and more) on top of Radix UI primitives
- Dark/light mode via `next-themes`
- Form handling with React Hook Form + Zod validation
- Charts and carousels (`recharts`, `embla-carousel-react`)
- Lucide icons, Geist font, Tailwind CSS animations
- Skeleton loading states per route (`loading.tsx`)

## Tech stack

| Layer      | Technology                                   |
| ---------- | -------------------------------------------- |
| Framework  | Next.js 14.2 (App Router, React 18)          |
| Styling    | Tailwind CSS 3.4, tailwindcss-animate        |
| Components | shadcn/ui + Radix UI                         |
| Forms      | React Hook Form, Zod, @hookform/resolvers    |
| Theming    | next-themes                                  |
| Charts     | Recharts 2.15                                |
| Icons      | Lucide React                                 |
| Analytics  | Vercel Analytics                             |
| Language   | TypeScript 5                                 |

## Quick start

Requirements: Node.js 18+ and pnpm (or npm).

```bash
# install dependencies
pnpm install
# or: npm install --legacy-peer-deps

# run the dev server
pnpm dev
# or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
# production build (static export)
pnpm build
# serve locally
pnpm start
```

## Project structure

```
app/                    # Next.js App Router
├── page.tsx            # Landing page (BetterU)
├── layout.tsx          # Root layout + theme provider
├── loading.tsx         # Global loading skeleton
├── gym/                # Gym services page
├── yoga/               # Yoga services page
├── physiotherapy/      # Physiotherapy page
├── haircare/           # Haircare page
├── skincare/           # Skincare page
├── account/            # Account overview
└── settings/           # Settings (profile, preferences, security)
components/
├── ui/                 # shadcn/ui components
├── map-view.tsx        # Interactive map view
└── theme-provider.tsx  # Theme wrapper
lib/
└── utils.ts            # cn() class-name helper
public/                 # Static assets & placeholder images
styles/globals.css      # Extra global styles
next.config.mjs         # Next config (static export + basePath for GitHub Pages)
tailwind.config.ts      # Tailwind theme config
components.json         # shadcn/ui config
```

## Environment variables

None required — the app runs entirely client-side with no backend or API keys.

## Deployment

- **GitHub Pages (this repo):** the app is statically exported (`output: 'export'`
  in `next.config.mjs`) with `basePath: '/new-project'` so it serves correctly from
  the project subpath. Live at https://girishlade111.github.io/new-project/
  > If you deploy this app at a domain root (e.g. Vercel), **remove the `basePath`**
  > from `next.config.mjs` — it is only needed for the `/new-project` subpath.
- **Vercel:** import the repo and deploy; `next build` works out of the box
  (ESLint and TS errors are set to not fail builds in `next.config.mjs`).
- Build output goes to `out/` (git-ignored).

## License

Free to use. Built by Girish Lade — https://ladestack.in
