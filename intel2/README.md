# AmeriClean Intel Hub — Unified Admin v2 (Fixed)

**What’s fixed/improved**
- Fully implemented charts (no truncated code), interactive everywhere.
- Hash routing ensures **Open Strategy** always loads the competitor detail, even after refresh.
- Deep competitor drilldowns (Snapshot, SEO Audit, Paid Ads, Social & Reviews, Local Pack & GBP, Counter Plan, Action Plan).
- **Print / Save PDF** buttons on competitor detail and master strategy (uses print CSS).
- Simple model modes (Local / Provider URLs / Upload) + **Recompile** button.
- Backend-free; Pages-friendly; includes `.nojekyll` and `assets/config.js`.

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

**Printing**
- Use the **Print Current View** button (top right) or the **Print** buttons inside Competitor and Master pages.  
- Clean print styles are applied automatically for PDF exports.
