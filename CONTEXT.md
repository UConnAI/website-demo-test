# Project Context: Canvas Starter Template

## Ubiquitous Language & Glossary

- **Canvas**: The minimal, unopinionated starter template. It provides layout, dark mode, typography, and breathing room, without forcing specific portfolio or product opinions.
- **Approach 1 (Simple Canvas)**: Zero-build, pure HTML5 + Tailwind CSS (via CDN) in a single root `index.html`. Runs immediately by double-clicking or deploying to GitHub Pages root.
- **Approach 2 (Standard Canvas)**: Svelte 5 + Vite 6 + Tailwind CSS modular starter kit located in branch `standard-dev`. Component-driven, fast HMR, and automated GitHub Actions build workflow.
- **AI Scaffolding**: The primary workflow. A human student works alongside an AI assistant (Claude, ChatGPT, Cursor, Antigravity) to reshape and populate the Canvas into whatever they need (research showcase, hackathon demo, SaaS landing page).
- **Hero Section**: The focal point of the page. Minimal, spacious, uncrowded, featuring high-contrast typography, an ambient gradient glow, and a single primary call to action.
- **Modular Foundation (Showcase)**: 3 flexible card blocks below the hero designed to be repurposed into features, projects, or papers.

## Architectural Principles
1. **Low Friction**: Approach 1 requires 0 commands; Approach 2 requires standard `npm install && npm run dev`.
2. **AI Ergonomics**: Clean semantic HTML / Svelte markup with explicit comments and no JSX complexity so AI agents can edit without breaking builds.
3. **Responsive & Accessible**: Strict color-scheme and dark mode support with localStorage persistence and zero Flash of Unstyled Content (FOUC).
