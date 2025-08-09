# AmeriClean Intel Hub — Unified Admin (Backend-free, Multi‑Model)

**What this is**
- A GitHub Pages–safe, backend‑free dashboard that combines the **competitors** view, **keywords** view, **per‑competitor strategy**, and a **Master Strategy**.
- It includes a **multi‑model orchestrator**: load JSON outputs from models like "gemini", "o3", "gpt5", "gpt5pro". The app will **merge** them and generate a master plan.
- A **failsafe Recompile** button lets you rebuild the plan after switching models or updating provider URLs — no backend needed.

**How to use providers (Gemini, etc.)**
1) In `assets/config.js`, set `PROVIDER_URLS` to public JSON URLs (GitHub raw or Gists).  
2) On the site, toggle **Live (keywords/providers)** ON and click **Recompile Master Plan**.  
3) Or go to **Models & Settings** → **Upload Provider JSON** to load files directly (stored in browser cache), then **Recompile**.

**Provider JSON format (flexible)**:
```json
{
  "provider": "gemini",
  "competitors": {
    "servpro-billings": {
      "budget": 21000,
      "mix": {"PPC":0.4,"LSAs":0.25,"LocalSEO":0.2,"PaidSocial":0.1,"CRO":0.05},
      "tactics": ["..."],
      "keywords": [{"keyword":"water damage billings","volume":950,"cpc":17.0,"intent":"Emergency","service":"Water Damage"}]
    }
  },
  "master": {
    "budget": 15000,
    "mix": {"PPC":0.35,"LSAs":0.2,"LocalSEO":0.25,"PaidSocial":0.1,"CRO":0.1},
    "notes": ["..."]
  }
}
```

**Aggregation rules**
- **Budget**: median across models + local engine
- **Mix**: averaged and renormalized
- **Tactics**: union + de‑dupe
- **Keywords**: union + de‑dupe, prefers higher volume/CPC

**Backend‑free keyword sourcing**
- Set `KEYWORD_JSON_URL` in `assets/config.js` to fetch a public JSON list.  
- If not set, a conservative seed for Billings, MT is used.  
- Google Trends embeds require no key (not included here to avoid external iframes).

**Deploy**
- Upload all files to your repo root and ensure `.nojekyll` exists.  
- Use GitHub Actions (workflow included) or Deploy-from-branch.

**Failsafe (“Recompile with new model”)**
- The **Recompile Master Plan** button rebuilds everything with whatever provider JSONs are available at that moment.
- When you later adopt a new model or update URLs, click **Recompile** to integrate the new outputs.

---
Notes:
- Exact Google Ads volume/CPC requires a paid API or your own proxy. This build remains backend‑free.  
- To persist Settings/URLs across browsers, edit `assets/config.js` directly in the repo.
