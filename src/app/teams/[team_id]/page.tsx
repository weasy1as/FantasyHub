"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function TeamPage() {
  const { team_id } = useParams();
  const Router = useRouter();
  const [teamName, setTeamName] = useState<string | null>(null);
  const [groupedPlayers, setGroupedPlayers] = useState<Record<string, any[]>>(
    {}
  );

  useEffect(() => {
    const fetchTeamAndPlayers = async () => {
      try {
        // Fetch all teams and find the matching team name
        const teamRes = await fetch("/api/teams");
        const allTeams = await teamRes.json();

        const matchedTeam = allTeams.find(
          (team: any) => team.team_id === parseInt(team_id as string)
        );

        if (!matchedTeam) return;

        setTeamName(matchedTeam.name);

        // Fetch all players
        const playersRes = await fetch("/api/players");
        const allPlayers = await playersRes.json();

        // Filter players by team name
        const teamPlayers = allPlayers.filter(
          (p: any) => p.team === matchedTeam.name
        );

        const grouped = {
          Goalkeepers: teamPlayers.filter((p: any) => p.position === "GK"),
          Defenders: teamPlayers.filter((p: any) => p.position === "DEF"),
          Midfielders: teamPlayers.filter((p: any) => p.position === "MID"),
          Forwards: teamPlayers.filter((p: any) => p.position === "FWD"),
        };

        setGroupedPlayers(grouped);
      } catch (err) {
        console.error("Error loading team and players", err);
      }
    };

    if (team_id) {
      fetchTeamAndPlayers();
    }
  }, [team_id]);

  const handleSelect = (player) => {
    Router.push(`/players/${player}`);
  };

  if (!teamName) {
    return <div className="p-6">Loading team...</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{teamName}</h1>

      {Object.entries(groupedPlayers).map(([group, players]) => (
        <div key={group} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{group}</h2>
          {players.length === 0 ? (
            <p className="text-gray-500">No players in this position.</p>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {players.map((player: any) => (
                <li
                  key={player.player_id}
                  onClick={() => handleSelect(player.player_id)}
                  className="border rounded p-3 hover:bg-gray-100"
                >
                  {player.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
