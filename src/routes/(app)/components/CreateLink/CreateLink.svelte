<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { newForm } from '@whizzes/svelte-forms';
  import * as Yup from 'yup';
  import { page } from '$app/stores';

  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';
  import TextField from '$lib/components/TextField.svelte';
  import notification from '$lib/stores/notification';
  import { LinkCreateDocument } from '$lib/graphql/schema';

  const urqlClient = getContextClient();
  const { handleSubmit, values, errors, isSubmitting } = newForm({
    initialValues: {
      url: '',
      customHash: ''
    },
    validationSchema: Yup.object({
      url: Yup.string().required(),
      hash: Yup.string()
    }),
    onSubmit: async ({ url, customHash }) => {
      const payload: { url: string; customHash?: string } = {
        url
      };

      if (customHash.length) payload.customHash = customHash;

      const result = await urqlClient
        .mutation(
          LinkCreateDocument,
          {
            input: payload
          },
          {
            fetchOptions: {
              headers: { authorization: `JWT ${$page.data.accessToken}` }
            }
          }
        )
        .toPromise();

      if (result.error || result.data?.linkCreate?.error) {
        return notification.notifyFailure(
          result.data?.linkCreate?.error?.message
        );
      }

      notification.notifySuccess(
        `The url has been created with the hash: ${result.data?.linkCreate?.link?.id}`
      );
    }
  });
</script>

<Card>
  <form on:submit={handleSubmit}>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <TextField
          name="url"
          type="text"
          id="url"
          label="URL"
          placeholder="https://example.com/"
          bind:value={$values.url}
          error={$errors.url}
        />
      </div>
      <div>
        <TextField
          name="hash"
          type="text"
          id="hash"
          label="Hash"
          placeholder="example"
          bind:value={$values.customHash}
          error={$errors.customHash}
        />
      </div>
    </div>

    <div class="flex justify-end">
      <Button type="submit" disabled={$isSubmitting} class="bg-blue-700"
        >Create short!</Button
      >
    </div>
  </form>
</Card>
