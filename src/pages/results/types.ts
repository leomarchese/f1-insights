import { RaceResult, Race } from '@typesApp';

export interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  hideOnMobile?: boolean;
}

export type TableData<T> = T[];

export interface RaceGroup {
  round: string;
  races: Race[];
}

export interface RaceWinner extends Race {
  winner: RaceResult;
}

export interface ResultsPageParams extends Record<string, string | undefined> {
  id?: string;
  year?: string;
  type?: string;
}
