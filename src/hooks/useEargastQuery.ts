// src/hooks/useErgastQuery.ts
import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://ergast.com/api/f1';
const fetchErgastData = async (path: string) => {
  const response = await fetch(`${API_URL}/${path}`);
  if (!response.ok) {
    throw new Error(`Erro na requisição: ${response.statusText}`);
  }
  return response.json();
};

/**
 * Hook genérico para buscar dados da Ergast API.
 *
 * @param queryKey - Chave única para identificar a query (pode ser um array)
 * @param path - Path da API para buscar os dados
 * @param options - Opções adicionais do react-query
 */
export function useErgastQuery(queryKey: any, path: string) {
  return useQuery({
    queryKey,
    queryFn: () => fetchErgastData(path),
  });
}
