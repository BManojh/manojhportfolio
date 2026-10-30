# Manojh B — Personal Portfolio

A single-page personal portfolio website built with **plain HTML, CSS and JavaScript** — no frameworks, no build step.

## What's inside

| File | Purpose |
| --- | --- |
| `index.html` | Semantic page structure (`header`, `nav`, `main`, `section`, `footer`) |
| `styles.css` | All styling, with CSS custom properties for the light/dark themes |
| `script.js` | Interactions: theme toggle, mobile nav, project filter, scroll-spy |

## Sections

- **Hero** — name, one-line pitch, quick stats
- **About** — profile, education, achievements
- **Skills** — grouped by area (programming, frontend, backend, database, cloud, tools)
- **Projects** — 3 showcases with description, tech stack and GitHub links, filterable by type
- **Contact** — email, phone, GitHub, LinkedIn, location

## JavaScript interactions

1. **Dark / light mode toggle** — respects your system preference and remembers the choice in `localStorage`
2. **Mobile navigation toggle** — hamburger menu below 640px
3. **Project filter** — filter the cards by project type
4. **Scroll-spy** — highlights the current section in the nav
5. **Smooth scrolling** between sections

## Responsive

Tested at mobile (375px), tablet (768px) and desktop (1280px+) widths.

## Run it locally

Option 1 — just open it:

1. Double-click `index.html` (or drag it into a browser tab).

Option 2 — with VS Code:

1. Install the **Live Server** extension.
2. Right-click `index.html` → *Open with Live Server*.

## Tech used

HTML5 · CSS3 (custom properties, flexbox, grid) · Vanilla JavaScript (ES5-compatible IIFE)

## Note

The three project cards currently link to [github.com/BManojh](https://github.com/BManojh). If any project has its own public repository or a live demo, update the `href` in the corresponding `.project-link` in `index.html`.
