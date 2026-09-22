import { writable } from 'svelte/store';

const initialDark = typeof window !== 'undefined' && (
  localStorage.getItem('color-theme') === 'dark' ||
  (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
);

export const isDark = writable(initialDark);

export function toggleTheme() {
  isDark.update(dark => {
    const next = !dark;
    if (typeof document !== 'undefined') {
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        const meta = document.querySelector('meta[name="color-scheme"]');
        if (meta) meta.content = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        const meta = document.querySelector('meta[name="color-scheme"]');
        if (meta) meta.content = 'light';
      }
    }
    return next;
  });
}
