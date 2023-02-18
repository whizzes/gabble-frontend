<script>
  import { page } from '$app/stores';
  import TableItem from './TableItem.svelte';
</script>

<div class="flex flex-col mt-6">
  <div class="overflow-x-auto rounded-lg">
    <div class="inline-block min-w-full align-middle">
      <div class="overflow-hidden shadow sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
              >
                Hash/ID
              </th>
              <th
                scope="col"
                class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
              >
                URL
              </th>
              <th
                scope="col"
                class="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
              >
                Created At
              </th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-800">
            {#each $page.data.user.links as link}
              <TableItem {link} />
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
