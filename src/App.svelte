<script>
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import Showcase from './components/Showcase.svelte';
  import PromptGuide from './components/PromptGuide.svelte';
  import Footer from './components/Footer.svelte';
</script>

<!-- Ambient Background Glow -->
<div id="top" class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
  <div class="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-b from-brand-500/15 via-indigo-500/5 to-transparent dark:from-brand-500/20 dark:via-purple-500/10 dark:to-transparent blur-3xl opacity-80"></div>
</div>

<Navbar />

<main class="max-w-5xl mx-auto px-6">
  <Hero />
  <Showcase />
  <PromptGuide />
</main>

<Footer />
