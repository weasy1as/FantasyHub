export type PlayerStat = {
  minutes?: number;
  total_points?: number;
  goals_scored?: number;
  assists?: number;
  clean_sheets?: number;
  // Add any other fields you need here if desired
};

export function calculateSummaryStats(stats: PlayerStat[]) {
  return stats?.reduce(
    (acc, stat) => ({
      minutes: acc.minutes + (stat.minutes || 0),
      total_points: acc.total_points + (stat.total_points || 0),
      goals_scored: acc.goals_scored + (stat.goals_scored || 0),
      assists: acc.assists + (stat.assists || 0),
      clean_sheets: acc.clean_sheets + (stat.clean_sheets || 0),
    }),
    {
      minutes: 0,
      total_points: 0,
      goals_scored: 0,
      assists: 0,
      clean_sheets: 0,
    }
  );
}
