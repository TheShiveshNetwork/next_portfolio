<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="min-h-screen relative transition-colors duration-300 isolate">
  <div class="absolute inset-0 -z-10">
    <!-- Dot grid background -->
    <div class="absolute inset-0 opacity-20" 
      style="
        background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 16px 16px;
      ">
    </div>
  </div>

  {@render children()}
</div>

