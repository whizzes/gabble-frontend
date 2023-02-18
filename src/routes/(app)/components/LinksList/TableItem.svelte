<script lang="ts">
  export let link: { id: string; originalUrl: string; createdAt: Date };
  const linkCreatedAt = new Date(link.createdAt)
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
    {linkCreatedAt.toLocaleString('en-us', {day:'numeric', month:"numeric", year:"numeric", hour:'numeric', minute:"2-digit"})}
  </td>
</tr>
