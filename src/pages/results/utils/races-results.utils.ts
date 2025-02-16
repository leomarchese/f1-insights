import { RaceResults } from '../../../types';
import { RaceGroup } from '../types';

export const groupWinnersByRound = (races: RaceResults[]): RaceGroup[] => {
  const groups = races.reduce(
    (acc, race) => {
      const round = race.round;
      if (!acc[round]) {
        acc[round] = [];
      }
      acc[round].push(race);
      return acc;
    },
    {} as Record<string, RaceResults[]>,
  );

  return Object.entries(groups).map(([round, races]) => ({ round, races }));
};

export const getDisplayedData = (races: RaceResults[], isDetailed: boolean, id: string): any[] => {
  if (!isDetailed) {
    const groups: RaceGroup[] = groupWinnersByRound(races);
    return groups.map((group) => {
      const race = group.races[0];
      return { ...race, Results: [race.Results[0]] };
    });
  } else {
    return races
      .filter((race) => race.round === id)
      .flatMap((race) =>
        race.Results.map((result) => ({
          ...race,
          result,
        })),
      );
  }
};
