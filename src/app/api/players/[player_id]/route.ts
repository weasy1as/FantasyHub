// app/api/players/[player_id]/route.ts
//import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ player_id: string }> }
) {
  const player_id = (await params).player_id;
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
