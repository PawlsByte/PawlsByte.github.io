# AmeriClean Intel Hub — Unified Admin v2 (Backend-free)

**What’s new**
- Deep, per-competitor **drilldowns**: Snapshot, **SEO Audit**, **Paid Ads** (keywords + clicks forecast), **Social & Reviews**, **Local Pack & GBP**, **Counter Plan**, and **Action Plan**.
- **Open Strategy fixed** via hash routing (`#/competitor/<id>`). Cards and buttons now reliably open the detail panel.
- **Simplified model switching**: a single dropdown (Local Engine / Provider URLs / Upload Files). Click **Recompile Master Plan** to merge provider JSONs.
- Backend-free keyword sourcing with optional `window.KEYWORD_JSON_URL`.

**Deploy**
1) Upload all files to your repo root.  
2) Ensure `.nojekyll` exists.  
3) Use GitHub Actions (included) or Deploy-from-branch.

**Provider JSON format (flexible)**
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
  }
}
```

**Tip**: Anyone on your team can use **Upload Files** mode → drop JSON for Gemini/o3/GPT → **Recompile** → open competitor detail → **Counter Plan**.
