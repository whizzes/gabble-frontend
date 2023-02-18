<script>
  import LinksTable from './LinksTable.svelte';
</script>

<div
  class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"
>
  <!-- Card header -->
  <div class="items-center justify-between lg:flex">
    <div class="mb-4 lg:mb-0">
      <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        Links
      </h3>
      <span class="text-base font-normal text-gray-500 dark:text-gray-400"
        >This is the list of the links created</span
      >
    </div>
  </div>
  <!-- Table -->
  <LinksTable />
</div>
