<script lang="ts">
  import { onMount } from 'svelte';

  let x = 0;
  let y = 0;
  let container: HTMLDivElement;

  onMount(() => {
    const update = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    };

    container.addEventListener('mousemove', update);
    return () => container.removeEventListener('mousemove', update);
  });
</script>

<div bind:this={container} class="relative w-full h-full overflow-hidden -z-10">
  <!-- Mouse-following position wrapper -->
  <div
    class="pointer-events-none absolute w-80 h-80 transition-transform duration-75 ease-out"
    style="transform: translate(calc({x}px - 10rem), calc({y}px - 10rem));"
  >
    <!-- Warping animated blob -->
    <div
      class="w-full h-full rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-400 animate-warp"
    />
  </div>

  <!-- Your page content -->
  <slot />
</div>

