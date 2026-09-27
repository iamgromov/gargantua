import { useEffect, type FC, type ReactNode } from 'react';
import { QueryClientProvider, focusManager } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import queryClient from './queryClient';

interface QueryProviderProps {
  children: ReactNode;
}

/** Провайдер TanStack Query: клиент с общими настройками, devtools и инвалидация кеша при возврате фокуса */
export const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  useEffect(() => {
    const unsubscribe = focusManager.subscribe(() => {
      if (focusManager.isFocused()) {
        void queryClient.invalidateQueries();
      }
    });

    return unsubscribe;
  }, []);

  return (
    <QueryClientProvider client={ queryClient }>
      { children }
      { import.meta.env.DEV && (
        <ReactQueryDevtools initialIsOpen={ false } buttonPosition='top-left' />
      ) }
    </QueryClientProvider>
  );
};

export default QueryProvider;
