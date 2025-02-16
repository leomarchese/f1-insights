import axios from 'axios';
import { MRData, Season, Track } from '../types';

const BASE_URL = 'http://ergast.com/api/f1';

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
