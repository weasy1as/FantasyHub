import Image from "next/image";
import PlayerSearch from "@/components/PlayerSearch";
import Stats from "@/components/Stats";

interface StatItem {
  player_id: number;
  element: number;
  name: string;
  assists?: number;
  goals_scored?: number;
  clean_sheets?: number;
  team?: string;
}

async function getStatsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/stats`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json() as Promise<{
    topAssists: StatItem[];
    topGoals: StatItem[];
    topCleanSheets: StatItem[];
  }>;
}

export default async function Home() {
  const { topAssists, topGoals, topCleanSheets } = await getStatsData();

  return (
    <div>
      <div className="md:flex items-center justify-between p-7">
        <div>
          <h1 className="pl-9 font-bold text-[36px] max-w-[400px]">
            Level up your fantasy team with FPL Analytics
          </h1>
          <p className="pl-9 font-bold text-[26px]">
            Every Goal, Assist, and Stat—All in One Place
          </p>
          <p className="pl-9 font-bold text-[19px]">
            Your Ultimate FPL Analytics Hub
          </p>
        </div>

        <img
          className="w-[400px] sm:w-[500px]"
          src="https://fantasy.premierleague.com/static/media/player-comp-5-2x.d02a3f06.png"
          alt="FPL Player Graphic"
        />
      </div>

      {/* 🔍 Add Player Search Below Hero */}
      <div className="my-10 px-4">
        <PlayerSearch />
        <div className="mt-9">
          <Stats
            topAssists={topAssists}
            topGoals={topGoals}
            topCleanSheets={topCleanSheets}
          />
        </div>
      </div>
    </div>
  );
}
