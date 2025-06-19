import React from "react";
import { FaUserAlt } from "react-icons/fa";

const PlayerPage = ({
  player,
  insight,
  onGetInsight,
  loadingInsight,
}: {
  player: any;
  insight: string | null;
  onGetInsight: () => void;
  loadingInsight: boolean;
}) => {
  const playerStats = player.player_stats;

  const calculateSummaryStats = (stats: typeof player.player_stats) => {
    const summary = {
      minutes: 0,
      total_points: 0,
      goals_scored: 0,
      assists: 0,
      clean_sheets: 0,
    };

    stats.forEach((stat) => {
      summary.minutes += stat.minutes || 0;
      summary.total_points += stat.total_points || 0;
      summary.goals_scored += stat.goals_scored || 0;
      summary.assists += stat.assists || 0;
      summary.clean_sheets += stat.clean_sheets || 0;
    });

    return summary;
  };

  const summaryStats = calculateSummaryStats(playerStats);

  return (
    <div className="flex items-center lg:flex-row flex-col justify-center gap-6 py-9 lg:py-6 px-6  ">
      <div>
        <h1 className="text-2xl text-center font-bold mb-4">Player</h1>

        <div className="bg-white shadow-md rounded-2xl p-4 border max-w-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-100 rounded-full p-3">
              <FaUserAlt size={40} className="text-gray-600" />
            </div>
            <div>
              <p className="text-xl font-semibold">{player.name}</p>
              <p className="text-gray-500 text-sm">
                {player.position} — {player.team}
              </p>
            </div>
          </div>

          {/* AI Insight Section */}
          <div className="mt-6">
            {insight == null && (
              <button
                onClick={onGetInsight}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                disabled={loadingInsight}
              >
                {loadingInsight ? "Getting Insight..." : "Get Insight"}
              </button>
            )}

            {insight && (
              <div className="mt-4 p-3 bg-gray-100 rounded-md border border-gray-300 whitespace-pre-line">
                {insight}
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 bg-gray-50 p-4 rounded-xl border max-w-sm">
          <h2 className="text-xl font-semibold mb-2">Accumulated Stats</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <strong>Minutes:</strong> {summaryStats.minutes}
            </div>
            <div>
              <strong>Points:</strong> {summaryStats.total_points}
            </div>
            {player.position == "GK" && (
              <div>
                <strong>Clean Sheets:</strong> {summaryStats.clean_sheets}
              </div>
            )}
            <div>
              <strong>Goals:</strong> {summaryStats.goals_scored}
            </div>
            <div>
              <strong>Assists:</strong> {summaryStats.assists}
            </div>
          </div>
        </div>
      </div>

      {/* Player Stats */}
      <div>
        <h1 className="text-2xl text-center font-sans font-bold my-4">
          Player Stats
        </h1>
        <div className="p-4 max-h-[390px] overflow-y-auto grid md:grid-cols-2 gap-4">
          {playerStats.map((stat: any) => (
            <div
              key={stat.stat_id}
              className="bg-white shadow-md rounded-2xl p-5 border"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-semibold">
                  Gameweek {stat.gw_id}
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(stat.kickoff_time).toLocaleDateString()}
                </div>
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
