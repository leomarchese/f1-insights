import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchDrivers } from '../../../services/ergast.service';

export const useDriversInfinite = (year: string, additionalData: string, limit: number = 100) => {
  return useInfiniteQuery({
    queryKey: ['drivers', year, additionalData],
    queryFn: ({ pageParam = 0 }) => fetchDrivers(year, additionalData, pageParam, limit),
    getNextPageParam: (lastPage, allPages) => {
      // Calcula o próximo offset
      const nextOffset = allPages.length * limit;
      // Verifica se há mais páginas para carregar
      return lastPage.length === limit ? nextOffset : undefined;
    },
    initialPageParam: 0,
  });
};
