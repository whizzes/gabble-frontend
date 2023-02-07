<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="p-6">
  <div class="flex flex-col mb-10">
    Welcome back {$page.data.user.name}!
  </div>
</div>
