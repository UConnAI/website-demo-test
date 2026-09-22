/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * AI TIP: You can customize your portfolio content simply by updating
 * this file, or ask an AI:
 * "Update portfolioData.js with my information: [Your Details]"
 */

export const personalInfo = {
  name: "Alex Morgan",
  initials: "AM",
  title: "Building intelligent systems & modern products.",
  headline: "Building intelligent systems & modern products.",
  status: "Available for Summer 2026 Roles & Research",
  bio: "I am a software engineer and machine learning researcher passionate about large language models, autonomous agents, and building resilient full-stack applications.",
  aboutParagraphs: [
    "I specialize in taking experimental ideas from proof-of-concept to production. My work bridges the gap between deep machine learning models and intuitive user interfaces. I believe in clean code, rapid prototyping, and software that delivers immediate tangible value.",
    "When I'm not training models or polishing frontend layouts, you can find me collaborating on open-source repositories, writing technical breakdowns, or participating in hackathons. I am always open to exploring novel challenges and collaborating on high-impact projects."
  ],
  terminal: {
    filename: "developer.sh",
    commands: [
      { cmd: "whoami", output: "Alex Morgan", highlight: false },
      { cmd: "focus", output: "LLM Evals, Agents, Web Tech", highlight: "emerald" },
      { cmd: "status", output: "Shipping new ideas weekly", highlight: "indigo" }
    ],
    stats: [
      { value: "12+", label: "Projects" },
      { value: "3k+", label: "GitHub Stars" },
      { value: "99.8%", label: "Uptime" }
    ]
  },
  social: {
    email: "alex.morgan.demo@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
};

export const projects = [
  {
    id: "agentmesh",
    title: "AgentMesh Framework",
    category: "AI / Agent",
    year: "2026",
    badgeColor: "brand",
    description: "A lightweight multi-agent orchestration runtime designed for asynchronous task delegation, tool execution, and consensus evaluation.",
    tags: ["Python", "FastAPI", "LangGraph"],
    demoUrl: "#",
    sourceUrl: "https://github.com"
  },
  {
    id: "neural-search",
    title: "Neural Search Studio",
    category: "Machine Learning",
    year: "2025",
    badgeColor: "emerald",
    description: "Vector search exploration interface combining hybrid BM25 and dense embeddings with real-time reranking metrics and latency graphs.",
    tags: ["PyTorch", "Qdrant", "TailwindCSS"],
    demoUrl: "#",
    sourceUrl: "https://github.com"
  },
  {
    id: "evalpulse",
    title: "EvalPulse Analytics",
    category: "Web Application",
    year: "2025",
    badgeColor: "purple",
    description: "Interactive dashboard for monitoring continuous model drift, hallucination benchmark tests, and latency telemetry across endpoints.",
    tags: ["TypeScript", "Chart.js", "Docker"],
    demoUrl: "#",
    sourceUrl: "https://github.com"
  }
];

export const skillsData = [
  {
    category: "Languages & Core",
    accentColor: "bg-brand-500",
    skills: ["Python", "TypeScript", "JavaScript (ES6+)", "SQL", "C++", "Go"]
  },
  {
    category: "AI & Machine Learning",
    accentColor: "bg-emerald-500",
    skills: ["PyTorch", "Hugging Face", "LangChain / LangGraph", "vLLM", "Fine-tuning (PEFT/LoRA)", "Transformers"]
  },
  {
    category: "Web & Infrastructure",
    accentColor: "bg-purple-500",
    skills: ["FastAPI", "React", "TailwindCSS", "Docker", "GitHub Actions", "PostgreSQL", "Vite"]
  }
];

export const experienceData = [
  {
    role: "AI Research Intern",
    company: "NextGen AI Labs",
    location: "Cambridge, MA",
    period: "Jun 2025 — Aug 2025",
    description: "Researched parameter-efficient fine-tuning methods for domain-specialized LLMs. Reduced inference memory overhead by 34% while maintaining benchmark accuracy on complex code generation tasks."
  },
  {
    role: "Undergraduate Research Fellow",
    company: "Autonomous Computing Group",
    location: "Storrs, CT",
    period: "Sep 2024 — Present",
    description: "Co-authored research on verifiable multi-agent communication protocols. Implemented evaluation suites benchmarking reasoning reliability across open-weights models."
  },
  {
    role: "B.S. in Computer Science",
    company: "School of Computing",
    location: "Storrs, CT",
    period: "Expected May 2026",
    description: "Relevant Coursework: Machine Learning, Data Structures & Algorithms, Distributed Systems, Deep Learning for Natural Language Processing."
  }
];
