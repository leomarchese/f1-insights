/**
 * Tipagem genérica para as respostas da API Ergast
 */
// export interface MRData<T> {
//   xmlns: string;
//   series: string;
//   url: string;
//   limit: string;
//   offset: string;
//   total: string;
//   [key: string]: T | string;
// }

export interface MRDataBase {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
}

export type MRData<T> = MRDataBase & {
  [key: string]: T;
};

export interface ErgastResponse<T> {
  MRData: MRData<T>;
}

/** =========================
 *  SEASONS / SEASON TABLE
 * ========================= */
export interface SeasonTable {
  season: string;
  Seasons: Season[];
}

export interface Season {
  season: string;
  url: string;
}

/** =========================
 *  RACE RESULTS / RACE TABLE
 * ========================= */
export interface RaceTable {
  season: string;
  round?: string;
  constructorId?: string;
  Races: Race[];
}

/**
 * Para resultados de driver (quando filtrado por driver),
 * a RaceTable também traz o driverId.
 */
export interface DriverRaceTable extends RaceTable {
  driverId: string;
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time?: string;
  /**
   * Em alguns endpoints, Results pode vir ausente
   * (por exemplo, se for apenas a tabela de corridas sem resultados).
   */
  Results?: RaceResult[];
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface RaceResult {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time?: Time;
  FastestLap?: FastestLap;
}

export interface Time {
  millis?: string;
  time: string;
}

export interface FastestLap {
  rank: string;
  lap: string;
  Time: Time;
  AverageSpeed: AverageSpeed;
}

export interface AverageSpeed {
  units: string;
  speed: string;
}

/** =========================
 *  DRIVERS / DRIVER TABLE
 * ========================= */
export interface DriverTable {
  season: string;
  Drivers: Driver[];
}

export interface Driver {
  driverId: string;
  permanentNumber?: string;
  code?: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

/** =========================
 *  CONSTRUCTORS / CONSTRUCTOR TABLE
 * ========================= */
export interface ConstructorTable {
  season: string;
  Constructors: Constructor[];
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

/** =========================
 *  STANDINGS
 * ========================= */
export interface StandingsTable {
  season: string;
  round: string;
  StandingsLists: StandingsList[];
}

export interface StandingsList {
  season: string;
  round: string;
  /** Para drivers */
  DriverStandings?: DriverStanding[];
  /** Para constructors */
  ConstructorStandings?: ConstructorStanding[];
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface ConstructorStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}
