<script lang="ts">
  import NotificationsList from '$lib/components/Notification/NotificationsList.svelte';

  import {
    dedupExchange,
    cacheExchange,
    fetchExchange,
    makeOperation
  } from '@urql/core';
  import { authExchange } from '@urql/exchange-auth';
  import { createClient, setContextClient } from '@urql/svelte';

  import '../app.css';

  const client = createClient({
    url: import.meta.env.VITE_LINX_GRAPHQL_URL,
    exchanges: [
      dedupExchange,
      cacheExchange,
      authExchange<{ accessToken?: string }>({
        getAuth: async () => {
          // TODO: Not implemented yet
          return null;
        },
        addAuthToOperation: ({ authState, operation }) => {
          if (!authState || !authState.accessToken) {
            return operation;
          }

          const fetchOptions =
            typeof operation.context.fetchOptions === 'function'
              ? operation.context.fetchOptions()
              : operation.context.fetchOptions || {};

          return makeOperation(operation.kind, operation, {
            ...operation.context,
            fetchOptions: {
              ...fetchOptions,
              headers: {
                ...fetchOptions.headers,
                Authorization: `JWT ${authState.accessToken}`
              }
            }
          });
        }
      }),
      fetchExchange
    ]
  });
  setContextClient(client);
</script>

<slot />
<NotificationsList />
