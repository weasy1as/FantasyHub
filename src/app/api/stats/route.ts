import { prisma } from "@/lib/prisma";

function replaceBigIntWithString(obj: any): any {
  if (typeof obj === "bigint") {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    return obj.map(replaceBigIntWithString);
  } else if (obj !== null && typeof obj === "object") {
    const newObj: any = {};
    for (const key in obj) {
      newObj[key] = replaceBigIntWithString(obj[key]);
    }
    return newObj;
  }
  return obj;
}

export async function GET(req: Request) {
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
    JSON.stringify({
      topAssists: replaceBigIntWithString(topAssists),
      topGoals: replaceBigIntWithString(topGoals),
      topCleanSheets: replaceBigIntWithString(topCleanSheets),
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
