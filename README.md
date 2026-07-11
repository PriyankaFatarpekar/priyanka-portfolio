# Priyanka Fatarpekar Portfolio

A single-page portfolio for Priyanka Fatarpekar, built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons. The site is structured around reusable sections and a central content object, so profile details, projects, certifications, links, and copy can be updated without digging through JSX.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4 via `@tailwindcss/vite`
- Lucide React icons
- CSS keyframe animations and Intersection Observer

## Features

- Sticky responsive navbar with mobile menu
- Light/dark theme toggle with `localStorage` persistence
- Scroll progress indicator
- Animated hero, section reveal, floating skill tags, and project card hover effects
- Data-driven About, Skills, Experience, Projects, Certifications, and Contact sections
- Featured ClientFlow CRM project
- Project detail modal with optional screenshots, GitHub link, and optional deployed link
- Contact section with email copy action and social links
- Resume CTA that supports an external Drive link and hides when no link is configured

## Project Structure

```text
src/
  App.tsx                         Page composition and shared state
  index.css                       Tailwind import, theme tokens, global styles, animations
  data/
    portfolio.ts                  All portfolio content and links
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      ScrollProgress.tsx
    sections/
      Hero.tsx
      About.tsx
      Skills.tsx
      Experience.tsx
      Projects.tsx
      Certifications.tsx
      Contact.tsx
    ui/
      SectionLabel.tsx
      ProjectCard.tsx
      ProjectModal.tsx
      CertificationCard.tsx
```

## Editing Content

Most site content lives in:

```text
src/data/portfolio.ts
```

Update this file for:

- Name, email, location, GitHub, LinkedIn, portfolio metadata
- Resume Drive link
- Hero text and skill tags
- About stats and summary
- Skills categories
- Experience entries
- Project cards and project detail modal content
- Certification names and certificate URLs
- Contact copy

## Resume Link

The local `public/resume.pdf` file is intentionally not used. Use a Google Drive link instead:

```ts
resumeUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
```

If `resumeUrl` is empty, the Download Resume button is hidden automatically.

## Project Links and Images

Each project supports optional deployed and GitHub links:

```ts
deploymentUrl: "https://example.com",
github: "https://github.com/username/repo",
```

If `deploymentUrl` is empty, the View deployed button is not shown.

Project modal screenshots can be added through the `images` array:

```ts
images: [
  { src: "/projects/clientflow-dashboard.png", alt: "ClientFlow dashboard" },
]
```

If `images` is empty, no screenshot placeholder is rendered.

## Certifications

Certificate links can be added later in `portfolio.ts`:

```ts
{ issuer: "NPTEL", name: "Software Testing", url: "https://certificate-link" }
```

If `url` is empty, the card stays visible but does not navigate anywhere.

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Run lint:

```bash
pnpm lint
```

Preview the production build:

```bash
pnpm preview
```

## Deployment

This project is ready for Vercel deployment. Use the default Vite settings:

- Build command: `pnpm build`
- Output directory: `dist`

## Notes

- Keep portfolio copy in `src/data/portfolio.ts` instead of hardcoding it in components.
- Use Drive for resume updates so the portfolio does not need redeployment for every resume change.
- Add project screenshots to `public/` and reference them from each project's `images` array.
