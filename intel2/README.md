# AmeriClean Intel Hub — Admin (Backend-free)

This is a GitHub Pages–safe, **backend-free** admin dashboard:

- **Competitors**: cards + trends, threat rank, and **Counter-Strategy** with conservative budget, channel split, CPL targets, and tactics.
- **Local Keywords**: loads from a **public JSON URL** (GitHub raw/Gist) when **Live** is ON, else uses a seeded list; shows a **Google Trends** embed for the top keyword.
- **PPC Planner**: groups keywords into ad groups and computes a quick budget → clicks → leads forecast.
- **Settings**: set a keyword JSON URL without a backend.

## Deploy
1) Upload everything to your repo root (replace old files).  
2) Ensure `.nojekyll` exists.  
3) GitHub Pages → either **GitHub Actions** (workflow included) or **Deploy from branch**.

## Keyword JSON format
```json
[
  {"keyword":"water damage billings","volume":900,"cpc":16.5,"intent":"Emergency","service":"Water Damage"}
]
```
or
```json
{ "keywords": [ ... ] }
```

## Notes
- Exact **search volumes/CPC** from Google Ads require an API/key or backend. This build stays backend-free by using your JSON URL + Google Trends embeds.
- Upload button on the Keywords page lets you import a JSON file manually if needed.
