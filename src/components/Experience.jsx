import React from 'react';
import { experienceData } from '../data/portfolioData';

/**
 * =================================================================
 * EXPERIENCE & MILESTONES SECTION
 * AI TIP: Update roles, education, or version history in portfolioData.js
 * =================================================================
 */
export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-xs uppercase tracking-widest font-semibold text-brand-600 dark:text-brand-400">
          Career & Milestones
        </h2>
        <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Experience & Background
        </h3>
      </div>

      <div className="border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-3 space-y-10">
        {experienceData.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline bullet node */}
            <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-brand-600 bg-white dark:bg-slate-950 group-hover:scale-125 transition-transform"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {item.role}
              </h4>
              <span className="text-xs font-mono text-slate-500">{item.period}</span>
            </div>
            
            <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
              {item.company} &bull; {item.location}
            </p>
            
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
