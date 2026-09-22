import React from 'react';
import { skillsData } from '../data/portfolioData';

/**
 * =================================================================
 * SKILLS & TECHNOLOGIES SECTION
 * AI TIP: Add or remove technical competencies in portfolioData.js
 * or modify the categories below.
 * =================================================================
 */
export default function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-xs uppercase tracking-widest font-semibold text-brand-600 dark:text-brand-400">
          Technical Competencies
        </h2>
        <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Skills & Toolkit
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4"
          >
            <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${category.accentColor}`}></span>
              {category.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
