<script>
  import { isDark, toggleTheme } from '../lib/theme.js';
</script>

<header class="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-100 dark:border-slate-800/80 transition-colors duration-200">
  <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
    
    <!-- Brand / Logo -->
    <a href="/" class="flex items-center gap-2.5 group">
      <span class="w-7 h-7 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs flex items-center justify-center transition-transform group-hover:scale-105">
        ✦
      </span>
      <span class="font-semibold text-base tracking-tight">Canvas</span>
    </a>

    <!-- Navigation Links -->
    <nav class="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
      <a href="#features" class="hover:text-slate-900 dark:hover:text-white transition-colors">Showcase</a>
      <a href="#prompting" class="hover:text-slate-900 dark:hover:text-white transition-colors">AI Prompts</a>
      <a href="https://github.com" target="_blank" rel="noopener" class="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
    </nav>

    <!-- Theme Toggle -->
    <div class="flex items-center gap-3">
      <button
        type="button"
        on:click={toggleTheme}
        aria-label={$isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        class="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
      >
        {#if $isDark}
          <!-- Sun Icon (dark mode active) -->
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        {:else}
          <!-- Moon Icon (light mode active) -->
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        {/if}
      </button>
    </div>

  </div>
</header>
