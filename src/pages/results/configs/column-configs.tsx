import { Column } from '../types';
import { RaceResults } from '../../../types';
import { formatDate } from '../../../utils/date';
import DriverCell from '../components/driver-cell.component';

export const RacesSimpleColumns: Column<RaceResults>[] = [
  { header: 'GRAND PRIX', accessor: (row) => row.Circuit.Location.country },
  { header: 'DATE', accessor: (row) => formatDate(row.date, row.time), hideOnMobile: true },
  { header: 'WINNER', accessor: (row) => <DriverCell driver={row.Results[0].Driver} /> },
  { header: 'CAR', accessor: (row) => row.Results[0].Constructor.name },
  { header: 'LAPS', accessor: (row) => row.Results[0].laps, hideOnMobile: true },
  { header: 'TIME', accessor: (row) => row.Results[0].Time?.time || '-', hideOnMobile: true },
];

export const RacesDetailedColumns: Column<any>[] = [
  { header: 'POS', accessor: (row) => row.result.position },
  { header: 'NO', accessor: (row) => row.result.Driver.permanentNumber || '-', hideOnMobile: true },
  { header: 'DRIVER', accessor: (row) => <DriverCell driver={row.result.Driver} /> },
  { header: 'CAR', accessor: (row) => row.result.Constructor.name, hideOnMobile: true },
  { header: 'LAPS', accessor: (row) => row.result.laps, hideOnMobile: true },
  { header: 'TIME/RETIRED', accessor: (row) => row.result.Time?.time || row.result.status },
  { header: 'PTS', accessor: (row) => row.result.points },
];
