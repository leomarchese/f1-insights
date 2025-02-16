import { RaceResults } from '../../types';

export interface Column<T> {
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  hideOnMobile?: boolean;
}

export type TableData<T> = T[];

export interface RaceGroup {
  round: string;
  races: RaceResults[];
}
