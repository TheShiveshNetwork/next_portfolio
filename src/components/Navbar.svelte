<script lang="ts">
  import { onMount } from 'svelte';
  import navConfig from '$lib/configs/nav.config.json';
  import AnimatedButton from '../components/AnimatedButton.svelte';

  let scrolled = false;
  let menuOpen = false;

  function handleClick() {
    alert('Button clicked!');
  }

  const handleScroll = () => {
    scrolled = window.scrollY > 10;
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav
  class={`transition-all duration-300 z-50 border-b border-transparent ${
    scrolled
      ? 'fixed top-4 left-4 right-4 rounded-full border border-white/20 backdrop-blur-xl bg-white/10 shadow-lg px-8'
      : 'app-container absolute top-0 left-0 right-0 bg-transparent'
  }`}
>
  <div class="flex items-center justify-between py-3">
    <!-- Logo -->
    <a href="/" class="text-xl font-bold text-white">ST</a>

    <!-- Desktop Nav -->
    <div class="hidden md:flex gap-6 items-center">
      {#each navConfig.values as link}
        <a href={link.href} class="text-white hover:underline">{link.label}</a>
      {/each}
      <AnimatedButton text="Contact" action={handleClick} />
    </div>

    <!-- Hamburger (Mobile only) -->
    <button
      class="md:hidden text-white focus:outline-none"
      on:click={() => (menuOpen = !menuOpen)}
      aria-label="Toggle menu"
    >
      {#if !menuOpen}
        <!-- Hamburger icon -->
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      {:else}
        <!-- Close icon -->
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      {/if}
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if menuOpen}
    <div
      class="md:hidden absolute right-4 top-[4.5rem] w-auto p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl text-white animate-in"
    >
      <div class="flex flex-col gap-4">
        {#each navConfig.values as link}
          <a
            href={link.href}
            class="text-white text-lg hover:underline"
            on:click={() => (menuOpen = false)}
          >
            {link.label}
          </a>
        {/each}
        <AnimatedButton text="Contact" action={handleClick} />
      </div>
    </div>
  {/if}
</nav>

<style>
  @keyframes fadeZoomIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-in {
    animation: fadeZoomIn 0.3s ease-out forwards;
  }
</style>

