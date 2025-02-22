/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import { ResultsPageParams } from '../types';
import { DEFAULT_ID, DEFAULT_RACE_TYPE, DEFAULT_YEAR } from '@constants';
import { useDriverData, useDrivers } from '@pages/results/hooks/useDrivers';
import { DriverResults, DriversStanding } from '../configs/column-configs';
import { formatDynamicItems } from '../utils/drivers-results.utils';
import FiltersComponent from '@pages/results/components/filters.component';
import useSeasons from '@pages/results/hooks/useSeasons';
import DynamicTable from '@pages/results/components/dynamic-table.component';
import SkeletonList from '@pages/results/components/skeleton-list.component';
import Skeleton from '@components/skeleton.component';
import { DriverStanding, RaceTable } from '@typesApp';

const DriversResults = () => {
  const { year = DEFAULT_YEAR, id = DEFAULT_ID, type = DEFAULT_RACE_TYPE } = useParams<ResultsPageParams>();
  const seasons = useSeasons();
  const rawDrivers = useDriverData(year, id);
  const driversData = rawDrivers.data;
  const drivers = useDrivers(year);
  const showDriversResult = id.toLowerCase() !== 'all';

  const getDisplayedData = () => {
    if (rawDrivers.isLoading) return [];

    return showDriversResult ? (driversData as RaceTable).Races : (driversData as DriverStanding);
  };

  const isLoadingFilters = seasons.isLoading || drivers.isLoading;
  const columns: any = showDriversResult ? DriverResults : DriversStanding;
  const displayedData: any = getDisplayedData();
  const dynamicItems = !drivers.isLoading && drivers.data ? formatDynamicItems(year, drivers.data.Drivers) : [];

  return (
    <div className="flex flex-col gap-[2px]">
      <FiltersComponent isLoading={isLoadingFilters} year={year} seasons={seasons} searchType={type} dynamicItems={dynamicItems} />
      {!rawDrivers.isLoading && rawDrivers.data ? (
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

export default DriversResults;
