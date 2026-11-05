# Suraj Jaiswar — Developer Portfolio

A responsive portfolio built with React, Vite, Tailwind CSS v4, and Lucide React.

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production-ready site is generated in `dist/`.

## Personalize before publishing

1. Replace placeholder email addresses (`your.email@example.com`) in `Hero.jsx` and `Contact.jsx`.
2. Replace the LinkedIn homepage links with your actual LinkedIn profile URL.
3. Add your resume PDF at `public/resume.pdf`. The download button points to this path.
4. Update each project's exact GitHub repository and deployed demo URLs in `src/data/projects.js`. Do not leave profile-level links if a dedicated repository is available.
5. The hero currently uses a custom initials card, not a personal photograph. To use your photo, add it under `public/images/` and update the hero card.
6. Edit learning percentages in `src/data/skills.js`. These are self-assessed learning indicators, not official test scores or professional proficiency ratings.

## Contact form integration

The contact form validates all fields in the browser. It does **not** send messages unless an endpoint is configured.

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_CONTACT_ENDPOINT` to your backend or form-service endpoint.
3. Restart the Vite development server after changing environment variables.

The form sends JSON using `POST` with this body shape:

```json
{
  "name": "Visitor name",
  "email": "visitor@example.com",
  "subject": "Message subject",
  "message": "Message content"
}
```

Your endpoint should return a successful HTTP status (2xx) when the message has been accepted. For a Node.js/Express backend, add a route such as `POST /api/contact`, validate data again on the server, and connect email delivery or database storage as needed. Never put private API keys in frontend environment variables; Vite exposes `VITE_*` values in the browser bundle.

## Tailwind setup

This project uses Tailwind CSS v4 via `@tailwindcss/vite`. The Vite plugin is configured in `vite.config.js`, and `src/index.css` imports Tailwind using `@import "tailwindcss";`. A separate `tailwind.config.js` is not required for this setup.

## Project structure

```text
src/
  components/
    About.jsx
    Contact.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Projects.jsx
    SectionHeading.jsx
    Skills.jsx
  data/
    projects.js
    skills.js
  App.jsx
  index.css
  main.jsx
public/
  images/
    craveclub-preview.svg
    ecommerce-preview.svg
    portfolio-preview.svg
    todo-preview.svg
```

## Notes

- The skill bars animate when the Skills section enters the viewport.
- Project filters work for All, React, and JavaScript.
- The contact form provides inline validation, loading, success, and error states.
- The form prevents duplicate submission while loading.
- The website respects reduced-motion preferences.
- This project does not use client-side routing, so a custom 404 page is unnecessary.
