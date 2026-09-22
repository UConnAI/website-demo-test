import React from 'react';
import { projects } from '../data/portfolioData';

/**
 * =================================================================
 * SHOWCASE / PROJECTS SECTION
 * AI TIP: To add a project, simply append an object in portfolioData.js
 * or customize the cards directly below.
 * =================================================================
 */
export default function Projects() {
  const getBadgeClasses = (color) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300';
      case 'purple':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300';
      case 'brand':
      default:
        return 'bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300';
    }
  };

  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-brand-600 dark:text-brand-400">
            Featured Showcase
          </h2>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Recent Work & Prototypes
          </h3>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">Selected personal & team projects</p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 shadow-sm hover:shadow-md hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all duration-200 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${getBadgeClasses(project.badgeColor)}`}>
                  {project.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">{project.year}</span>
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                {project.title}
              </h4>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 text-sm font-medium">
              <a
                href={project.demoUrl}
                className="inline-flex items-center gap-1 text-brand-600 dark:text-brand-400 hover:underline"
              >
                Live Demo &rarr;
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
              >
                Source Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
