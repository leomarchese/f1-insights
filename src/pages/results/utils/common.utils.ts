export type FilterGroupType = 'season' | 'categories' | 'additional';

export const isFilterActive = (linkPath: string, groupType: FilterGroupType, currentParts: string[]): boolean => {
  const linkParts = linkPath.split('/').filter(Boolean);
  const ACTIVES = {
    season: currentParts[1] === linkParts[1],
    categories: currentParts[2] === linkParts[2],
    additional: currentParts[3] === linkParts[3],
  };
  return ACTIVES[groupType] || false;
};
