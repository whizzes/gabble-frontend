<script lang="ts">
  import { newForm } from '@whizzes/svelte-forms';
  import * as Yup from 'yup';

  import { createHeader } from '$lib/utils/basic-auth';
  import TextField from '$lib/components/TextField.svelte';
  import Card from '$lib/components/Card.svelte';
  import Button from '$lib/components/Button.svelte';
  import notification from '$lib/stores/notification';

  const { handleSubmit, values, errors, isSubmitting } = newForm({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email(),
      password: Yup.string()
    }),
    onSubmit: async ({ email, password }) => {
        const basicAuth = createHeader(email, password);
        const request = await fetch('/login', {
          method: 'POST',
          headers: {
            Authorization: basicAuth
          }
        })

        if (request.ok) {
          notification.notifySuccess('Logged in successfully');
          window.location.pathname = '/';
        } else {
          const response = await request.json()
          notification.notifyFailure(response.message)
          
        }
    }
  });
</script>

<div
  class="bg-gray-900 w-full bg-[url('https://demos.creative-tim.com/notus-nextjs/img/register_bg_2.png')] bg-cover"
>
  <div
    class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"
  >
    <a
      href="/"
      class="flex items-center justify-center mb-8 text-2xl text-white font-semibold lg:mb-10 dark:text-white"
    >
      <span>Linx</span>
    </a>
    <Card class="w-full max-w-xl p-6 space-y-8 sm:p-8 dark:bg-gray-800">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
        Sign in to platform
      </h2>
      <form
        class="flex flex-col w-full mt-8 space-y-1"
        on:submit={handleSubmit}
      >
        <TextField
          type="text"
          id="email"
          name="email"
          label="Email"
          placeholder="E.g. user@email.com"
          bind:value={$values.email}
          error={$errors.email}
        />
        <TextField
          type="password"
          id="password"
          name="password"
          label="Password"
          placeholder="• • • • • • • •"
          bind:value={$values.password}
          error={$errors.password}
        />

        <Button type="submit" disabled={$isSubmitting}
          >Login to your account</Button
        >
        <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
          Not registered? <a
            href="/signup"
            class="text-primary-700 hover:underline dark:text-primary-500"
            >Create account</a
          >
        </div>
      </form>
    </Card>
  </div>
</div>
