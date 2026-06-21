# Ammar Ayaz — Portfolio

A multi-page portfolio built with **Next.js 14 (App Router)** + **TypeScript**, styled after the
Once UI "Magic Portfolio" template: dark theme, a floating vertical icon nav rail, project cards
with aurora-gradient covers and hover effects, and dedicated detail pages for every project.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Deploy

This is a standard Next.js app — deploy in one click on **Vercel** (recommended), or Netlify.
Push to GitHub, import the repo on vercel.com, and it deploys automatically.

## Editing your content

**Everything lives in one file: `lib/content.ts`.**

- `person` — your name, role, tagline and intro (wrap phrases in `**...**` to bold them).
- `social` — email / LinkedIn / GitHub links (used in the nav rail, hero and footer).
- `skills`, `experience`, `education`, `certifications` — the About sections.
- `projects` — each project's card (title, category, summary, `gradient`, `accent`) and its
  detail-page content (`overview`, `sections`, `features`, `takeaway`, optional `link`).

Add a project by appending a new object to the `projects` array — its detail page at
`/work/<slug>` is generated automatically.

## Structure

```
app/
  layout.tsx          # root layout + nav
  page.tsx            # home (hero, projects, experience, skills, education)
  work/[slug]/page.tsx # project detail pages (statically generated)
  not-found.tsx
  globals.css         # all styling + hover effects
components/
  Nav.tsx             # floating vertical icon rail
  ProjectCard.tsx     # gradient project card
  icons.tsx           # inline SVG icons
lib/
  content.ts          # ← all your content
```
