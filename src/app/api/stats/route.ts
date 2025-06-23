import { prisma } from "@/lib/prisma";

export async function GET() {
  function replacer(key: string, value: unknown): unknown {
    return typeof value === "bigint" ? value.toString() : value;
  }

  // Top 5 by assists
  const topAssists = await prisma.merged_gw_summary.findMany({
    orderBy: {
      total_assists: "desc",
    },
    take: 5,
  });

  // Top 5 by goals
  const topGoals = await prisma.merged_gw_summary.findMany({
    orderBy: {
      total_goals: "desc",
    },
    take: 5,
  });

  // Top 5 by clean sheets
  const topCleanSheets = await prisma.merged_gw_summary.findMany({
    orderBy: {
      total_clean_sheets: "desc",
    },
    take: 5,
  });

  return new Response(
    JSON.stringify(
      {
        topAssists,
        topGoals,
        topCleanSheets,
      },
      replacer
    ),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
