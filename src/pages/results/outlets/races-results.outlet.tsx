/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import { useParams } from 'react-router-dom';
import { useRacesInfinite, useTracks } from '@pages/results/hooks/useRaces';
import { RacesDetailedColumns, RacesSimpleColumns } from '@pages/results/configs/column-configs';
import { DEFAULT_ID, DEFAULT_RACE_TYPE, DEFAULT_YEAR } from '@constants';
import { getDisplayedData } from '@pages/results/utils/races-results.utils';
import { RaceResults, Track } from '@typesApp';
import useSeasons from '@pages/results/hooks/useSeasons';
import FiltersComponent from '@pages/results/components/filters.component';
import DynamicTable from '@pages/results/components/dynamic-table.component';
import SkeletonList from '@pages/results/components/skeleton-list.component';
import Skeleton from '@components/skeleton.component';

const RacesResults: React.FC = () => {
  const { year = DEFAULT_YEAR, id = DEFAULT_ID, type = DEFAULT_RACE_TYPE } = useParams<{ year: string; id: string; type: string }>();
  const seasons = useSeasons();
  const racesQuery = useRacesInfinite(year, id);
  const tracks = useTracks(year);

  const isLoadingFilters = seasons.isLoading || tracks.isLoading;

  const formatDynamicItens = (data: Track[]) => {
    const items = data.map((track) => ({
      id: track.Circuit.circuitId,
      label: track.Circuit.Location.country,
      to: `/results/${year}/races/${track.round}`,
    }));

    return [{ id: 'all', label: 'All', to: `/results/${year}/races/all` }, ...items];
  };

  const dynamicItens = !tracks.isLoading && tracks.data ? formatDynamicItens(tracks.data) : [];
  const isDetailed = id.toLowerCase() !== 'all';

  const flattenedRaces: RaceResults[] = racesQuery.data?.pages.flatMap((page) => page.RaceTable.Races) || [];
  const displayedData: any = getDisplayedData(flattenedRaces, isDetailed, id);
  const columns: any = isDetailed ? RacesDetailedColumns : RacesSimpleColumns;

  const handleScroll = () => {
    if (racesQuery.hasNextPage && !racesQuery.isFetchingNextPage) {
      racesQuery.fetchNextPage();
    }
  };

  return (
    <div className="flex flex-col gap-[2px]">
      <FiltersComponent isLoading={isLoadingFilters} year={year} seasons={seasons} searchType={type} dynamicItems={dynamicItens} />
      {!racesQuery.isLoading && racesQuery.data ? (
        <BottomScrollListener onBottom={handleScroll} offset={300} triggerOnNoScroll={true}>
          <div className="bg-white p-10 flex flex-col gap-5">
            <h1 className="text-xl md:text-4xl self-center md:self-auto">{year} RACE RESULTS</h1>
            <DynamicTable data={displayedData} columns={columns} />
            {racesQuery.isFetchingNextPage && <SkeletonList count={5} />}
          </div>
        </BottomScrollListener>
      ) : (
        <div className="bg-white p-10 flex flex-col gap-5">
          <Skeleton width="w-full" height="h-[70px]" className="pb-2" variant="square" />
          {<SkeletonList count={10} />}
        </div>
      )}
    </div>
  );
};

export default RacesResults;
