<script lang="ts">
  import { newForm } from '@whizzes/svelte-forms';
  import * as Yup from 'yup';

  import { createHeader } from '$lib/utils/basic-auth';
    import TextField from '$lib/components/TextField.svelte';

  const { handleSubmit, values, errors } = newForm({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    }),
    onSubmit: async ({ email, password }) => {
      const basicAuth = createHeader(email, password);
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          Authorization: basicAuth
        }
      });

      if (response.ok) {
        window.location.pathname = '/';
      }
    }
  });
</script>

<div class="flex flex-1 flex-col items-center justify-center px-10 relative">
  <div class="flex justify-between items-center w-full py-4">
    <div class="flex items-center justify-start space-x-3">
      <span class="bg-black rounded-full w-6 h-6" />
      <a href="https://whizzes.io" class="font-medium text-lg"
        >Whizzes.io + Linx</a
      >
    </div>
    <div class="flex items-center space-x-2">
      <span>Not a member? </span>
      <a href="/signup" class="underline font-medium text-[#070eff]">
        Create an account
      </a>
    </div>
  </div>
  <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="text-3xl md:text-4xl font-bold">Sign in to account</h2>
      <p class="text-md md:text-xl">Sign in to access all your data!</p>
    </div>
    <form class="flex flex-col w-full space-y-1" on:submit={handleSubmit}>
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
        bind:value={$values.password}
        error={$errors.password}
      />
      <button
        type="submit"
        class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
        >Sign in</button
      >
    </form>
  </div>
</div>
