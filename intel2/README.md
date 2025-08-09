# Competitive Intel Hub — Automated Package

Files:
- `.nojekyll` — disables Jekyll/Liquid
- `index.html` — working standalone dashboard (no backend needed)
- `index_live.html` — quick live API connectivity checker
- `assets/config.js` — set `window.API_BASE`
- `.github/workflows/pages.yml` — auto-deploy to GitHub Pages on push
- `scripts/deploy.sh` — optional helper

## Deploy (web UI)
1) Upload **everything** to your repo root.
2) Go to **Settings → Pages**, set **Source: GitHub Actions** (uses the workflow here).
3) Wait for the action to finish. Visit `https://<you>.github.io/<repo>/`.

## Live API
Edit `assets/config.js` with your API URL, then open `/index_live.html` and click **Test Fetch**.
