import { Column, RaceWinner } from '../types';
import { Results } from '@typesApp';
import { formatDate } from '../../../utils/date';
import DriverCell from '../components/driver-cell.component';

export const RacesSimpleColumns: Column<RaceWinner>[] = [
  { header: 'GRAND PRIX', accessor: (row) => row.Circuit.Location.country },
  { header: 'DATE', accessor: (row) => formatDate(row.date, row.time), hideOnMobile: true },
  { header: 'WINNER', accessor: (row) => <DriverCell driver={row.driver.Driver} /> },
  { header: 'CAR', accessor: (row) => row.driver.Constructor.name },
  { header: 'LAPS', accessor: (row) => row.driver.laps, hideOnMobile: true },
  { header: 'TIME', accessor: (row) => row.driver.Time?.time || '-', hideOnMobile: true },
];

export const RacesDetailedColumns: Column<Results>[] = [
  { header: 'POS', accessor: (row) => row.position },
  { header: 'NO', accessor: (row) => row.Driver.permanentNumber || '-', hideOnMobile: true },
  { header: 'DRIVER', accessor: (row) => <DriverCell driver={row.Driver} /> },
  { header: 'CAR', accessor: (row) => row.Constructor.name, hideOnMobile: true },
  { header: 'LAPS', accessor: (row) => row.laps, hideOnMobile: true },
  { header: 'TIME/RETIRED', accessor: (row) => row.Time?.time || row.status },
  { header: 'PTS', accessor: (row) => row.points },
];
