<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { newForm } from '@whizzes/svelte-forms';
  import * as Yup from 'yup';

  import { CreateUserDocument } from '$lib/graphql/schema';
  import TextField from '$lib/components/TextField.svelte';

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

<div class="flex flex-1 flex-col items-center justify-center px-10 relative">
  <div class="flex justify-between items-center w-full py-4">
    <div class="flex items-center justify-start space-x-3">
      <span class="bg-black rounded-full w-6 h-6" />
      <a href="https://whizzes.io" class="font-medium text-lg"
        >Whizzes.io + Linx</a
      >
    </div>
    <div class="flex items-center space-x-2">
      <span>Already have an account? </span>
      <a href="/login" class="underline font-medium text-[#070eff]">
        Sign in
      </a>
    </div>
  </div>
  <div class="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
    <div class="flex flex-col space-y-2 text-center">
      <h2 class="text-3xl md:text-4xl font-bold">Create an account</h2>
      <p class="text-md md:text-xl">
        Create an account to discover everything Linx has to offer!
      </p>
    </div>
    <form class="flex flex-col max-w-md space-y-1" on:submit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        type="text"
        placeholder="E.g. John"
        label="Name"
        bind:value={$values.name}
        error={$errors.name}
      />
      <TextField
        id="lastName"
        name="lastName"
        type="text"
        placeholder="E.g. Appleseed"
        label="Last name"
        bind:value={$values.lastName}
        error={$errors.lastName}
      />
      <TextField
        id="email"
        name="email"
        type="email"
        placeholder="E.g. user@email.com"
        label="Email"
        bind:value={$values.email}
        error={$errors.email}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        label="Password"
        bind:value={$values.password}
        error={$errors.password}
      />

      <button
        type="submit"
        class="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white"
        >Sign up</button
      >
      <span hidden={!error}>{error}</span>
    </form>
  </div>
</div>
