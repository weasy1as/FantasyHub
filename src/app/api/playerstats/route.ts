// app/api/players/route.ts
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id");

  // Safely parse to number
  const id = idParam !== null ? Number(idParam) : null;

  const playerStats = await prisma.player_stats.findMany({
    where: {
      player_id: id,
    },
  });

  return new Response(JSON.stringify({ playerStats }));
}
