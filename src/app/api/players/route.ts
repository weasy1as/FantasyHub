// pages/api/posts.ts or app/api/players/route.ts
import { prisma } from "@/lib/prisma";

export async function GET() {
  const players = await prisma.players.findMany();
  return new Response(JSON.stringify(players));
}
