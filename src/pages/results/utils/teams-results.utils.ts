import { Constructor } from '@typesApp';

export const formatDynamicItems = (year: string, data: Constructor[]) => {
  const items = data.map((team) => ({
    id: team.constructorId,
    label: team.name,
    to: `/results/${year}/teams/${team.constructorId}`,
  }));

  return [{ id: 'all', label: 'All', to: `/results/${year}/teams/all` }, ...items];
};
