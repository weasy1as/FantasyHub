"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function TeamPage() {
  const { team_id } = useParams();
  const router = useRouter();
  const [teamName, setTeamName] = useState<string | null>(null);
  const [groupedPlayers, setGroupedPlayers] = useState<Record<string, any[]>>(
    {}
  );

  useEffect(() => {
    const fetchTeamAndPlayers = async () => {
      try {
        const teamRes = await fetch("/api/teams");
        const allTeams = await teamRes.json();

        const matchedTeam = allTeams.find(
          (team: any) => team.team_id === parseInt(team_id as string)
        );

        if (!matchedTeam) return;

        setTeamName(matchedTeam.name);

        const playersRes = await fetch("/api/players");
        const allPlayers = await playersRes.json();

        const teamPlayers = allPlayers.filter(
          (p: any) => p.team === matchedTeam.name
        );

        const grouped = {
          Goalkeepers: teamPlayers.filter((p) => p.position === "GK"),
          Defenders: teamPlayers.filter((p) => p.position === "DEF"),
          Midfielders: teamPlayers.filter((p) => p.position === "MID"),
          Forwards: teamPlayers.filter((p) => p.position === "FWD"),
        };

        setGroupedPlayers(grouped);
      } catch (err) {
        console.error("Error loading team and players", err);
      }
    };

    if (team_id) fetchTeamAndPlayers();
  }, [team_id]);

  const handleSelect = (playerId: number) => {
    router.push(`/player/${playerId}`);
  };

  if (!teamName) {
    return <div className="p-6">Loading team...</div>;
  }

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-indigo-700 mb-10 text-center">
        {teamName} Squad
      </h1>

      {Object.entries(groupedPlayers).map(([position, players]) => (
        <div key={position} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-1">
            {position}
          </h2>
          {players.length === 0 ? (
            <p className="text-gray-500">No players in this position.</p>
          ) : (
            <ul className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {players.map((player) => (
                <li
                  key={player.player_id}
                  onClick={() => handleSelect(player.player_id)}
                  className="cursor-pointer border bg-white p-4 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200"
                >
                  <p className="font-medium text-gray-800">{player.name}</p>
                  <p className="text-sm text-gray-500">{player.position}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
