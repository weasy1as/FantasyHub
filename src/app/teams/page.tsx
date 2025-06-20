"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { teams } from "@/generated/prisma";

export default function TeamsPage() {
  const [teams, setTeams] = useState<teams[]>([]);
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

  const handleSelect = (teamId: number) => {
    Router.push(`/teams/${teamId}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          Premier League Teams
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teams.map((team: any) => (
            <div
              key={team.team_id}
              onClick={() => handleSelect(team.team_id)}
              className={`cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg border border-gray-200 transition duration-300 hover:bg-indigo-50`}
            >
              <h2 className="text-xl font-semibold text-gray-700 text-center">
                {team.name}
              </h2>
            </div>
          ))}
        </div>

        {selectedTeamId && (
          <section className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              Players
            </h2>
            {players.length === 0 ? (
              <p className="text-center text-gray-500">
                No players found for this team.
              </p>
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {players.map((player: any) => (
                  <li
                    key={player.id}
                    className="bg-white p-4 rounded-lg border border-gray-200 shadow hover:shadow-md transition"
                  >
                    <p className="font-medium text-gray-800">{player.name}</p>
                    <p className="text-sm text-gray-500">{player.position}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
