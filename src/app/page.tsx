import PlayerSearch from "@/components/PlayerSearch";
import Stats from "@/components/Stats";
import Image from "next/image";

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
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 items-center bg-gradient-to-br from-blue-50 to-white">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-800 leading-snug">
            Level up your fantasy team with{" "}
            <span className="text-indigo-600">FPL Analytics</span>
          </h1>
          <p className="text-lg text-gray-600">
            Every Goal, Assist, and Stat—All in One Place
          </p>
          <p className="text-md text-gray-500">
            Your Ultimate FPL Analytics Hub
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            height={330}
            width={330}
            className="w-full max-w-md"
            src="https://fantasy.premierleague.com/static/media/player-comp-5-2x.d02a3f06.png"
            alt="FPL Player Graphic"
          />
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Search for Your Favorite Players
          </h2>
          <PlayerSearch />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <Stats
            topAssists={topAssists}
            topGoals={topGoals}
            topCleanSheets={topCleanSheets}
          />
        </div>
      </section>
    </main>
  );
}
