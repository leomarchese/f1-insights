import { useQuery } from '@tanstack/react-query';
import { fetchSeasons } from '../../../services/ergast.service';

const useSeasons = () => {
  return useQuery({
    queryKey: ['seasons'],
    queryFn: fetchSeasons,
    staleTime: 1000 * 60 * 60, // 1 hora de cache
  });
};

export default useSeasons;
