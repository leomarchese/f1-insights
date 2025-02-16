export interface Driver {
  driverId: string;
  givenName: string;
  familyName: string;
  nationality: string;
  permanentNumber: string;
  team?: string;
  points?: number;
  code?: string;
}

export interface Constructor {
  constructorId: string;
  name: string;
  nationality: string;
  points?: number;
}

export interface Race {
  round: string;
  raceName: string;
  date: string;
  time: string;
}

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Track extends Race {
  Circuit: Circuit;
}

export interface Results {
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  points: string;
  Time: {
    time: string;
  };
}

export interface RaceResults extends Track {
  Results: Results[];
}

export interface RaceTable {
  season: string;
  Races: RaceResults[];
}

export interface MRData {
  offset: string;
  limit: string;
  total: string;
  RaceTable: RaceTable;
}

export interface Season {
  season: string;
  url: string;
}
