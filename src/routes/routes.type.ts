export enum RoutesUrls {
  HOME = '/',
  RESULTS = '/results',
}

export const ResultsRoutes = {
  races: (year: string) => `/results/${year}/races`,
  drivers: (year: string) => `/results/${year}/drivers`,
  teams: (year: string) => `/results/${year}/teams`,
};
