// pages/api/posts.ts or app/api/posts/route.ts
import { prisma } from "@/lib/prisma";

export async function GET() {
  const teams = await prisma.teams.findMany();
  return new Response(JSON.stringify(teams));
}
