// app/api/players/route.ts
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";

  if (search.length < 2) {
    return new Response(JSON.stringify({ players: [] }));
  }

  const players = await prisma.players.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    select: {
      player_id: true,
      name: true,
      position: true,
      team: true,
    },
    take: 10,
  });

  return new Response(JSON.stringify({ players }));
}
