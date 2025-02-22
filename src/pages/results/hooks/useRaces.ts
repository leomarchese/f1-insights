import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { fetchRaceResults, fetchRaceResultsByRound, fetchTracks } from '../../../services/ergast.service';
import { MRData, RaceTable } from '@typesApp';

export const useRacesInfinite = (year: string, round: string, limit: number = 100) => {
  return useInfiniteQuery<MRData<RaceTable>, Error>({
    queryKey: ['races', year, round],
    queryFn: async ({ pageParam = 0 }) => {
      if (round.toLowerCase() === 'all') {
        return fetchRaceResults(year, pageParam as number, limit);
      } else {
        return fetchRaceResultsByRound(year, round);
      }
    },
    getNextPageParam: (lastPage) => {
      if (round.toLowerCase() !== 'all') {
        return undefined;
      }
      const currentOffset = Number(lastPage.offset);
      const currentLimit = Number(lastPage.limit);
      const total = Number(lastPage.total);
      const nextOffset = currentOffset + currentLimit;
      return nextOffset < total ? nextOffset : undefined;
    },
    initialPageParam: 0,
  });
};

export const useTracks = (year: string) => {
  return useQuery({
    queryKey: ['tracks', year],
    queryFn: () => fetchTracks(year),
    enabled: !!year,
    staleTime: 1000 * 60 * 60,
  });
};
