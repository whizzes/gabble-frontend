<script lang="ts">
  import { page } from '$app/stores';
</script>

<div>
  <div class="flex flex-col mb-10">
    {JSON.stringify($page.data)}
  </div>
</div>
