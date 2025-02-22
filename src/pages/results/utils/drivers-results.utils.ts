import { Driver } from '@typesApp';

export const formatDynamicItems = (year: string, data: Driver[]) => {
  const items = data.map((driver) => ({
    id: driver.driverId,
    label: `${driver.familyName}, ${driver.givenName}`,
    to: `/results/${year}/drivers/${driver.driverId}`,
  }));

  return [{ id: 'all', label: 'All', to: `/results/${year}/drivers/all` }, ...items];
};
