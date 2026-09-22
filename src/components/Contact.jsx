import React from 'react';
import { personalInfo } from '../data/portfolioData';

/**
 * =================================================================
 * CONTACT SECTION
 * AI TIP: Update contact links, email, or messaging in portfolioData.js
 * =================================================================
 */
export default function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-700 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Subtle ambient blur circle */}
        <div className="absolute -right-10 -bottom-10 w-60 h-60 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>

        <div className="relative space-y-6 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's build something remarkable.
          </h2>
          <p className="text-brand-100 text-base sm:text-lg leading-relaxed">
            Whether you want to discuss research collaborations, have questions about my projects, or just want to connect, feel free to reach out!
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="px-5 py-3 rounded-lg font-medium bg-white text-brand-700 hover:bg-brand-50 shadow transition-all hover:-translate-y-0.5"
            >
              {personalInfo.social.email}
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg font-medium bg-brand-800/60 hover:bg-brand-800 text-white border border-brand-400/30 transition-all hover:-translate-y-0.5"
            >
              GitHub Profile
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg font-medium bg-brand-800/60 hover:bg-brand-800 text-white border border-brand-400/30 transition-all hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
