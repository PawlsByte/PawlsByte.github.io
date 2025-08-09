#!/usr/bin/env bash
set -euo pipefail
branch="${1:-main}"
git add . && git commit -m "Deploy CIH" || true
git push origin "$branch"
echo "If not live yet: Repo → Settings → Pages → Source: GitHub Actions"
