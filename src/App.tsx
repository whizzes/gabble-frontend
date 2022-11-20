import { authExchange } from '@urql/exchange-auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  Provider as UrqlProvider,
  Operation,
  makeOperation,
} from 'urql';

import { Index } from './views/index';
import { LoginView } from './views/login';
import { Signup } from './views/signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/login',
    element: <LoginView />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

type AuthState = {
  token?: string;
};

export default function App(): JSX.Element {
  const urqlClient = createClient({
    url: 'http://localhost:3000/graphql',
    exchanges: [
      dedupExchange,
      cacheExchange,
      authExchange({
        addAuthToOperation: ({
          authState,
          operation,
        }: {
          authState: AuthState;
          operation: Operation;
        }) => {
          if (!authState?.token) {
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
                Authorization: `JWT ${authState.token}`,
              },
            },
          });
        },
        getAuth: async ({ authState }) => {
          if (!authState) {
            const token = localStorage.getItem('token');

            if (token) {
              return {
                token,
              };
            }
          }

          return null;
        },
      }),
      fetchExchange,
    ],
  });

  return (
    <UrqlProvider value={urqlClient}>
      <RouterProvider router={router} />
    </UrqlProvider>
  );
}
