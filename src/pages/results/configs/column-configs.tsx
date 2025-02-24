import { Column, RaceWinner } from '../types';
import { ConstructorStanding, DriverStanding, Race, RaceResult } from '@typesApp';
import { formatDate } from '../../../utils/date';
import DriverCell from '../components/driver-cell.component';

const getRacePosition = (driverResult: RaceResult) => {
  return driverResult.status !== 'Finished' && isNaN(Number(driverResult.positionText)) ? driverResult.status : driverResult.position;
};

const formatTeamPoints = (team: Race) => {
  try {
    const driver1Points = team.Results![0]?.points || '0';
    const driver2Points = team.Results![1]?.points || '0';

    return parseInt(driver1Points) + parseInt(driver2Points);
  } catch {
    return 'Unavailable';
  }
};

export const RacesSimpleColumns: Column<RaceWinner>[] = [
  { header: 'GRAND PRIX', accessor: (row) => row.Circuit.Location.country },
  { header: 'DATE', accessor: (row) => formatDate(row.date, row.time!), hideOnMobile: true },
  { header: 'WINNER', accessor: (row) => <DriverCell driver={row.winner.Driver} /> },
  { header: 'CAR', accessor: (row) => row.winner.Constructor.name },
  { header: 'LAPS', accessor: (row) => row.winner.laps, hideOnMobile: true },
  { header: 'TIME', accessor: (row) => row.winner.Time?.time || '-', hideOnMobile: true },
];

export const RacesDetailedColumns: Column<RaceResult>[] = [
  { header: 'POS', accessor: (row) => row.position },
  { header: 'NO', accessor: (row) => row.Driver.permanentNumber || '-', hideOnMobile: true },
  { header: 'DRIVER', accessor: (row) => <DriverCell driver={row.Driver} /> },
  { header: 'CAR', accessor: (row) => row.Constructor.name, hideOnMobile: true },
  { header: 'LAPS', accessor: (row) => row.laps, hideOnMobile: true },
  { header: 'TIME/RETIRED', accessor: (row) => row.Time?.time || row.status },
  { header: 'PTS', accessor: (row) => row.points },
];

export const DriversStanding: Column<DriverStanding>[] = [
  { header: 'POS', accessor: (row) => row.position },
  { header: 'DRIVER', accessor: (row) => <DriverCell driver={row.Driver} /> },
  { header: 'NATIONALITY', accessor: (row) => row.Driver.nationality },
  { header: 'CAR', accessor: (row) => row.Constructors[0].name },
  { header: 'PTS', accessor: (row) => row.points },
];

export const DriverResults: Column<Race>[] = [
  { header: 'GRAND PRIX', accessor: (row) => row.Circuit.Location.country },
  { header: 'DATE', accessor: (row) => formatDate(row.date, row.time!), hideOnMobile: true },
  { header: 'CAR', accessor: (row) => row.Results![0].Constructor.name },
  { header: 'RACE POSITION', accessor: (row) => getRacePosition(row.Results![0]) },
  { header: 'PTS', accessor: (row) => row.Results![0].points },
];

export const ConstructorStandings: Column<ConstructorStanding>[] = [
  { header: 'POS', accessor: (row) => row.position },
  { header: 'TEAM', accessor: (row) => row.Constructor.name },
  { header: 'PTS', accessor: (row) => row.points },
  { header: 'WINS', accessor: (row) => row.wins },
];

export const TeamResults: Column<Race>[] = [
  { header: 'GRAND PRIX', accessor: (row) => row.raceName },
  { header: 'DATE', accessor: (row) => formatDate(row.date, row.time!) },
  { header: 'PTS', accessor: (row) => formatTeamPoints(row) },
];
