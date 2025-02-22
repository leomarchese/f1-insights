// import { RaceResults, Results, Track } from '@typesApp';
import { Race, RaceResult } from '@typesApp';
import { RaceGroup, RaceWinner } from '../types';

export const groupWinnersByRound = (races: Race[]): RaceGroup[] => {
  const groups = races.reduce(
    (acc, race) => {
      const round = race.round;
      if (!acc[round]) {
        acc[round] = [];
      }
      acc[round].push(race);
      return acc;
    },
    {} as Record<string, Race[]>,
  );

  return Object.entries(groups).map(([round, races]) => ({ round, races }));
};

export const getDisplayedData = (races: Race[], isDetailed: boolean, id: string): RaceWinner[] | RaceResult[] => {
  if (!isDetailed) {
    const groups: RaceGroup[] = groupWinnersByRound(races);
    return groups.map((group) => {
      const { Results, ...rest } = group.races[0];
      return { ...rest, winner: Results![0] };
    });
  } else {
    return races.filter((race) => race.round === id).flatMap((race) => race.Results!.map((result) => result));
  }
};

export const formatDynamicItems = (year: string, data: Race[]) => {
  const items = data.map((track) => ({
    id: track.Circuit.circuitId,
    label: track.Circuit.Location.country,
    to: `/results/${year}/races/${track.round}`,
  }));

  return [{ id: 'all', label: 'All', to: `/results/${year}/races/all` }, ...items];
};
