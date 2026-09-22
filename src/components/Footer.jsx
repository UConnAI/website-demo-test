import React from 'react';
import { personalInfo } from '../data/portfolioData';

/**
 * =================================================================
 * FOOTER COMPONENT
 * AI TIP: Edit copyright details or template notices here.
 * =================================================================
 */
export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p>Built with Vite, React & Tailwind CSS. Ready for GitHub Pages.</p>
        <a
          href="#hero"
          onClick={scrollToTop}
          className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors cursor-pointer"
        >
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
