<script lang="ts">
  import { getContextClient } from '@urql/svelte';
  import { newForm } from '@whizzes/svelte-forms';
  import * as Yup from 'yup';

  import { CreateUserDocument } from '$lib/graphql/schema';
  import TextField from '$lib/components/TextField.svelte';
  import Card from '$lib/components/Card.svelte';
  import Button from '$lib/components/Button.svelte';

  let userCreatedOk = false;
  let error: string | null = null;

  const urqlClient = getContextClient();
  const { handleSubmit, values, errors, isSubmitting } = newForm({
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

<div
  class="bg-gray-900 w-full bg-[url('https://demos.creative-tim.com/notus-nextjs/img/register_bg_2.png')] bg-cover"
>
  <div
    class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900"
  >
    <a
      href="https://whizzes.io"
      class="flex items-center justify-center mb-8 text-2xl text-white font-semibold lg:mb-10 dark:text-white"
    >
      Whizzes.io + Linx
    </a>
    <Card class="w-full max-w-xl p-6 space-y-8 sm:p-8 dark:bg-gray-800">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
        Register in the platform
      </h2>
      <form
        class="flex flex-col w-full mt-8 space-y-1"
        on:submit={handleSubmit}
      >
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
          type="password"
          id="password"
          name="password"
          label="Password"
          placeholder="• • • • • • • •"
          bind:value={$values.password}
          error={$errors.password}
        />

        <Button type="submit" disabled={$isSubmitting}
          >Create your account</Button
        >
        <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
          Already have an account? <a
            href="/login"
            class="text-primary-700 hover:underline dark:text-primary-500"
            >Login here!</a
          >
        </div>
      </form>
    </Card>
  </div>
</div>
