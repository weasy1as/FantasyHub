"use client";

import React, { useState, useEffect } from "react";
import PlayerPage from "@/components/PlayerPage";
import { useParams } from "next/navigation";
import { calculateSummaryStats, normalizeStats } from "@/lib/playerStats";
import { player_stats } from "../../../../prisma/generated/prisma";

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

type PlayerWithStats = {
  player_id: number;
  name: string;
  position: string | null;
  team: string | null;
  element: number | null;
  player_stats: player_stats[];
};

const PlayerStatsPage = () => {
  const [player, setPlayer] = useState<PlayerWithStats | null>(null);
  const [loadingPlayer, setLoadingPlayer] = useState(true);
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);
  const params = useParams();
  const playerId = params?.player_id;

  const summaryStats = player?.player_stats
    ? calculateSummaryStats(normalizeStats(player.player_stats))
    : null;

  const fetchAIInsight = async (player: PlayerWithStats) => {
    const cacheKey = `openai_response_${playerId}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      console.log(`Using cached response for player ${playerId}:`, cached);
      return cached;
    }

    const res = await fetch("/api/getInsight", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        playerName: player.name,
        playerStats: player.player_stats,
        stats: summaryStats,
      }),
    });

    const data = await res.json();
    console.log(data);
    localStorage.setItem(cacheKey, data.insight);
    return data.insight;
  };

  useEffect(() => {
    if (typeof playerId === "string") {
      getPlayer(playerId)
        .then((data) => {
          setPlayer(data);
          setLoadingPlayer(false);
        })
        .catch(() => setLoadingPlayer(false));
    } else {
      setLoadingPlayer(false);
    }
  }, [playerId]);

  const handleGetInsight = async () => {
    if (!player) return;
    setLoadingInsight(true);
    const result = await fetchAIInsight(player);
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
