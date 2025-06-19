// app/api/players/[player_id]/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { player_id: string } }
) {
  const { player_id } = context.params;
  const id = Number(player_id);

  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: "Invalid player ID" }), {
      status: 400,
    });
  }

  const player = await prisma.players.findUnique({
    where: { player_id: id },
    include: { player_stats: true },
  });

  if (!player) {
    return new Response(JSON.stringify({ error: "Player not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(player), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
