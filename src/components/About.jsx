import React from 'react';

/**
 * =================================================================
 * ABOUT SECTION
 * AI TIP: Update personal background, research interests, or vision.
 * =================================================================
 */
export default function About() {
  return (
    <section id="about" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xs uppercase tracking-widest font-semibold text-brand-600 dark:text-brand-400">
          About Me
        </h2>
        <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Curious engineer, builder, and problem solver.
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-600 dark:text-slate-300 leading-relaxed">
        <p>
          I specialize in taking experimental ideas from proof-of-concept to production. My work bridges the gap between deep machine learning models and intuitive user interfaces. I believe in clean code, rapid prototyping, and software that delivers immediate tangible value.
        </p>
        <p>
          When I'm not training models or polishing frontend layouts, you can find me collaborating on open-source repositories, writing technical breakdowns, or participating in hackathons. I am always open to exploring novel challenges and collaborating on high-impact projects.
        </p>
      </div>
    </section>
  );
}
