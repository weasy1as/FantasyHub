import { player_stats } from "../../prisma/generated/prisma";
import Link from "next/link";
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

const compareCard = ({ player }: { player: PlayerWithStats }) => {
  const playerStats = player.player_stats;

  const calculateSummaryStats = (stats: typeof player.player_stats) => {
    const summary = {
      minutes: 0,
      total_points: 0,
      goals_scored: 0,
      assists: 0,
      clean_sheets: 0,
    };

    stats.forEach((stat: player_stats) => {
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
              <Link
                href={`/player/${player.player_id}`}
                className="font-semibold font-sans text-sm text-indigo-800"
              >
                Go to player page
              </Link>
            </div>
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
    </div>
  );
};

export default compareCard;
