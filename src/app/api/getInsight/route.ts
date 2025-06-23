import { NextRequest, NextResponse } from "next/server";
import { player_stats } from "../../../../generated/prisma";

export async function POST(req: NextRequest) {
  const { playerName, playerStats, statsOverall } = await req.json();

  function formatStats(stats: player_stats[]) {
    const sortedStats = [...stats].sort(
      (a, b) =>
        new Date(a.kickoff_time!).getTime() -
        new Date(b.kickoff_time!).getTime()
    );

    return sortedStats
      .slice(-5) // last 5 gameweeks
      .map((s) => {
        return `Gameweek ${s.gw_id}:
        Minutes: ${s.minutes}, 
        Points: ${s.total_points}, 
        Goals: ${s.goals_scored}, 
        Assists: ${s.assists}, 
        Clean Sheets: ${s.clean_sheets || 0}, 
        xG: ${s.expected_goals}, 
        xA: ${s.expected_assists}`;
      })
      .join("\n\n");
  }

  const prompt = `
You are a Fantasy Premier League expert.

Based on the following current-season stats for the player "${playerName}", provide a short but insightful summary (2–4 sentences). 
Your analysis should cover:

1. Their recent form (last 5 gameweeks)
2. Their overall season performance
3. A recommendation: Buy, Avoid, or Shortlist (with reasoning)

Player Data:
${formatStats(playerStats)}

Player season stats so far:
${JSON.stringify(statsOverall)}

Only use the stats provided. Do not mention any team history or past seasons.
`;
  try {
    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, // stored in .env.local
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7,
        }),
      }
    );

    const data = await openaiRes.json();
    console.log("Prompt tokens:", data.usage.prompt_tokens);
    console.log("Completion tokens:", data.usage.completion_tokens);
    console.log("Total tokens:", data.usage.total_tokens);
    const insight = data.choices?.[0]?.message?.content;

    return NextResponse.json({ insight });
  } catch (error) {
    console.error("Error getting AI insight:", error);
    return NextResponse.json(
      { error: "Failed to get AI insight" },
      { status: 500 }
    );
  }
}
