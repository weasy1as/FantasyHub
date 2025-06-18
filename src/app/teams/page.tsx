"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
  const [players, setPlayers] = useState([]);
  const Router = useRouter();

  useEffect(() => {
    const fetchTeams = async () => {
      const res = await fetch("/api/teams");
      const data = await res.json();

      const sortedData = [...data].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );

      setTeams(sortedData);
    };
    fetchTeams();
  }, []);

  const handleSelect = (team) => {
    Router.push(`/teams/${team}`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Premier League Teams</h1>

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {teams.map((team: any) => (
          <div
            key={team.team_id}
            onClick={() => handleSelect(team.team_id)}
            className={`cursor-pointer border rounded-lg p-4 shadow hover:bg-gray-100 ${
              selectedTeamId === team.id ? "bg-blue-100" : ""
            }`}
          >
            <h2 className="font-semibold text-lg">{team.name}</h2>
          </div>
        ))}
      </div>

      {selectedTeamId && (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Players</h2>
          {players.length === 0 ? (
            <p>No players found for this team.</p>
          ) : (
            <ul className="space-y-2">
              {players.map((player: any) => (
                <li key={player.id} className="p-2 border rounded-md">
                  {player.name} — {player.position}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
