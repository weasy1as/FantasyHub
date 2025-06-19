import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { playerName, playerStats } = await req.json();

  const prompt = `Give a brief insight about ${playerName}, including whether a fantasy user should buy, avoid, or shortlist them based on their performance in the last five gameweeks and overall. Use the following data: ${playerStats}.`;

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
