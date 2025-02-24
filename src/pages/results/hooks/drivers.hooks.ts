import { useQuery } from '@tanstack/react-query';
import { fetchDriverResults, fetchDrivers, fetchDriverStandings } from '../../../services/ergast.service';

export const useDrivers = (year: string) => {
  return useQuery({
    queryKey: ['drivers', year],
    queryFn: () => fetchDrivers(year),
    enabled: !!year,
  });
};

export const useDriverResults = (year: string, driverId: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['drivers', year, driverId],
    queryFn: () => fetchDriverResults(year, driverId),
    enabled: enabled && !!driverId,
  });
};

export const useDriverStandings = (year: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['drivers', year, 'standings'],
    queryFn: () => fetchDriverStandings(year),
    enabled: enabled,
  });
};
export const useDriverData = (year: string, driverSelection: string) => {
  const isAll = driverSelection.toLowerCase() === 'all';

  const standingsQuery = useDriverStandings(year, isAll);
  const resultsQuery = useDriverResults(year, driverSelection, !isAll);

  return isAll ? standingsQuery : resultsQuery;
};
