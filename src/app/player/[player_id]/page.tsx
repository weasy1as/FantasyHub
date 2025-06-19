"use client";

import React, { useState, useEffect } from "react";
import PlayerPage from "@/components/PlayerPage";

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

// Simulated AI call - replace with your real API integration
const fetchAIInsight = async (playerName: string) => {
  const defaultPrompt = `Provide a concise insight about the player ${playerName}, including whether users should buy, shortlist, or avoid this player based on recent performance and stats.`;
  await new Promise((r) => setTimeout(r, 1500)); // simulate delay
  // Return a mocked insight (replace with your real AI response)
  return `AI insight for ${playerName}: Based on recent stats and form, it's recommended to consider buying if budget allows.`;
};

const PlayerStatsPage = ({ params }: { params: { player_id: string } }) => {
  const [player, setPlayer] = useState<any>(null);
  const [loadingPlayer, setLoadingPlayer] = useState(true);
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);

  useEffect(() => {
    getPlayer(params.player_id)
      .then((data) => {
        setPlayer(data);
        setLoadingPlayer(false);
      })
      .catch(() => setLoadingPlayer(false));
  }, [params.player_id]);

  const handleGetInsight = async () => {
    if (!player) return;
    setLoadingInsight(true);
    const result = await fetchAIInsight(player.name);
    setInsight(result);
    setLoadingInsight(false);
  };

  if (loadingPlayer) return <div>Loading player...</div>;
  if (!player) return <div>Player not found.</div>;

  return (
    <div>
      <PlayerPage
        player={player}
        insight={insight}
        onGetInsight={handleGetInsight}
        loadingInsight={loadingInsight}
      />
    </div>
  );
};

export default PlayerStatsPage;
