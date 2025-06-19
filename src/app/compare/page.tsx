"use client";

import React, { useState } from "react";
import CompareCard from "@/components/compareCard";
import PlayerPage from "@/components/PlayerPage";
import PlayerSearch from "@/components/PlayerSearch";

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

// Simulated AI call - replace with actual API call later
const fetchAIInsight = async (player1Name: string, player2Name: string) => {
  await new Promise((r) => setTimeout(r, 1500));
  return `Insight: ${player1Name} vs ${player2Name} – Based on form and stats, ${player1Name} may have an edge in attacking potential.`;
};

const ComparePage = () => {
  const [player1, setPlayer1] = useState<any | null>(null);
  const [player2, setPlayer2] = useState<any | null>(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);

  const handleSelectPlayer = async (player, slot: 1 | 2) => {
    const setPlayer = slot === 1 ? setPlayer1 : setPlayer2;
    const setLoading = slot === 1 ? setLoading1 : setLoading2;

    setLoading(true);
    try {
      const fullPlayer = await getPlayer(player.player_id);
      setPlayer(fullPlayer);
    } catch (err) {
      console.error("Error loading player", err);
      setPlayer(null);
    } finally {
      setLoading(false);
    }
  };

  const handleGetInsight = async () => {
    if (!player1 || !player2) return;
    setLoadingInsight(true);
    const result = await fetchAIInsight(player1.name, player2.name);
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
          <button
            onClick={handleGetInsight}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={loadingInsight}
          >
            {loadingInsight ? "Generating Insight..." : "Get AI Insight"}
          </button>
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
