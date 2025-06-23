"use client";

import React, { useState } from "react";
import CompareCard from "@/components/compareCard";
import PlayerSearch from "@/components/PlayerSearch";
import { calculateSummaryStats, normalizeStats } from "@/lib/playerStats";
import { player_stats } from "../../../prisma/generated/prisma";
type SummaryStats = {
  minutes: number;
  total_points: number;
  goals_scored: number;
  assists: number;
  clean_sheets: number;
};

type PlayerWithStats = {
  player_id: number;
  name: string;
  position: string | null;
  team: string | null;
  element: number | null;
  player_stats: player_stats[];
};

const getPlayer = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/players/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch player");
  return res.json();
};

const fetchAIInsight = async (
  player1: PlayerWithStats,
  player2: PlayerWithStats,
  summaryStats: SummaryStats,
  summaryStats2: SummaryStats
) => {
  const res = await fetch("/api/getComparison", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      player1Name: player1.name,
      player2Name: player2.name,
      player2Stats: player2.player_stats,
      player1Stats: player1.player_stats,
      summaryStats: summaryStats,
      summaryStats2: summaryStats2,
    }),
  });

  const data = await res.json();
  return data.insight;
};

const ComparePage = () => {
  const [player1, setPlayer1] = useState<PlayerWithStats | null>(null);
  const [player2, setPlayer2] = useState<PlayerWithStats | null>(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);

  const handleSelectPlayer = async (
    player: { player_id: number },
    slot: 1 | 2
  ) => {
    const setPlayer = slot === 1 ? setPlayer1 : setPlayer2;
    const setLoading = slot === 1 ? setLoading1 : setLoading2;

    setLoading(true);
    try {
      const fullPlayer = await getPlayer(player.player_id.toString());
      setPlayer(fullPlayer);
    } catch (err) {
      console.error("Error loading player", err);
      setPlayer(null);
    } finally {
      setLoading(false);
    }
  };

  const handleGetInsight = async () => {
    const summaryStats = calculateSummaryStats(
      normalizeStats(player1?.player_stats)
    );
    const summaryStats2 = calculateSummaryStats(
      normalizeStats(player2?.player_stats)
    );
    if (!player1 || !player2) return;
    setLoadingInsight(true);
    const result = await fetchAIInsight(
      player1,
      player2,
      summaryStats,
      summaryStats2
    );
    setInsight(result);
    setLoadingInsight(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-center">Compare Players</h1>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Select Player 1</h2>
          <PlayerSearch
            onSelect={(p) => handleSelectPlayer(p, 1)}
            placeholder="Search Player 1..."
          />
          {loading1 && (
            <p className="mt-2 text-sm text-gray-500">Loading player...</p>
          )}
          {player1 && !loading1 && <CompareCard player={player1} />}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Select Player 2</h2>
          <PlayerSearch
            onSelect={(p) => handleSelectPlayer(p, 2)}
            placeholder="Search Player 2..."
          />
          {loading2 && (
            <p className="mt-2 text-sm text-gray-500">Loading player...</p>
          )}
          {player2 && !loading2 && <CompareCard player={player2} />}
        </div>
      </div>

      {player1 && player2 && (
        <div className="text-center">
          {insight == null && (
            <button
              onClick={handleGetInsight}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              disabled={loadingInsight}
            >
              {loadingInsight ? "Generating Insight..." : "Get AI Insight"}
            </button>
          )}
        </div>
      )}

      {insight && (
        <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded">
          {insight}
        </div>
      )}
    </div>
  );
};

export default ComparePage;
