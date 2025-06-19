import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { player1Name, player1Stats, player2Name, player2Stats } =
    await req.json();

  if (!player1Name || !player1Stats || !player2Name || !player2Stats) {
    return NextResponse.json({ error: "Missing player data" }, { status: 400 });
  }

  function formatStats(stats: any[]) {
    return stats
      .slice(-5) // last 5 gameweeks
      .map((s, i) => {
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
    Compare the two fantasy football players below based on their recent performance and stats.
    Provide a brief comparison and recommend which of the two players the user should buy.

    Player 1: ${player1Name}
    Stats: ${formatStats(player1Stats)}

    Player 2: ${player2Name}
    Stats:${formatStats(player2Stats)}
  `;

  try {
    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7,
        }),
      }
    );

    if (!openaiRes.ok) {
      const errorDetails = await openaiRes.text();
      console.error("OpenAI error:", errorDetails);
      return NextResponse.json(
        { error: "Failed to get AI insight" },
        { status: openaiRes.status }
      );
    }

    const data = await openaiRes.json();
    console.log("Prompt tokens:", data.usage.prompt_tokens);
    console.log("Completion tokens:", data.usage.completion_tokens);
    console.log("Total tokens:", data.usage.total_tokens);
    const insight = data.choices?.[0]?.message?.content;

    return NextResponse.json({ insight });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
