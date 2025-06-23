"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { teams } from "../../../generated/prisma";

export default function TeamsPage() {
  const [teams, setTeams] = useState<teams[]>([]);

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
          {teams.map((team: teams) => (
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
      </div>
    </main>
  );
}
