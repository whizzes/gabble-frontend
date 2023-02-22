<script lang="ts">
  import { page } from '$app/stores';
  import CreateLink from './components/CreateLink/CreateLink.svelte';
  import UserLinks from './components/LinksList/UserLinks.svelte';
</script>

<div class="px-4 pt-6 space-y-6">
  <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
    Welcome back {$page.data.user.name}!
  </div>

  <CreateLink />
  <UserLinks />
</div>
