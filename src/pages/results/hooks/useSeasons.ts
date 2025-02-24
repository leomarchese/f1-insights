import { useQuery } from '@tanstack/react-query';
import { fetchSeasons } from '../../../services/ergast.service';

const useSeasons = () => {
  return useQuery({
    queryKey: ['seasons'],
    queryFn: fetchSeasons,
  });
};

export default useSeasons;
