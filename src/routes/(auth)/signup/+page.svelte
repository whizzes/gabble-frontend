<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { newForm } from '@whizzes/svelte-forms';
  import * as Yup from 'yup';

  import { CreateUserDocument } from '$lib/graphql/schema';

  let userCreatedOk = false;
  let error: string | null = null;

  const urqlClient = getContextClient();
  const { handleSubmit, values, errors } = newForm({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required()
    }),
    onSubmit: async (values) => {
      const response = await urqlClient
        .mutation(CreateUserDocument, {
          input: values
        })
        .toPromise();

      if (response.data?.userCreate?.user) {
        userCreatedOk = true;
      } else {
        // TODO: Provide error handling support
        error = 'Failed to register user!';
      }
    }
  });
</script>

<h1 class="text-3xl font-bold underline">Signup</h1>

<form on:submit={handleSubmit}>
  <label for="name">Name</label>
  <input
    type="text"
    name="name"
    placeholder="E.g. John"
    bind:value={$values.name}
  />
  <span hidden={!$errors.name}>{$errors.name}</span>
  <label for="email">Last Name</label>
  <input
    type="text"
    name="lastName"
    placeholder="E.g. Appleseed"
    bind:value={$values.lastName}
  />
  <span hidden={!$errors.lastName}>{$errors.lastName}</span>
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

<span hidden={!error}>{error}</span>
