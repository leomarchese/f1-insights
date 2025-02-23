export enum RoutesUrls {
  BASE_PATH = 'f1-insights',
  HOME = '/',
  RESULTS = '/results',
}

export const ResultsRoutes = {
  races: (year: string) => `/results/${year}/races/all`,
  drivers: (year: string) => `/results/${year}/drivers/all`,
  teams: (year: string) => `/results/${year}/teams/all`,
};
