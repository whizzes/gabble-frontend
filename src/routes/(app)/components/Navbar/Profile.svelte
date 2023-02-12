<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="flex items-center ml-3">
  <div>
    <button
      type="button"
      class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
      id="user-menu-button-2"
      aria-expanded="false"
      data-dropdown-toggle="dropdown-2"
    >
      <span class="sr-only">Open user menu</span>
      <figure
        class="flex justify-center items-center bg-gray-200 w-8 h-8 rounded-full"
      >
        {$page.data.user?.name
          ?.charAt(0)
          ?.toUpperCase()}{$page.data.user?.surname?.charAt(0)?.toUpperCase()}
      </figure>
    </button>
  </div>
</div>
