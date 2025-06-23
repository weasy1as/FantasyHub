import { player_stats } from "../../prisma/generated/prisma";
import React from "react";
import { FaUserAlt } from "react-icons/fa";

type PlayerWithStats = {
  player_id: number;
  name: string;
  position: string | null;
  team: string | null;
  element: number | null;
  player_stats: player_stats[];
};

interface PlayerPageProps {
  player: PlayerWithStats;
  insight: string | null;
  onGetInsight: () => void;
  loadingInsight: boolean;
}

type SummaryStats = {
  minutes: number;
  total_points: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
};

const PlayerPage: React.FC<PlayerPageProps> = ({
  player,
  insight,
  onGetInsight,
  loadingInsight,
}) => {
  const playerStats = player.player_stats;

  const calculateSummaryStats = (stats: typeof player.player_stats) => {
    return stats.reduce(
      (acc: SummaryStats, stat: player_stats) => ({
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
  };

  const summaryStats = calculateSummaryStats(playerStats);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 lg:grid-cols-2">
      {/* Player Info & Insight */}
      <div>
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">
          Player Profile
        </h1>

        <div className="bg-white border shadow-md rounded-2xl p-5">
          <div className="flex items-center gap-4 mb-5">
            <div className="bg-indigo-100 text-indigo-700 rounded-full p-3">
              <FaUserAlt size={36} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{player.name}</h2>
              <p className="text-sm text-gray-500">
                {player.position} — {player.team}
              </p>
            </div>
          </div>

          {/* Insight Section */}
          <div className="mt-6">
            {!insight ? (
              <button
                onClick={onGetInsight}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
                disabled={loadingInsight}
              >
                {loadingInsight ? "Getting Insight..." : "Get Insight"}
              </button>
            ) : (
              <div className="mt-4 p-4 bg-gray-50 border rounded-md text-gray-700 whitespace-pre-line">
                {insight}
              </div>
            )}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-6 bg-gray-50 p-5 border rounded-xl">
          <h2 className="text-xl font-semibold mb-3">Summary Stats</h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
            <div>
              <strong>Minutes:</strong> {summaryStats.minutes}
            </div>
            <div>
              <strong>Points:</strong> {summaryStats.total_points}
            </div>
            <div>
              <strong>Goals:</strong> {summaryStats.goals_scored}
            </div>
            <div>
              <strong>Assists:</strong> {summaryStats.assists}
            </div>
            {player.position === "GK" && (
              <div>
                <strong>Clean Sheets:</strong> {summaryStats.clean_sheets}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Player Match Stats */}
      <div>
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">
          Match-by-Match Stats
        </h2>
        <div className="space-y-5 max-h-[600px] overflow-y-auto pr-1">
          {playerStats.map((stat: player_stats) => (
            <div
              key={stat.stat_id}
              className="bg-white border rounded-xl shadow-sm p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-800">
                  GW {stat.gw_id}
                </h3>
                <span className="text-sm text-gray-500">
                  {
                    stat.kickoff_time
                      ? new Date(stat.kickoff_time).toLocaleDateString()
                      : "N/A" /* or any fallback text */
                  }
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                <div>
                  <strong>Minutes:</strong> {stat.minutes}
                </div>
                <div>
                  <strong>Points:</strong> {stat.total_points}
                </div>
                <div>
                  <strong>Goals:</strong> {stat.goals_scored}
                </div>
                <div>
                  <strong>Assists:</strong> {stat.assists}
                </div>
                <div>
                  <strong>Clean Sheets:</strong> {stat.clean_sheets}
                </div>
                <div>
                  <strong>BPS:</strong> {stat.bps}
                </div>
                <div>
                  <strong>Creativity:</strong> {stat.creativity}
                </div>
                <div>
                  <strong>Threat:</strong> {stat.threat}
                </div>
                <div>
                  <strong>Influence:</strong> {stat.influence}
                </div>
                <div>
                  <strong>xG:</strong> {stat.expected_goals}
                </div>
                <div>
                  <strong>xA:</strong> {stat.expected_assists}
                </div>
                <div>
                  <strong>ICT Index:</strong> {stat.ict_index}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
