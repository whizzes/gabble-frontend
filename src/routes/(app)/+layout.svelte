<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="grid grid-cols-[60px,auto] h-screen w-screen">
  <aside
    class="border-r flex flex-col items-center justify-between py-2 space-y-2 col-span-1 w-full"
  >
    <nav>
      <a href="/links">
        <figure
          class="text-white flex justify-center items-center text-sm font-light h-12 w-12 bg-indigo-400 rounded-full"
        >
          Links
        </figure>
      </a>
    </nav>
    <figure
      class="text-white flex justify-center items-center text-xl font-light h-12 w-12 bg-indigo-600 rounded-full"
    >
      {$page.data.user.name?.charAt(0).toUpperCase()}
    </figure>
  </aside>
  <main
    class="bg-gray-50 col-start-2 col-end-2 bg-red-200 w-[calc(100vw-60px)] overflow-x-hidden overflow-y-auto"
  >
    <slot />
  </main>
</div>
