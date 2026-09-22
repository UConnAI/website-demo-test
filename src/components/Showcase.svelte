<script>
  export let items = [
    {
      icon: '🚀',
      tag: '01 / FEATURE',
      title: 'Project Alpha',
      description: 'Replace this with your primary product highlight, research finding, or application demo.',
      linkText: 'Learn more →',
      linkHref: '#',
    },
    {
      icon: '⚡',
      tag: '02 / FEATURE',
      title: 'Project Beta',
      description: 'A flexible secondary slot. Easily customized with screenshots, interactive demos, or live metrics.',
      linkText: 'Learn more →',
      linkHref: '#',
    },
    {
      icon: '🌐',
      tag: '03 / FEATURE',
      title: 'Project Gamma',
      description: 'Ready for one-click deployment directly to GitHub Pages from the repository root.',
      linkText: 'Learn more →',
      linkHref: '#',
    },
  ];
</script>

<section id="features" class="py-16 border-t border-slate-100 dark:border-slate-900">
  <div class="space-y-4 text-center max-w-xl mx-auto mb-16">
    <h2 class="text-xs uppercase tracking-widest font-semibold text-brand-600 dark:text-brand-400">Modular Foundation</h2>
    <h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Clean blocks ready to adapt.</h3>
    <p class="text-sm text-slate-500 dark:text-slate-400">No opinions or heavy dependencies. Just clean styling and breathing room.</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    {#each items as item}
      <article class="p-8 rounded-2xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group">
        <div class="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-lg mb-6 shadow-sm group-hover:scale-110 transition-transform">
          {item.icon}
        </div>
        <span class="text-xs font-mono text-slate-400 dark:text-slate-500">{item.tag}</span>
        <h4 class="mt-2 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
        <p class="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {item.description}
        </p>
        <div class="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/80">
          <a href={item.linkHref} class="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline">{item.linkText}</a>
        </div>
      </article>
    {/each}
  </div>
</section>
