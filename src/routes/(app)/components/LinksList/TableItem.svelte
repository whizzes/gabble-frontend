<script lang="ts">
  export let link: { id: string; originalUrl: string; createdAt: Date };
</script>

<tr>
  <td
    class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400"
  >
    {link.id}
  </td>
  <td
    class="p-4 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
  >
    {link.originalUrl}
  </td>
  <td
    class="p-4 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
  >
    {link.createdAt}
  </td>
</tr>
