# Canvas Starter Template (Svelte 5 + Vite + Tailwind CSS)

A minimal, spacious, and modern starter canvas designed to be freely reshaped and scaffolded using **AI assistants** (ChatGPT, Claude, Cursor, Gemini). Built with **Svelte 5** and **Vite** for zero virtual-DOM overhead, clean component ergonomics, and rapid development.

---

## Why Svelte + Vite for AI Scaffolding?

- **HTML-First Simplicity**: Svelte components look and feel like standard HTML. AI agents make fewer syntax mistakes compared to complex JSX / React setups.
- **Spacious & Minimal**: Centered around a clean, uncrowded Hero section and modular foundation cards, leaving plenty of room to scaffold whatever you envision.
- **Lightning-Fast HMR**: Instant updates during local development.
- **Built-in Dark Mode**: System-aware with zero-FOUC script and local storage persistence.
- **GitHub Pages Ready**: Automated deployment workflow included in `.github/workflows/deploy.yml`.

---

## Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or pnpm

### 2. Install & Run Locally
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
npm run preview
```

---

## Project Structure

```text
src/
├── components/
│   ├── Navbar.svelte      # Responsive header & theme toggle
│   ├── Hero.svelte        # Spacious, minimal hero section
│   ├── Showcase.svelte    # 3-card modular foundation
│   ├── PromptGuide.svelte # AI scaffolding instructions
│   └── Footer.svelte      # Minimal footer
├── lib/
│   └── theme.js           # Theme store & localStorage sync
├── App.svelte             # Main page layout
├── app.css                # Tailwind directives & typography
└── main.js                # App entrypoint
```

---

## Deploying to GitHub Pages

This repository includes an automated GitHub Actions deployment workflow in `.github/workflows/deploy.yml`:
1. Push your changes to the `standard-dev` (or `main`) branch.
2. In GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push will automatically build the Svelte app and deploy the `dist/` directory.

---

## License
MIT License. Free to use, adapt, and share.
