import axios from 'axios';
import { Driver, MRData, Season, Track } from '../types';

const BASE_URL = 'https://ergast.com/api/f1';

export const fetchSeasons = async (): Promise<Season[]> => {
  const response = await axios.get(`${BASE_URL}/seasons.json?limit=100`);
  return response.data.MRData.SeasonTable.Seasons;
};

export const fetchTracks = async (year: string, offset = 0, limit = 100): Promise<Track[]> => {
  const response = await axios.get(`${BASE_URL}/${year}.json`, {
    params: {
      limit,
      offset,
    },
  });
  return response.data.MRData.RaceTable.Races;
};

export const fetchRaceResults = async (year: string, offset: number, limit: number): Promise<MRData> => {
  const response = await axios.get(`${BASE_URL}/${year}/results.json`, {
    params: {
      limit,
      offset,
    },
  });
  return response.data.MRData;
};

export const fetchRaceResultsByRound = async (year: string, round: string): Promise<MRData> => {
  const response = await axios.get(`${BASE_URL}/${year}/${round}/results.json`);
  return response.data.MRData;
};

export const fetchDriverStandings = async (year: string) => {
  const response = await axios.get(`${BASE_URL}/${year}/driverStandings.json`);
  return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
};

export const fetchDriverResults = async (year: string, driverId: string) => {
  const response = await axios.get(`${BASE_URL}/${year}/drivers/${driverId}/results.json`);
  return response.data.MRData.RaceTable.Races;
};

export const fetchDrivers = async (year: string, _additionalData: string, offset: number, limit: number): Promise<Driver[]> => {
  const response = await axios.get(`${BASE_URL}/${year}/drivers.json`, {
    params: {
      limit,
      offset,
    },
  });
  return response.data.MRData.DriverTable.Drivers;
};

export const fetchConstructorStandings = async (year: string) => {
  const response = await axios.get(`${BASE_URL}/${year}/constructorStandings.json`);
  return response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
};

export const fetchConstructorResults = async (year: string, constructorId: string) => {
  const response = await axios.get(`${BASE_URL}/${year}/constructors/${constructorId}/results.json`);
  return response.data.MRData.RaceTable.Races;
};
