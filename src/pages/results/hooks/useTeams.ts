import { useQuery } from '@tanstack/react-query';
import { fetchConstructorStandings, fetchConstructorResults } from '../../../services/ergast.service';

const useTeams = (year: string, additionalData: string) => {
  return useQuery({
    queryKey: ['teams', year, additionalData],
    queryFn: () =>
      additionalData === 'ALL'
        ? fetchConstructorStandings(year) // Busca a classificação de todas as equipes
        : fetchConstructorResults(year, additionalData), // Busca os resultados de uma equipe específica
    enabled: !!year, // Só faz a requisição se o ano estiver definido
    staleTime: 1000 * 60 * 60, // 1 hora de cache
  });
};

export default useTeams;
