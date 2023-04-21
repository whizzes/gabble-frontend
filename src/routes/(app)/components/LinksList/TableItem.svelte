<script lang="ts">
  import type { UserLinksFragment } from '$lib/graphql/schema';

  export let link: UserLinksFragment;

  const linkCreatedAt = new Date(link.createdAt);
</script>

<tr>
  <td
    class="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-gray-400"
  >
    <code>
      {link.ulid}
    </code>
  </td>
  <td
    class="p-4 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
  >
    <a href={link.originalUrl} target="_blank" class="underline text-blue-300">
      {link.originalUrl}
    </a>
  </td>
  <td
    class="p-4 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"
  >
    {linkCreatedAt.toLocaleString('en-us', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })}
  </td>
</tr>
