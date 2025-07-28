// Netlify serverless function to proxy AI tutor requests to OpenAI
export async function handler(event, context) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: "Missing OPENAI_API_KEY" }) };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const { messages } = JSON.parse(event.body || "{}");
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are an expert NADCA ASCS study tutor. Prefer citing ACR 2021, EPA Mold, NAIMA AH-122, SMACNA where relevant. Avoid guessing; say when uncertain." },
          ...(messages || [])
        ],
        temperature: 0.2
      })
    });
    const data = await resp.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
}
