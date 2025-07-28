// Cloudflare Workers AI proxy for OpenAI
// Usage: deploy this worker and set env var OPENAI_API_KEY
export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }
    const OPENAI_API_KEY = env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'Missing OPENAI_API_KEY' }), { status: 500 });
    }
    try {
      const body = await request.json();
      const messages = body.messages || [];
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
            ...messages
          ],
          temperature: 0.2
        })
      });
      return new Response(await resp.text(), { status: resp.status, headers: { "Content-Type": "application/json" } });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
  }
};
