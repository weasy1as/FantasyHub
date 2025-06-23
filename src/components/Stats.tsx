import React from "react";

interface StatItem {
  player_id: number | string;
  element: number;
  name: string;
  position?: string;
  team?: string;
  total_assists?: number;
  total_goals?: number;
  total_clean_sheets?: number;
}

interface StatsProps {
  topAssists: StatItem[];
  topGoals: StatItem[];
  topCleanSheets: StatItem[];
}

const StatCard: React.FC<{
  player: StatItem;
  statLabel: string;
  statValue: number | undefined;
}> = ({ player, statValue }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{player.name}</h3>
        <p className="text-sm text-gray-500">
          {player.team} &mdash; {player.position || "N/A"}
        </p>
      </div>
      <div className="text-3xl font-bold text-indigo-600">{statValue ?? 0}</div>
    </div>
  );
};

const Stats: React.FC<StatsProps> = ({
  topAssists,
  topGoals,
  topCleanSheets,
}) => {
  return (
    <div className="max-w-6xl pb-8 mx-auto space-y-16 px-4 sm:px-0">
      {/* Assists Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-indigo-700 border-b-2 border-indigo-300 pb-2">
          Top 5 Assisters
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {topAssists.map((player) => (
            <StatCard
              key={player.element}
              player={player}
              statLabel="Assists"
              statValue={player.total_assists}
            />
          ))}
        </div>
      </section>

      {/* Goals Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-indigo-700 border-b-2 border-indigo-300 pb-2">
          Top 5 Goal Scorers
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {topGoals.map((player) => (
            <StatCard
              key={player.element}
              player={player}
              statLabel="Goals"
              statValue={player.total_goals}
            />
          ))}
        </div>
      </section>

      {/* Clean Sheets Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-indigo-700 border-b-2 border-indigo-300 pb-2">
          Top 5 Clean Sheets
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {topCleanSheets.map((player) => (
            <StatCard
              key={player.element}
              player={player}
              statLabel="Clean Sheets"
              statValue={player.total_clean_sheets}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stats;
