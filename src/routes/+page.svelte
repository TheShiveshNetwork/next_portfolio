<script>
  import Navbar from "../components/Navbar.svelte";
  import MouseGradient from "../components/MouseGradient.svelte";
</script>

<Navbar />
<MouseGradient>
<div class="min-h-screen">
<div class="isolate">
  <div class="absolute inset-0 -z-10">
    <!-- Animated glowing blob background -->
    <div
      class="absolute top-[-10%] -right-[20%] w-[50%] h-[50%] bg-amber-400 dark:bg-purple-700 rounded-full blur-3xl opacity-20 animate-warp"
    ></div>
    <div
      class="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-amber-400 to-amber-600 dark:from-purple-900 dark:to-pink-500 rounded-full blur-3xl opacity-20 animate-warp-fast"
    ></div>
  </div>
</div>
</div>
</MouseGradient>

<div class="h-screen"></div>
<div class="h-screen"></div>

