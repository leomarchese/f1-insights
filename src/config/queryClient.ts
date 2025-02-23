import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 1000 * 60 * 10, // 10 minutos
      gcTime: 1000 * 60 * 10, // 10 minutos
    },
  },
});
