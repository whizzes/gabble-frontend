<script lang="ts">
  import { newForm } from '@whizzes/svelte-forms';
  import * as Yup from 'yup';

  import { createHeader } from '$lib/utils/basic-auth';

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

<h1 class="text-3xl font-bold underline">Login</h1>

<form on:submit={handleSubmit}>
  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    placeholder="E.g. user@email.com"
    bind:value={$values.email}
  />
  <span hidden={!$errors.email}>{$errors.email}</span>
  <label for="password">Password</label>
  <input type="password" name="password" bind:value={$values.password} />
  <span hidden={!$errors.password}>{$errors.password}</span>
  <button type="submit">Login</button>
</form>
