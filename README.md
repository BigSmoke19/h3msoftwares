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
- `/team` — Team profiles, pulled from `data/team.ts`
- `/contact` — Contact form (`/api/contact`) plus email, phone, Instagram

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

1. Push to GitHub (`github.com/BigSmoke19/h3msoftwares`).
2. In Vercel, **Add New… → Project** and import the `H3M` repo.
3. Framework preset: **Next.js** (auto-detected). Leave build command
   (`next build`), output, and install command at their defaults.
4. Environment variables (see `.env.example`):
   - `SMTP_USER`, `SMTP_PASS` — required for the contact form to send email.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`
     — optional search-console verification tags.
   - `NEXT_PUBLIC_SITE_URL` — optional; defaults to `https://h3msoftwares.com`.
5. Deploy. Every page is static / SSG; only `/api/contact` runs on demand.

`.nvmrc` pins Node 20; `package.json` `engines` requires Node ≥ 18.18.

Every push to `main` triggers a production deploy; pull requests get
preview URLs automatically.

## SEO

- Company facts live in one place: `lib/site.ts`. Metadata and JSON-LD helpers
  are in `lib/seo.ts`; every page calls `pageMetadata()` for its title,
  description, canonical URL, Open Graph, and Twitter tags.
- `app/sitemap.ts`, `app/robots.ts`, and `app/manifest.ts` use Next's native
  metadata routes. Preview deployments (`VERCEL_ENV=preview`) are disallowed
  in robots.txt.
- Structured data: Organization + WebSite on every page; WebPage/AboutPage/
  ContactPage/CollectionPage with breadcrumbs per page; Service list on
  `/services`; FAQPage on `/about`; CreativeWork per project; Person per
  team member.
- Validate: `npm run build && npm run start`, then `npm run check:seo`
  (set `BASE_URL` if the server isn't on port 3000).
- Only add facts to `lib/site.ts` that are true and public.

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
