# Showcase & Portfolio Template (Vite + React + Tailwind CSS)

A modern, minimal, and unopinionated starter template for personal portfolios, researcher showcases, and product demos. Built with **Vite**, **React**, and **Tailwind CSS**, this repository provides a lean, flexible foundation designed specifically for students and builders to scaffold and customize with **AI assistants** (ChatGPT, Claude, Cursor, Gemini).

---

## Features

- **Blazing Fast Vite Build**: Sub-second dev server startup and Instant Hot Module Replacement (HMR).
- **Modular Component Architecture**: Clean, single-responsibility components in `src/components/` that are easy to inspect, rearrange, or prompt an AI to rewrite.
- **Tailwind CSS + Dark Mode**: Native Tailwind dark mode support with system preference detection and `localStorage` persistence (no Flash of Unstyled Content).
- **Single-Source Data File**: Edit your projects, bio, skills, and links in `src/data/portfolioData.js` or directly inside the JSX components.
- **GitHub Pages Ready**: Pre-configured with relative base paths (`base: process.env.BASE_PATH || './'`) and an automated `.github/workflows/deploy.yml` GitHub Actions workflow.
- **Zero Bloat**: No heavy UI frameworks or complex state machines. Kept deliberately lightweight so you and your AI agent have full freedom to scaffold whatever you envision.

---

## Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment to Pages
├── index.html                  # HTML entry point with FOUC prevention
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind theme and dark mode setup
├── vite.config.js              # Vite configuration (Pages base path)
├── src/
│   ├── App.jsx                 # Main layout orchestrator
│   ├── index.css               # Tailwind directives & base styles
│   ├── main.jsx                # React DOM entry point
│   ├── context/
│   │   └── ThemeContext.jsx    # Lightweight theme provider (light/dark)
│   ├── data/
│   │   └── portfolioData.js    # Default content, projects, and bio
│   └── components/
│       ├── Navbar.jsx          # Desktop & mobile nav + theme toggle
│       ├── Hero.jsx            # Headline, bio, CTA & terminal card
│       ├── About.jsx           # Personal background & interests
│       ├── Projects.jsx        # Project cards grid with tags & links
│       ├── Skills.jsx          # Categorized competency badges
│       ├── Experience.jsx      # Vertical milestone timeline
│       ├── Contact.jsx         # Call-to-action & social links
│       └── Footer.jsx          # Copyright & back-to-top button
```

---

## Prerequisites

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** (included with Node.js) or **pnpm** / **yarn**

Verify your environment:
```bash
node -v
npm -v
```

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the URL displayed in your terminal). Any changes you make to the code will reflect instantly in the browser.

### 3. Build & Preview for Production
To test the production build locally:
```bash
npm run build
npm run preview
```
The compiled static assets will be output to the `dist/` directory.

---

## Deploying to GitHub Pages

This template includes a ready-to-run GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Step-by-Step Setup:
1. Push your repository to GitHub.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push a commit to the `main` branch (or run the workflow manually via the **Actions** tab).
5. GitHub Actions will install dependencies, build the Vite app, and deploy the `dist/` bundle to `https://<username>.github.io/<repo-name>/`.

> **Note on Base Paths**: The `vite.config.js` uses `base: process.env.BASE_PATH || './'`, ensuring all assets load correctly regardless of whether the site is served from a root domain or a repository subpath (e.g. `/my-portfolio/`).

---

## Scaffolding & Customizing with AI

This repository is designed to be an AI-friendly playground. Because components are decoupled and unopinionated, you can prompt your favorite AI assistant to reshape the site quickly.

### Example Prompts

#### 1. Personalize Content
> *"I'm customizing this portfolio template. Look at `src/data/portfolioData.js`. Replace the placeholder info with my background: Computer Science student at UConn, focused on NLP research. Here are my 3 projects: [Project 1], [Project 2], [Project 3]."*

#### 2. Re-scaffold into a Product Landing Page
> *"Help me convert this portfolio into a SaaS product landing page in `src/App.jsx`. Replace the Experience and Skills sections with a Features grid and a Pricing table component in `src/components/`."*

#### 3. Add an Interactive Filter or Search
> *"In `src/components/Projects.jsx`, add category filter buttons ('All', 'AI/ML', 'Web') above the project grid and implement state to filter the displayed projects."*

#### 4. Switch Color Palette or Styling
> *"In `tailwind.config.js`, change the primary brand color palette from indigo to emerald green, and add a subtle hover animation to each card in `src/components/Projects.jsx`."*

#### 5. Add a Working Contact Form
> *"Replace the static contact links in `src/components/Contact.jsx` with an interactive form that sends messages via Formspree or EmailJS."*

---

## Architectural Comparison

| Dimension | Approach 1: Simple (HTML + Tailwind CDN) | Approach 2: Standard (This Template - Vite + React) |
| :--- | :--- | :--- |
| **Tech Stack** | Pure HTML5 + Tailwind CDN script | Vite 6 + React 18 + Tailwind CSS 3 |
| **Prerequisites** | None (double-click `index.html`) | Node.js 18+ and npm |
| **Modularity** | Single HTML file with semantic comments | Reusable JSX components & shared Theme Context |
| **State Management** | Vanilla JS DOM manipulation | React hooks (`useState`, `useContext`, `useEffect`) |
| **Extensibility** | Best for quick static pages & copy tweaks | Best for interactive apps, routing, and dynamic data |
| **Build Pipeline** | Zero build step | Optimized tree-shaken production bundle (`npm run build`) |

---

## License

MIT License. Free to use, adapt, and share.
