# NADCA ASCS Prep (Astro · GitHub Pages)

A content-first, interactive study site aligned to the **official ASCS blueprint**. Features lessons (MDX), quizzes, full exam simulator (150Q), flashcards, charts, and an AI tutor via a tiny proxy.

## Quick start
```bash
npm i
npm run dev
```

## Configure for GitHub Pages (project site)
- Edit `astro.config.mjs`:
  - `site`: `https://PawlsByte.github.io/ASCS`
  - `base`: `/ASCS/`
- Commit to `main`. GitHub Action in `.github/workflows/deploy.yml` builds & deploys to Pages.

## AI Tutor
Default set to **Cloudflare Workers** proxy:
- **Cloudflare Workers**: deploy `ai-proxy/worker.js`, set `OPENAI_API_KEY`, note the Workers URL, and update `Layout.astro`'s `TUTOR_URL`.
- **Netlify**: set `OPENAI_API_KEY` env var; deploy with `netlify.toml` + `netlify/functions/ask.js`. Local path `/api/ask` is redirected.
- **Cloudflare Workers**: deploy `ai-proxy/worker.js` and set `OPENAI_API_KEY`. Point your site to the worker route, or update the fetch URL in `Layout.astro` to your Worker endpoint.

## Question bank
Replace samples in `src/data/questions/`. Use the schema:
```json
{ "id":"","domain":"D5","stem":"","choices":["A","B","C","D"],"answer":2,"explanation":"","sources":[{"ref":"ACR 2021"}],"provenance":[{"site":"ITExams"}],"confidence":"verified" }
```
Vetting: cross-check against ACR 2021/EPA/NAIMA/SMACNA.

## Notes
- This is an **unofficial** prep resource. Do not upload confidential exam content.
- Images live in `public/img/`.

---

## Fully automated CI/CD

This repo ships with a single workflow that:
1) Deploys the **Cloudflare Worker** (`ai-proxy/worker.js`) via **Wrangler**.
2) Sets the Worker secret `OPENAI_API_KEY` non‑interactively from your GitHub secret.
3) Builds the **Astro** site and deploys to **GitHub Pages**.

### One‑time setup (GitHub → Settings → Secrets and variables → Actions)
Add repository **Secrets**:
- `CF_API_TOKEN` — Cloudflare API token with **Workers Scripts:Edit** and **Account:Read**.
- `CF_ACCOUNT_ID` — your Cloudflare **Account ID**.
- `OPENAI_API_KEY` — your OpenAI API key.

*(Optional variables: if your Workers subdomain differs from `americlean`, change `.env.production` or set a variable and template it.)*

### One‑time setup (Cloudflare Dashboard)
- Ensure your Workers subdomain is set to **americlean** (Workers & Pages → *Settings* → *Subdomain*).
- No routes needed; the Worker will be available at: `https://ascs-ai-tutor.americlean.workers.dev`.

### Local development
Copy `.env.example` → `.env` and adjust `PUBLIC_TUTOR_URL` if needed.
