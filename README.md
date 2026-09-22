# Showcase & Portfolio Template (HTML + Tailwind CSS)

A clean, modern, and zero-build starter template for building personal portfolios and product showcases. Designed specifically to work out-of-the-box with **zero terminal commands** and to be effortlessly customized using **AI assistants** (ChatGPT, Claude, Cursor, Gemini).

---

## Features

- **Zero Build Setup**: Pure HTML5 and Tailwind CSS (via CDN). No Node.js, `npm`, or build pipelines required. Double-click `index.html` to open it in any browser.
- **GitHub Pages Ready**: One-click deployment from the `main` branch or via the included GitHub Actions workflow.
- **Dark Mode Support**: Built-in dark/light mode toggle with system preference detection and `localStorage` persistence (no Flash of Unstyled Content).
- **AI-Extensible Architecture**: Clear, semantic section tags and comments (`<!-- SECTION: ... -->`) making it easy to prompt an AI assistant to add, edit, or restyle components.
- **Fully Responsive**: Mobile-first design with a responsive navigation drawer and fluid grid layouts.
- **Unbranded**: Neutral and customizable design suitable for developer portfolios, researcher showcases, product landing pages, or hackathon demos.

---

## Quick Start

### 1. Preview Locally
You do not need to install anything. Simply:
- Double-click [`index.html`](index.html) to open it in your browser.
- *(Optional)* In VS Code, right-click [`index.html`](index.html) and select **"Open with Live Server"**.

### 2. Customize Content
Open [`index.html`](index.html) in your favorite code editor. The file is organized into clearly labeled sections:
- `<!-- ==================== NAVIGATION ==================== -->`: Brand name, nav links, and theme toggle.
- `<!-- ==================== HERO SECTION ==================== -->`: Headline, intro pitch, and call-to-action buttons.
- `<!-- ==================== SHOWCASE / PROJECTS ==================== -->`: Grid of project/product cards with tags and links.
- `<!-- ==================== SKILLS & TECHNOLOGIES ==================== -->`: Badges for tools, frameworks, and languages.
- `<!-- ==================== EXPERIENCE & MILESTONES ==================== -->`: Timeline of roles, education, or version releases.
- `<!-- ==================== CONTACT & SOCIAL ==================== -->`: Links to GitHub, LinkedIn, email, and social profiles.
- `<!-- ==================== FOOTER ==================== -->`: Copyright and back-to-top link.

---

## Working with AI Assistants

This template is structured so that you can prompt an AI assistant to make changes without breaking styles or build configs.

### Example Prompts to Copy & Paste

- **Add a New Project**:
  > *"I want to add a new project to the Showcase section in [`index.html`](index.html). The project is called 'Autonomous Drone Nav', built with PyTorch and ROS. It has a GitHub link and a live demo link. Give me the HTML card block to insert."*

- **Change Theme Colors**:
  > *"Change the primary accent color in the Tailwind script config from indigo to emerald green throughout [`index.html`](index.html)."*

- **Convert to a Product Landing Page**:
  > *"Adapt the Hero and Showcase sections of [`index.html`](index.html) to pitch a developer SaaS tool called 'FastAPI Studio' instead of a personal portfolio."*

---

## Deploying to GitHub Pages

### Method A: Deploy from Branch (Fastest)
1. Push this repository to GitHub.
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Set the branch to `main` and folder to `/ (root)`. Click **Save**.
5. Your site will be live at `https://<username>.github.io/<repo-name>/` within a minute.

### Method B: GitHub Actions Workflow
A ready-to-run deployment workflow is included in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
In repository **Settings** > **Pages**, set **Source** to **GitHub Actions**, and any push to `main` will automatically deploy.

---

## Architectural Comparison: Simple vs. Standard Development

When building a website, you generally choose between two approaches. Use this section to evaluate which path fits your project goals:

| Feature / Goal | Simple Approach (This Template) | Standard Web Dev Approach |
| :--- | :--- | :--- |
| **Tech Stack** | Pure HTML5 + Tailwind CDN | Vite / Next.js / Astro + Tailwind CLI |
| **Prerequisites** | None. No Node.js, npm, or terminal required. | Node.js (v18+), npm/pnpm, terminal comfort. |
| **Time to First Edit** | Instant (< 1 minute). | 5–10 minutes (`npm install`, dev server). |
| **AI Collaboration** | **High & forgiving**: AI generates clean HTML blocks; no risk of build errors or broken imports. | **Moderate**: AI can write modern components, but students must troubleshoot compilation errors. |
| **Modularity** | Single or multi-page HTML with semantic section comments. | Reusable component files (`<Navbar />`, `<Card />`). |
| **Deployment** | 1-click GitHub Pages directly from `/ (root)`. | Requires a build step and CI/CD workflow (`npm run build`). |
| **When to Choose** | You want to launch quickly, showcase work, and focus on content and design using AI. | You are building a complex web app with heavy state management, external APIs, or team collaboration. |

### Upgrading to a Standard Build Later
If your project grows to dozens of pages or requires complex JavaScript libraries, you can ask your AI assistant:
> *"Help me convert my [`index.html`](index.html) into a Vite + Tailwind CSS project while preserving all styling and structure."*

---

## License
MIT License. Free to use, adapt, and share.
