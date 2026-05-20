#!/usr/bin/env bash
set -e

TIMESTAMP=$(date '+%Y-%m-%d %H:%M')

echo "🔍 Checking for uncommitted changes..."

# Stage everything (respects .gitignore)
git add -A

if git diff --staged --quiet; then
  echo "✅ Nothing to commit — working tree clean."
else
  echo "📦 Committing changes: backup $TIMESTAMP"
  git commit -m "chore: backup before deploy — $TIMESTAMP"
fi

echo "⬆️  Pushing to origin main..."
git push origin main

echo "✅ Backup pushed. Starting Vercel deploy..."
