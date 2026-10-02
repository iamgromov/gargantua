import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { CANCELLED_ERROR_NAME, HTTP_STATUS_TO_NOT_RETRY, RETRY_COUNT } from './constants';

import type { DefaultError } from './apiService';

// TODO: когда появится слайс алертов — заменить на показ уведомления об ошибке в тостах
const logQueryError = (error: DefaultError, queryKey: string): void => {
  if (error?.name === CANCELLED_ERROR_NAME) {
    return;
  }

  console.error(`[query] ${queryKey}`, error);
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      logQueryError(error as unknown as DefaultError, String(query.queryKey[0] ?? ''));
    }
  }),
  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      logQueryError(
        error as unknown as DefaultError,
        String(mutation.options.mutationKey?.[0] ?? '')
      );
    }
  }),
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000,
      retry: (failureCount, error) => {
        if (failureCount >= RETRY_COUNT) {
          return false;
        }

        if (axios.isAxiosError(error)) {
          const status = error.response?.status;

          if (status && HTTP_STATUS_TO_NOT_RETRY.includes(status)) {
            return false;
          }
        }

        return true;
      },

      // экспоненциальная задержка с полным джиттером
      retryDelay: (attemptIndex) => {
        const baseDelay = 1000;
        const maxDelay = 30000;
        const exponentialDelay = Math.min(maxDelay, baseDelay * Math.pow(2, attemptIndex));

        // eslint-disable-next-line sonarjs/pseudo-random
        const jitteredDelay = Math.random() * exponentialDelay;

        return jitteredDelay;
      },

      refetchOnMount: true
    }
  }
});

export default queryClient;
