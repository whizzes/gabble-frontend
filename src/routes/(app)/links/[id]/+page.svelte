<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Pulse from './components/Pulse.svelte';
</script>

<div class="p-6">
  <div class="flex items-center py-2">
    <Pulse />
    <h2 class="pl-2 text-mono">/&nbsp;koi</h2>
  </div>
  <hr />
  <section>
    <h3 class="font-semibold text-xl py-2">Details</h3>
    <Card class="flex justify-between items-center">
      <article>
        <span class="block text-gray-600">Original URL:</span>
        <span class="block text-gray-800 font-semibold"
          >https://www.google.com</span
        >
      </article>
      <article>
        <span class="block text-gray-600">Hash:</span>
        <span class="block text-gray-800 font-semibold">/koi</span>
      </article>
      <article>
        <span class="block text-gray-600">Created On:</span>
        <span class="block text-gray-800 font-semibold">January, 1st 2023</span>
      </article>
      <article>
        <span class="block text-gray-600">Updated On:</span>
        <span class="block text-gray-800 font-semibold"
          >February, 21th 2023</span
        >
      </article>
    </Card>
  </section>
  <section>
    <h3 class="font-semibold text-xl py-2">Metrics</h3>
    <Card class="flex justify-between items-center">
      <article>
        <span class="block text-gray-600">Total Clicks:</span>
        <span class="block text-gray-800 font-semibold">2036</span>
      </article>
      <article>
        <span class="block text-gray-600">Clicks Today:</span>
        <span class="block text-gray-800 font-semibold">12</span>
      </article>
      <article>
        <span class="block text-gray-600">First Clicked:</span>
        <span class="block text-gray-800 font-semibold">January, 1st 2023</span>
      </article>
      <article>
        <span class="block text-gray-600">Last Clicked:</span>
        <span class="block text-gray-800 font-semibold"
          >February, 21th 2023</span
        >
      </article>
    </Card>
  </section>
</div>
