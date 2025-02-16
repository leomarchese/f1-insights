import React from 'react';
import FilterGroupDetails from './filter-group-details.component';
import { UseQueryResult } from '@tanstack/react-query';
import { Season } from '../../../types';

interface FiltersComponentProps {
  isLoading: boolean;
  year: string;
  searchType: string | 'races' | 'drivers' | 'teams';
  seasons: UseQueryResult<Season[], unknown>;
  dynamicItems?: { id: string; label: string; to: string }[];
}

const FiltersComponent: React.FC<FiltersComponentProps> = ({ isLoading = true, year, searchType, seasons, dynamicItems }) => {
  const seasonLinks =
    !seasons.isLoading && seasons.data
      ? seasons.data.toReversed().map(({ season }) => ({
          label: season,
          to: `/results/${season}/${searchType}/all`,
        }))
      : [];

  const categoriesLinks = [
    { label: 'RACES', to: `/results/${year}/races/all` },
    { label: 'DRIVERS', to: `/results/${year}/drivers/all` },
    { label: 'TEAMS', to: `/results/${year}/teams/all` },
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 ${isLoading ? 'gap-2' : 'md:gap-0'}`}>
      {/* Grupo 1: Season */}
      <FilterGroupDetails title="SEASON" links={seasonLinks} isLoading={isLoading} />

      {/* Grupo 2: Categories */}
      <FilterGroupDetails title="CATEGORIES" links={categoriesLinks} isLoading={isLoading} containerClasses="md:border-l md:border-[#e5e7eb]" />

      {/* Grupo 3: Additional Data (apenas se dynamicItems estiver definido) */}
      {dynamicItems && (
        <FilterGroupDetails title="RESULTS" links={dynamicItems} isLoading={isLoading} containerClasses="md:border-l md:border-[#e5e7eb]" />
      )}
    </div>
  );
};

export default FiltersComponent;
