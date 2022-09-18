<script lang="ts">
  import { Client } from '@whizzes/linx';

  const linxServer = new URL(import.meta.env.VITE_LINX_API_URL);
  const linx = new Client(linxServer);
  const inputClass =
    'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5';
  const labelClass = 'block mb-2 text-sm font-medium text-gray-900';
  const buttonClass =
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full';

  enum Step {
    NewLink,
    Review
  }

  let isCreateLoading = false;
  let url: string = '';
  let error: string | null = null;
  let link: Record<string, string> | null = null;
  let currentStep = Step.NewLink;

  async function createLink(): Promise<void> {
    try {
      error = null;
      isCreateLoading = true;
      link = await linx.new(url);
      currentStep = Step.Review;
    } catch (err) {
      error = (err as Error).toString();
    } finally {
      isCreateLoading = false;
    }
  }
</script>

<article class="bg-white shadow-lg min-w-[300px] rounded-lg overflow-hidden p-4">
  {#if currentStep === Step.NewLink}
    <form class="flex flex-col gap-4" on:submit|preventDefault={createLink}>
      <label for="url" class={labelClass}>URL</label>
      <input
        class={inputClass}
        type="url"
        name="url"
        placeholder="https://example.com"
        bind:value={url}
      />
      <button disabled={isCreateLoading} type="submit" class={buttonClass}>Create</button>
    </form>
  {:else if link}
    <strong>{linxServer.toString()}{link.hash}</strong>
    <dl class="py-4">
      <dt class="block underline">ID</dt>
      <dd>{link.id}</dd>
      <dt class="block underline">Hash</dt>
      <dd>{link.hash}</dd>
      <dt class="block underline">Original URL</dt>
      <dd>{link.original_url}</dd>
      <dt class="block underline">Expires</dt>
      <dd>{link.expires_at}</dd>
    </dl>
    <div class="flex flex-col">
      <a
        target="_blank"
        href={link.original_url}
        class="text-center block w-full py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >Visit Shortened Link</a
      >
      <button
        type="button"
        on:click={() => {
          currentStep = Step.NewLink;
          link = null;
        }}
        class={buttonClass}>Create Anoter</button
      >
    </div>
  {/if}
  {#if error}
    <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
      {error}
    </div>
  {/if}
</article>
