<script lang="ts">
  import Linx from './Linx.svelte';
</script>

<section class="relative h-screen w-screen bg-no-repeat bg-cover bgimg">
  <div class="bg-gray-600/75 h-screen w-screen absolute top-0 left-0" />
  <div
    class="flex flex-col items-center justify-center z-10 absolute top-0 left-0 h-screen w-screen"
  >
    <h1 class="mb-4 font-serif font-semibold text-white drop-shadow-sm text-3xl">Linx</h1>
    <Linx />
    <p class="p-4 text-white mx-auto">
      Linx is an Open Source project on <a
        class="text-blue-200 underline"
        target="_blank"
        href="https://github.com/whizzes/linx-dashboard">GitHub</a
      >! Come join the party 🎉!
    </p>
  </div>
</section>

<style>
  .bgimg {
    background-image: url('https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80');
  }
</style>
