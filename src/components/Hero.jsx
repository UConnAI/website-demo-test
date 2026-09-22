import React from 'react';

/**
 * =================================================================
 * HERO SECTION
 * AI TIP: Personalize headline, intro summary, and CTA links.
 * =================================================================
 */
export default function Hero() {
  return (
    <section id="hero" className="pt-8 sm:pt-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      
      {/* Left Column: Copy & CTAs */}
      <div className="flex-1 space-y-6 text-center lg:text-left">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for Summer 2026 Roles & Research
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-400">intelligent systems</span> & modern products.
        </h1>

        {/* Subheadline / Bio */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
          I am a software engineer and machine learning researcher passionate about large language models, autonomous agents, and building resilient full-stack applications.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-medium text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/25 transition-all hover:-translate-y-0.5"
          >
            Explore Showcase
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right Column: Visual / Profile Card */}
      <div className="relative flex-shrink-0">
        {/* Ambient Background Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand-500/30 via-indigo-500/20 to-pink-500/30 blur-2xl opacity-70"></div>
        
        {/* Showcase Graphic / Terminal Card */}
        <div className="relative w-72 sm:w-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <span className="text-xs font-mono text-slate-400">developer.sh</span>
          </div>

          <div className="space-y-2 text-xs font-mono text-slate-600 dark:text-slate-300">
            <p><span className="text-brand-500">$</span> whoami</p>
            <p className="text-slate-900 dark:text-white font-semibold">Alex Morgan</p>
            <p><span className="text-brand-500">$</span> focus</p>
            <p className="text-emerald-600 dark:text-emerald-400">LLM Evals, Agents, Web Tech</p>
            <p><span className="text-brand-500">$</span> status</p>
            <p className="text-indigo-600 dark:text-indigo-400">Shipping new ideas weekly</p>
          </div>

          <div className="pt-2 flex justify-between text-center border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-base">12+</p>
              <p>Projects</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-base">3k+</p>
              <p>GitHub Stars</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-base">99.8%</p>
              <p>Uptime</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
