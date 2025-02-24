/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { ResultsPageParams } from '../types';
import { DEFAULT_ID, DEFAULT_TEAMS_TYPE, DEFAULT_YEAR } from '@constants';
import { useConstructorData, useConstructors } from '@pages/results/hooks/teams.hooks';
import { ConstructorStandings, TeamResults } from '../configs/column-configs';
import { ConstructorStanding, Race } from '@typesApp';
import { formatDynamicItems } from '../utils/teams-results.utils';
import FiltersComponent from '@pages/results/components/filters.component';
import useSeasons from '@pages/results/hooks/useSeasons';
import DynamicTable from '@pages/results/components/dynamic-table.component';
import SkeletonList from '@pages/results/components/skeleton-list.component';
import Skeleton from '@components/skeleton.component';

const TeamsResults = () => {
  const { year = DEFAULT_YEAR, id = DEFAULT_ID, type = DEFAULT_TEAMS_TYPE } = useParams<ResultsPageParams>();
  const seasons = useSeasons();
  const teams = useConstructors(year);
  const constructors = useConstructorData(year, id);
  const showTeamResults = id.toLowerCase() !== 'all';

  const getDisplayedData = () => {
    if (constructors.isLoading) return [];

    const constructorData = constructors.data;
    return showTeamResults ? (constructorData as Race[]) : (constructorData as ConstructorStanding[]);
  };

  const isLoadingFilters = seasons.isLoading || teams.isLoading;
  const columns: any = showTeamResults ? TeamResults : ConstructorStandings;
  const displayedData: any = getDisplayedData();
  const dynamicItems = !teams.isLoading && teams.data ? formatDynamicItems(year, teams.data) : [];

  return (
    <div className="flex flex-col gap-[2px]">
      <FiltersComponent isLoading={isLoadingFilters} year={year} seasons={seasons} searchType={type} dynamicItems={dynamicItems} />

      {!constructors.isLoading && constructors.data ? (
        <div className="bg-white p-10 flex flex-col overflow-x-auto">
          <h1 className="text-xl md:text-4xl self-center md:self-auto pb-5">{year} DRIVER STANDINGS</h1>
          <DynamicTable data={displayedData} columns={columns} />
        </div>
      ) : (
        <div className="bg-white p-10 flex flex-col gap-5">
          <Skeleton width="w-full" height="h-[70px]" className="pb-2" variant="square" />
          {<SkeletonList count={10} />}
        </div>
      )}
    </div>
  );
};

export default TeamsResults;
