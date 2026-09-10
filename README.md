# H3M Softwares — portfolio website

A Next.js 14 (App Router) marketing site for H3M Softwares, styled after the
"Aura" dark/glass design language and built around the brand's navy/blue
`< H3M >` logo.

## Pages

- `/` — Landing page (hero, services teaser, featured projects, team teaser, CTA)
- `/about` — Company story and engineering principles
- `/services` — Detailed service offerings
- `/projects` — Project list, pulled from `data/projects.ts`
- `/projects/[slug]` — Project detail pages (Ali's Store, H3M POS)
- `/team` — Team profile(s), pulled from `data/team.ts`
- `/contact` — Contact channels (email, phone, Instagram)

## Content data

- `data/team.ts` — adapted from `MohammadSafieddine.md`
- `data/projects.ts` — adapted from the two `PORTFOLIO.md` files (Ali's Store
  e-commerce platform and H3M POS)

To add a new team member or project, add an entry to the corresponding array
— the site pages render straight from these files, no other code changes
needed.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deploying to Vercel

The repo is a standard Next.js 14 App Router project — Vercel needs no
configuration file.

1. Push to GitHub (already at `github.com/BigSmoke19/H3M`).
2. In Vercel, **Add New… → Project** and import the `H3M` repo.
3. Framework preset: **Next.js** (auto-detected). Leave build command
   (`next build`), output, and install command at their defaults.
4. No environment variables are required — the site has no backend,
   no database, and no secrets.
5. Deploy. All 12 routes are static / SSG, so the result is a fully
   prerendered site on Vercel's CDN.

`.nvmrc` pins Node 20; `package.json` `engines` requires Node ≥ 18.18.

Every push to `main` triggers a production deploy; pull requests get
preview URLs automatically.

## Design tokens

- Background: `#040E27` (sampled from the logo)
- Brand blue: `#3972FD` (sampled from the logo)
- Font: Inter
- Card treatment: `.liquid-glass` utility in `app/globals.css`
- Headline accent: `.shine` animated gradient utility

## Contact info used on the site

- Email: h3msoftwares@gmail.com
- Phone: +961 81 076 393
- Instagram: @h3msoftwares
