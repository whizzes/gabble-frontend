<script lang="ts">
  import {newForm} from '@whizzes/svelte-forms'
  import * as Yup from 'yup'

  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';
  import TextField from '$lib/components/TextField.svelte';
    import notification from '$lib/stores/notification';

  const {handleSubmit, values, errors, isSubmitting} = newForm({
    initialValues: {
      url:'',
      hash: ''
    },
    validationSchema: Yup.object({
      url: Yup.string().required(),
      hash: Yup.string()
    }),
    onSubmit: async ({url, hash}) => {
      notification.notifySuccess('creating link')
      console.log("creating link")
    }
  })
</script>
<Card>
  <form on:submit={handleSubmit}>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <TextField
          name="url"
          type="text"
          id="url"
          label="URL*"
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
          bind:value={$values.hash}
          error={$errors.hash}
        />
      </div>
    </div>

    <div class="flex justify-end">
      <Button type="submit" disabled={$isSubmitting} class="bg-blue-700">Create short!</Button>
    </div>
  </form>
</Card>
