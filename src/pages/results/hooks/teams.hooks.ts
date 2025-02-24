import { useQuery } from '@tanstack/react-query';
import { fetchConstructorResults, fetchConstructors, fetchConstructorStandings } from '../../../services/ergast.service';

export const useConstructors = (year: string) => {
  return useQuery({
    queryKey: ['constructors', year],
    queryFn: () => fetchConstructors(year),
    enabled: !!year,
  });
};

export const useConstructorResults = (year: string, constructorId: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['constructors', year, constructorId],
    queryFn: () => fetchConstructorResults(year, constructorId),
    enabled: enabled && !!constructorId,
  });
};

export const useConstructorStandings = (year: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['constructors', year, 'standings'],
    queryFn: () => fetchConstructorStandings(year),
    enabled: enabled,
  });
};

export const useConstructorData = (year: string, constructorSelection: string) => {
  const isAll = constructorSelection.toLowerCase() === 'all';

  const standingsQuery = useConstructorStandings(year, isAll);
  const resultsQuery = useConstructorResults(year, constructorSelection, !isAll);

  return isAll ? standingsQuery : resultsQuery;
};
