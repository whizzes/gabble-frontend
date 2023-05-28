<script lang="ts">
  import { cacheExchange, fetchExchange } from '@urql/core';
  import { authExchange } from '@urql/exchange-auth';
  import { createClient, setContextClient } from '@urql/svelte';
  
  import { page } from '$app/stores';
  import NotificationsList from '$lib/components/Notification/NotificationsList.svelte';
  
  import '../app.css';

  const initializeAuthState = () => {
    const token = $page.data?.accessToken;

    return {
      token
    };
  };

  const client = createClient({
    url: import.meta.env.VITE_GRAPHQL_URL,
    exchanges: [
      cacheExchange,
      authExchange(async (utils) => {
        // https://formidable.com/open-source/urql/docs/advanced/authentication/
        const { token } = initializeAuthState();

        return {
          addAuthToOperation(operation) {
            if (!token) {
              return operation;
            }

            return utils.appendHeaders(operation, {
              Authorization: `JWT ${token}`
            });
          },
          async refreshAuth() {
            window.location.href = '/logout';
          },
          willAuthError() {
            return false;
          },
          didAuthError() {
            return false;
          }
        };
      }),
      fetchExchange
    ]
  });

  setContextClient(client);
</script>

<slot />
<NotificationsList />
